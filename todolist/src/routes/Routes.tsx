import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialIcons } from '@expo/vector-icons';

// screens
import LoginScreen from '../screens/LoginScreen';
import TodoListScreen from '../screens/TodoListScreen';
import { logout } from '../utils';

const Stack = createNativeStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerTitle: 'Todo List Application',
          }}
        />
        <Stack.Screen
          name="TodoList"
          component={TodoListScreen}
          options={({ navigation }) => ({
            headerTitle: 'Todo List Application',
            headerLeft: () => <></>,
            headerRight: () => (
              <MaterialIcons
                name="logout"
                size={24}
                color="black"
                onPress={() => logout(navigation)}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
