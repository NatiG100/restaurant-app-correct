import React from 'react';
import HomeScreen from './Pages/Home/Home';
import {Provider, useSelector} from 'react-redux';
import configureStore from './Store/configureStore';
import Menu from './Components/Menu/Menu';
import { View } from 'react-native';
export default function App() {
  const store = configureStore();
  return(
    <Provider store={store}>
      <View>
        <Menu/>
        <HomeScreen/>
      </View>
    </Provider>
  );
}
