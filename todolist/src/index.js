import React from 'react';
import { registerRootComponent } from 'expo';
import App from './App';

const index = () => {
  return <App />;
};

export default registerRootComponent(index);
