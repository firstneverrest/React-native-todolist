import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Button, Title, TextInput } from 'react-native-paper';
import { NavigationProps } from 'type.model';
import globalStyles from '../styles/global';

// icon
import colors from '../styles/colors';

const TodoListScreen = ({ navigation }: NavigationProps) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={globalStyles.container}>
        <View style={styles.loginContainer}>
          <Title style={globalStyles.header}>
            ตารางแสดงรายการสิ่งที่ต้องทำ
          </Title>
        </View>
        <Button
          style={styles.submitButton}
          icon="login"
          mode="contained"
          onPress={() => {
            navigation.navigate('TodoList');
          }}
        >
          ออกจากระบบ
        </Button>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    alignItems: 'center',
  },
  inputField: {
    alignSelf: 'center',
    height: 40,
    fontFamily: 'sarabun-regular',
    fontSize: 16,
    width: '80%',
    marginBottom: 6,
  },
  submitButton: {
    alignSelf: 'center',
    height: 40,
    fontSize: 12,
    width: '80%',
    marginTop: 6,
    backgroundColor: colors.darkPurple,
  },
});

export default TodoListScreen;
