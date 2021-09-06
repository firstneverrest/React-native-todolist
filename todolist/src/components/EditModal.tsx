import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import { Modal, Button } from 'react-native-paper';
import globalStyles from '../styles/global';

interface EditModalProps {
  isOpen: boolean;
  editTodoList: Function;
  closeModal: Function;
  editTask: any;
  isError: Boolean;
}

const EditModal: React.FC<EditModalProps> = ({
  isOpen,
  editTodoList,
  closeModal,
  editTask,
  isError,
}) => {
  const [task, setTask] = useState(editTask.name);
  const [when, setWhen] = useState(editTask.when);

  const hideModal = () => {
    closeModal();
  };

  return (
    <Modal
      visible={isOpen}
      onDismiss={hideModal}
      contentContainerStyle={globalStyles.container}
    >
      <Text style={globalStyles.header}>แก้ไขรายการ</Text>
      <Text style={globalStyles.body}>งาน</Text>
      <TextInput
        style={globalStyles.inputField}
        value={task}
        onChangeText={(task) => setTask(task)}
      />
      <Text style={globalStyles.textInput}>เวลา</Text>
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
            editTodoList(editTask.id, task, when).then((err: any) => {
              setTask('');
              setWhen('');
              if (!err) closeModal();
            });
          }}
        >
          แก้ไข
        </Button>
      </View>
    </Modal>
  );
};

export default EditModal;
