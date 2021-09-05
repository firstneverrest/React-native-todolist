import { deleteData } from './storage';
import { Alert } from 'react-native';

export const logout = (navigation: any) => {
  Alert.alert('ออกจากระบบ', 'ท่านต้องการออกจากระบบหรือไม่', [
    {
      text: 'ออกจากระบบ',
      onPress: () => {
        deleteData('token');
        navigation.navigate('Login');
      },
    },
    { text: 'ยกเลิก', onPress: () => null },
  ]);
};
