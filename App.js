import React, { useEffect } from 'react';
import {Provider, useSelector} from 'react-redux';
import configureStore from './Store/configureStore';
import Menu from './Components/Menu/Menu';
import { View,Text } from 'react-native';
import Header from './Components/Header/Header';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import HomeScreen from './Pages/Home/Home';
// import ScanQR from './Pages/ScanQR/ScanQR';
import MenuScreen from './Pages/MenuScreen/MenuScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  const store = configureStore();
  const Index=()=>{
    const{location} = useSelector((state)=>(state.navigator));
    console.log(location);
    const curLoc=location[location.length-1];
    return(
      <View>
        <Menu/>
        <Header/>
        {(curLoc==="home")&&<HomeScreen/>}
        {(curLoc==="menu")&&<MenuScreen/>}
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Scan QR"
            component={MenuScreen}
            oprions={{title:"Scan the QR code"}}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            oprions={{title:"Welcome"}}
          />
        </Stack.Navigator>
      </NavigationContainer> */}
      </View>
    );
  }
  return(
    <Provider store={store}>
      <Index/>
    </Provider>
  );
}
