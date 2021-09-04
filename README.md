## To-do list with React Native

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

## Views & Texts

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

## react-native-paper

Unfortunately, Material-UI in React is not compatible with React Native. Therefore, in order to use material design in react native, you need to use react-native-paper.

1. install react-native-paper

```
npm install react-native-paper
```

2. edit babel.config.js

```

```

## State

You can use state like React such as useState, useEffect

## Button

Button props

- title - text in the button
- onPress - when press the button what function will be applied
- color - color code

```javascript

```

## Text Inputs

use `<TextInput />` to create text input form

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

## Alerts

Show alert message using **Alert** component from react-native

## Dismissing the keyboard

If you want the keyboard to be disappeared when press on the space. You need to import **TouchableWithoutFeedback** and **Keyboard** component.

```javascript
<TouchableWithoutFeedback onPress={() => {
  Keyboard.dismiss();
}}>
```

## Reference

- [define root component](https://stackoverflow.com/questions/47742280/how-to-define-entry-point-for-react-native-app)
-
