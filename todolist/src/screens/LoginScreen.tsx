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
import { AntDesign } from '@expo/vector-icons';
import colors from '../styles/colors';

const LoginScreen = ({ navigation }: NavigationProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={globalStyles.container}>
        <View style={styles.loginContainer}>
          <AntDesign name="profile" size={36} color="black" />
          <Title style={globalStyles.header}>เข้าสู่ระบบ</Title>
        </View>
        <TextInput
          style={styles.inputField}
          mode="outlined"
          label="ชื่อผู้ใช้"
          value={username}
          onChangeText={(username) => setUsername(username)}
        />
        <TextInput
          style={styles.inputField}
          mode="outlined"
          label="รหัสผ่าน"
          secureTextEntry={true}
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
        <Button
          style={styles.submitButton}
          icon="login"
          mode="contained"
          onPress={() => {
            navigation.navigate('TodoList');
          }}
        >
          เข้าสู่ระบบ
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

export default LoginScreen;
