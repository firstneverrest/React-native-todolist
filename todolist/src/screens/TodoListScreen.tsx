import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import { Button } from 'react-native-paper';
import { NavigationProps } from 'type.model';
import globalStyles from '../styles/global';
import axios from 'axios';
import colors from '../styles/colors';

// components
import AddModal from '../components/AddModal';
import EditModal from '../components/EditModal';

// get and delete token
import { getData } from '../utils';

// icon
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const TodoListScreen = ({ navigation }: NavigationProps) => {
  const [tasks, setTasks] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editTask, setEditTask] = useState({});
  const [isEditError, setIsEditError] = useState(false);
  const [isAddError, setIsAddError] = useState(false);

  useEffect(() => {
    if (getData('token') === null) {
      navigation.navigate('Login');
    }
    getTodoList();
  }, [navigation]);

  const closeModal = () => {
    setIsEditModalOpen(false);
    setIsAddModalOpen(false);
    setIsAddError(false);
    setIsEditError(false);
  };

  const getTodoList = async () => {
    const token = await getData('token');

    axios
      .get('https://learningportal.ocsc.go.th/todoapi/activities', {
        headers: { Authorization: 'Bearer ' + token },
      })
      .then((response) => {
        if (response.status === 200) {
          let todoData = response.data;
          setTasks(todoData);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addTodoList = async (name: string, when: Date) => {
    const token = await getData('token');

    const data = {
      name: name,
      when: when,
    };

    const response = await axios
      .post('https://learningportal.ocsc.go.th/todoapi/activities', data, {
        headers: { Authorization: 'Bearer ' + token },
      })
      .then((response) => {
        if (response.status === 200 || 201) {
          getTodoList();
          return false;
        }
      })
      .catch((error) => {
        console.log(error);
        setIsAddError(true);
        return true;
      });

    return response;
  };

  const editTodoList = async (id: number, name: string, when: Date) => {
    const token = await getData('token');

    const data = {
      name: name,
      when: when,
    };

    const response = await axios
      .put('https://learningportal.ocsc.go.th/todoapi/activities/' + id, data, {
        headers: { Authorization: 'Bearer ' + token },
      })
      .then((response) => {
        if (response.status === 200 || 201) {
          getTodoList();
          console.log('complete');
          return false;
        }
      })
      .catch((error) => {
        console.log(error);
        setIsEditError(true);
        return true;
      });

    return response;
  };

  const deleteTodoList = async (id: number) => {
    const token = await getData('token');

    axios
      .delete('https://learningportal.ocsc.go.th/todoapi/activities/' + id, {
        headers: { Authorization: 'Bearer ' + token },
      })
      .then((response) => {
        if (response.status === 201) {
          getTodoList();
        }
      })
      .catch((error) => {
        getTodoList();
        console.log(error);
      });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={globalStyles.container}>
        <ScrollView>
          <View style={styles.loginContainer}>
            <Text style={globalStyles.header}>รายการสิ่งที่ต้องทำ</Text>
            <View style={styles.alignAddIcon}>
              <Button
                icon="clipboard-plus"
                style={styles.addButton}
                mode="contained"
                onPress={() => setIsAddModalOpen(true)}
              >
                เพิ่มงาน
              </Button>
            </View>
            {tasks.map((item: any) => {
              return (
                <View key={item.id} style={styles.card}>
                  <View>
                    <Text style={globalStyles.body}>{item.name}</Text>
                    <Text style={globalStyles.body}>{item.when}</Text>
                  </View>
                  <View style={styles.taskIcons}>
                    <AntDesign
                      name="edit"
                      size={24}
                      color="black"
                      onPress={() => {
                        setIsEditModalOpen(true);
                        setEditTask({
                          id: item.id,
                          name: item.name,
                          when: item.when,
                        });
                      }}
                    />
                    <MaterialIcons
                      name="delete-outline"
                      size={24}
                      color="red"
                      style={styles.icon}
                      onPress={() => deleteTodoList(item.id)}
                    />
                  </View>
                </View>
              );
            })}
            {tasks.length === 0 && (
              <View style={styles.blank}>
                <Text style={styles.blankText}>ไม่มีรายการสิ่งที่ต้องทำ</Text>
              </View>
            )}
          </View>
        </ScrollView>
        {isAddModalOpen && (
          <AddModal
            isOpen={true}
            addTodoList={addTodoList}
            closeModal={closeModal}
            isError={isAddError}
          />
        )}
        {isEditModalOpen && (
          <EditModal
            isOpen={true}
            editTodoList={editTodoList}
            closeModal={closeModal}
            editTask={editTask}
            isError={isEditError}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    zIndex: -1,
    alignItems: 'center',
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 4,
    padding: 10,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'black',
    shadowOpacity: 1,
    elevation: 3,
    marginVertical: 6,
    width: '85%',
    flexDirection: 'row',
  },
  blank: {
    justifyContent: 'center',
    marginTop: 16,
    backgroundColor: colors.white,
    width: '85%',
    height: 400,
  },
  blankText: {
    fontSize: 16,
    alignSelf: 'center',
  },
  taskIcons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 16,
  },
  alignAddIcon: {
    width: '85%',
  },
  inputField: {
    alignSelf: 'center',
    height: 40,
    fontFamily: 'sarabun-regular',
    fontSize: 16,
    width: '80%',
    marginBottom: 6,
  },
  addButton: {
    alignSelf: 'flex-end',
    height: 36,
    fontSize: 12,
    width: 110,
    marginBottom: 6,
    marginTop: 10,
    backgroundColor: colors.darkPurple,
  },
});

export default TodoListScreen;
