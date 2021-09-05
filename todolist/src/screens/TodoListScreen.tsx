import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import { Button, Title, TextInput } from 'react-native-paper';
import { NavigationProps, Tasks } from 'type.model';
import globalStyles from '../styles/global';
import axios from 'axios';
import colors from '../styles/colors';

// get and delete token
import { getData } from '../utils';

// icon
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const TodoListScreen = ({ navigation }: NavigationProps) => {
  const [tasks, setTasks] = useState([
    {
      id: 2,
      name: 'นัดทานข้าวเที่ยง',
      when: '2021-08-01T12:00:00',
    },
    {
      id: 1,
      name: 'ส่งพัสดุไปรษณีย์',
      when: '2021-08-02T10:00:00',
    },
    {
      id: 8,
      name: 'นัดทำการบ้าน',
      when: '2021-08-03T10:00:00',
    },
  ]);

  useEffect(() => {
    if (getData('token') === null) {
      navigation.navigate('Login');
    }
    // getTodoList();
  }, [navigation]);

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

  const addTodoList = (name: string, when: Date) => {
    const token = getData('token');

    const data = {
      name: name,
      when: when,
    };

    axios
      .post('https://learningportal.ocsc.go.th/todoapi/activities', data, {
        headers: { Authorization: 'Bearer ' + token },
      })
      .then((response) => {
        if (response.status === 201) {
          getTodoList();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const editTodoList = (id: number, name: string, when: Date) => {
    const token = getData('token');

    const data = {
      name: name,
      when: when,
    };

    axios
      .put('https://learningportal.ocsc.go.th/todoapi/activities/' + id, data, {
        headers: { Authorization: 'Bearer ' + token },
      })
      .then((response) => {
        if (response.status === 201) {
          getTodoList();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteTodoList = (id: number) => {
    const token = getData('token');

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
            <Title style={globalStyles.header}>รายการสิ่งที่ต้องทำ</Title>
            <View style={styles.alignAddIcon}>
              <Button
                icon="clipboard-plus"
                style={styles.addButton}
                mode="contained"
                onPress={() => console.log('Pressed')}
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
                      style={styles.icon}
                    />
                    <MaterialIcons
                      name="delete-outline"
                      size={24}
                      color="red"
                      style={styles.icon}
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
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
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
    marginLeft: 8,
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
