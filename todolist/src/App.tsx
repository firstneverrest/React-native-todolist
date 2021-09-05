import React, { useState } from 'react';
import { Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Routes from './routes/Routes';
import globalStyles from './styles/global';

const getFonts = () =>
  Font.loadAsync({
    'sarabun-thin': require('../assets/fonts/Sarabun-Thin.ttf'),
    'sarabun-light': require('../assets/fonts/Sarabun-Light.ttf'),
    'sarabun-regular': require('../assets/fonts/Sarabun-Regular.ttf'),
    'sarabun-bold': require('../assets/fonts/Sarabun-Bold.ttf'),
  });

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState<Boolean>(false);

  if (fontsLoaded) {
    return <Routes />;
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={() => console.log('error')}
      >
        <View style={globalStyles.container}>
          <Text>Loading</Text>
        </View>
      </AppLoading>
    );
  }
};

export default App;
