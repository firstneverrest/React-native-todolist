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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
