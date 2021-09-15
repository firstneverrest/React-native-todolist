import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { NavigationProps } from 'type.model';
import globalStyles from '../styles/global';
import { Login } from '../type.model';
import API from '../api';

// icon
import { AntDesign } from '@expo/vector-icons';
import colors from '../styles/colors';

// store token
import { storeData } from '../utils';

const LoginScreen = ({ navigation }: NavigationProps) => {
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = () => {
    const data = {
      userid: username,
      password: password,
    };

    console.log('login');

    API.post<Login>('tokens', data)
      .then((response) => {
        if (response.status === 200 || 201) {
          const token = response.data.token;
          storeData('token', token);
          setMessage('');
          setIsError(false);
          setUsername('');
          setPassword('');

          navigation.navigate('TodoList');
        }
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
        setMessage('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
      });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={globalStyles.container}>
        <View style={styles.loginContainer}>
          <AntDesign name="profile" size={36} color="black" />
          <Text style={globalStyles.header}>เข้าสู่ระบบ</Text>
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
        {isError && <Text style={styles.errorText}>{message}</Text>}
        <Button
          style={styles.submitButton}
          icon="login"
          mode="contained"
          onPress={() => loginHandler()}
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
  errorText: {
    color: 'red',
    paddingVertical: 6,
    alignSelf: 'center',
  },
});

export default LoginScreen;
