import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import { Modal, Button } from 'react-native-paper';
import globalStyles from '../styles/global';

interface AddModalProps {
  isOpen: boolean;
  addTodoList: Function;
  closeModal: Function;
  isError: Boolean;
}

const AddModal: React.FC<AddModalProps> = ({
  isOpen,
  addTodoList,
  closeModal,
  isError,
}) => {
  const [task, setTask] = useState('');
  const [when, setWhen] = useState('');

  const hideModal = () => {
    closeModal();
  };

  return (
    <Modal
      visible={isOpen}
      onDismiss={hideModal}
      contentContainerStyle={globalStyles.container}
    >
      <Text style={globalStyles.header}>เพิ่มรายการ</Text>
      <Text style={globalStyles.body}>งาน</Text>
      <TextInput
        style={globalStyles.inputField}
        value={task}
        onChangeText={(task) => setTask(task)}
      />
      <Text style={globalStyles.body}>เวลา</Text>
      <TextInput
        style={globalStyles.inputField}
        value={when}
        onChangeText={(when) => setWhen(when)}
      />
      {isError && (
        <Text style={globalStyles.errorText}>
          ท่านกรอกงานหรือเวลาไม่ถูกต้อง
        </Text>
      )}
      <View style={globalStyles.buttonContainer}>
        <Button
          style={globalStyles.submitButton}
          mode="contained"
          onPress={() => closeModal()}
        >
          ยกเลิก
        </Button>
        <Button
          style={globalStyles.submitButton}
          mode="contained"
          onPress={async () => {
            addTodoList(task, when).then((err: any) => {
              setTask('');
              setWhen('');
              if (!err) closeModal();
            });
          }}
        >
          เพิ่ม
        </Button>
      </View>
    </Modal>
  );
};

export default AddModal;
