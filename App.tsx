import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MainApp from './src';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <MainApp />
    </NavigationContainer>
  );
}

export default App;
