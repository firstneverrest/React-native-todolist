import { NativeStackScreenProps } from '@react-navigation/native-stack';

export interface Login {
  token: string;
}

type RootStackParamList = {
  Login: undefined;
  TodoList: undefined;
  Profile: { userId: string };
  Feed: { sort: 'latest' | 'top' } | undefined;
};

export type NavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'Login'
>;

export interface Tasks {
  id: number;
  name: string;
  when: Date;
}
