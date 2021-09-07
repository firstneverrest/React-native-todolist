<p align="center">
    <img alt="React-native" src="./React-native-thumbnail.svg" width="300" />
</p>

React Native use React to create mobile apps (Android & iOS). It's very great choice for developers already familiar with React for web app.

React Native create an app by building a component tree as React concept.

## Installation and Setup

There are two ways to create react native app: Expo CLI and React Native CLI.

- Expo CLI suits with who is new to mobile development: Expo provide everything that make mobile development easier.
- React Native CLI suits with who is already familiar with mobile development: more flexible but it requires Xcode or Android Studio to get started.

In this tutorial will use Expo CLI for to-do list app

1. install via npm or yarn

```
npm install -g expo-cli
```

2. use expo to create project and run project

```
expo init my-project
```

3. Then choose a template: blank or other
4. run project

```
cd my-project
npm start
```

5. When the app start running, it will open the web on localhost:19002. You would see the QR Code which you can download expo application in your mobile phone and open the app directly in your phone.

6. However, it will be more convenient if you install [Android Studio](https://developer.android.com/studio) in your computer.

   1. Open android studio and click **More Actions**
   2. Choose AVD Manager (Android virtual devices)
   3. Create Virtual Device
   4. Select any device that you want
   5. Download the latest system image and click next
   6. You can rename your chosen device and config it
   7. In actions section, click run button
   8. The emulator will launch can open the mobile phone on your screen.

7. Run your project with `npm start`. Then click Run an Android device/emulator. Then, your mobile phone emulator will install Expo app automatically and open your react-native app in your emulator like your physical device that install expo and scan the QR Code.

8. Start coding your project!

## Folder Structure

- .expo - created when use `npm start`, use to store cache and setting when develop.
- .expo-shared
- assets - keep images, font and other
- App.js - the root component
- app.json - information in your project

## Set index.js to be the root component

In order to set other component to be the root component instead of App.js, you need to set entryPoint in app.json

```json
{
  "expo": {
    "entryPoint": "./src/index.js"
  }
}
```

You need to use index.js with **js** extension because when building the app (android & ios) need to get index.js. Therefore, index.ts or index.tsx can't be used.

```javascript
// index.js
import React from 'react';
import { registerRootComponent } from 'expo';
import App from './App';

const index = () => {
  return <App />;
};

export default registerRootComponent(index);
```

## Views & Text

- Views - use to wrap other component like div tag but you can't like text directly inside.
- Text - use to insert text

```javascript
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      <Text>Hello World!</Text>
    </View>
  );
```

## Styles

use StyleSheet from react-native to style the components

```javascript
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
});
```

### Global styling

Writing the same CSS Code can be cumbersome. Therefore, global styling is the solution.

```javascript
// global.ts
import { StyleSheet } from 'react-native';
import colors from './colors';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 16,
  },
  header: {
    fontFamily: 'sarabun-bold',
    fontSize: 20,
    marginVertical: 4,
    lineHeight: 40,
    alignSelf: 'center',
  },
  body: {
    fontFamily: 'sarabun-regular',
    fontSize: 16,
  },
  primary: {
    color: colors.darkPurple,
  },
  secondary: {
    color: colors.lightPurple,
  },
  lightGrey: {
    color: colors.lightGrey,
  },
  darkGrey: {
    color: colors.darkGrey,
  },
  white: {
    color: colors.white,
  },
  black: {
    color: colors.black,
  },
  error: {
    color: colors.default.error,
  },
  success: {
    color: colors.default.success,
  },
});

export default globalStyles;
```

```javascript
import globalStyles from './styles/global';

<View style={globalStyles.container}>
  <Text>Loading</Text>
</View>;
```

## react-native-paper

Unfortunately, Material-UI in React is not compatible with React Native. Therefore, in order to use material design in react native, you need to use react-native-paper.

1. install react-native-paper

```
npm install react-native-paper
```

2. edit babel.config.js

```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};
```

## State

You can use state like React such as useState, useEffect and much more.

## Button

Button props

- title - text in the button
- onPress - when press the button what function will be applied
- color - color code

```js
// Button from react-native-paper
import { Button } from 'react-native-paper';

<Button
  style={globalStyles.submitButton}
  mode="contained"
  onPress={() => closeModal()}
>
  ยกเลิก
</Button>;
```

## Text Inputs

use `<TextInput />` to create text input form

```js
// text input from react-native-paper
import { Button, TextInput } from 'react-native-paper'
...
<TextInput
  style={styles.inputField}
  mode="outlined"
  label="username"
  value={username}
  onChangeText={(username) => setUsername(username)}
/>
```

```javascript
// text input from react-native
import { TextInput } from 'react-native';
...
<TextInput
  style={globalStyles.inputField}
  value={task}
  onChangeText={(task) => setTask(task)}
/>
```

## Lists

use the same logic like React

```javascript
{
  array.map((item) => {
    return (
      <View key={item.key}>
        <Text>{item.name}</Text>
      </View>
    );
  });
}
```

## ScrollView

By default, react-native app cannot be scroll. Therefore, you need to import **ScrollView** and wrap the element that need to be scrolled.

```javascript
import { TouchableWithoutFeedback } from 'react-native';

return (
  ...
  <ScrollView>
    <div></div>
  </ScrollView>
);
```

## Alerts

Show alert message using **Alert** component from react-native

```javascript
Alert.alert('ออกจากระบบ', 'ท่านต้องการออกจากระบบหรือไม่', [
  { text: 'ยกเลิก', onPress: () => null },
  {
    text: 'ออกจากระบบ',
    onPress: () => {
      deleteData('token');
      navigation.navigate('Login');
    },
  },
]);
```

## Dismissing the keyboard

If you want the keyboard to be disappeared when press on the space. You need to import **TouchableWithoutFeedback** and **Keyboard** component.

```javascript
import { TouchableWithoutFeedback } from 'react-native';

<TouchableWithoutFeedback
  onPress={() => {
    Keyboard.dismiss();
  }}
>
  ...
</TouchableWithoutFeedback>;
```

## Icons

Expo provide icons by default when you install `expo init`. Look about [expo icons here](https://icons.expo.fyi/).

```javascript
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
    </View>
  );
}
```

## Custom font

1. Add font with .ttf format in the assets/fonts
2. Use Font.loadAsync() to load fonts
3. Use AppLoading component to show something while font is loading
4. If you get error with expo-app-loading, you can install it by `expo install expo-app-loading`

```javascript
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Login from './screens/Login';

const getFonts = () =>
  Font.loadAsync({
    'sarabun-thin': require('../assets/fonts/Sarabun-Thin.ttf'),
    'sarabun-light': require('../assets/fonts/Sarabun-Light.ttf'),
    'sarabun-regular': require('../assets/fonts/Sarabun-Regular.ttf'),
    'sarabun-bold': require('../assets/fonts/Sarabun-Bold.ttf'),
  });

const App: React.FC = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return <Login />;
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={() => console.log('error')}
      >
        <View style={styles.container}>
          <Text>Hello World!</Text>
        </View>
      </AppLoading>
    );
  }
};
```

## React Navigation

Add Routing and Navigation in your project

```
npm install @react-navigation/native
expo install react-native-screens react-native-safe-area-context
```

#### Stack Navigator

```
npm install @react-navigation/native-stack
```

```javascript
// Routes.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialIcons } from '@expo/vector-icons';

// screens
import LoginScreen from '../screens/LoginScreen';
import TodoListScreen from '../screens/TodoListScreen';
import { logout } from '../utils';

// initialize stack
const Stack = createNativeStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            // config header
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
              // use icon as header
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
```

### Async Storage

Use to store data in mobile storage like cookie on web browser

```
npm install @react-native-async-storage/async-storage
```

```javascript
// storage.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (name: string, value: Object) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@' + name, jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const getData = async (name: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem('@' + name);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};

export const deleteData = async (name: string) => {
  try {
    const jsonValue = await AsyncStorage.removeItem('@' + name);
  } catch (e) {
    console.log(e);
  }
};
```

## Build app

1. use `expo build:android` for building android app or use `expo build:ios` for building ios app
2. Expo will ask you to login with Expo account
3. Choose apk or abb (app bundle)
4. Build app
5. After building app is completed, you can download apk or abb file on your local pc.

## Reference

- [define root component](https://stackoverflow.com/questions/47742280/how-to-define-entry-point-for-react-native-app)
- [React Native](https://reactnative.dev/)
- [Expo](https://docs.expo.dev/)
- [react-native-paper](https://callstack.github.io/react-native-paper/)
- [React Navigation](https://reactnavigation.org/)
