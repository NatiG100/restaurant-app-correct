import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Pressable,ScrollView, Text, View} from 'react-native';
import {Divider, ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Style';
import Localization from './../../Localization';
import MenuItem from '../../Components/LgMenu/LgMenu';
import { useDispatch, useSelector } from 'react-redux';
import toggleMenu from './../../actions/menu';
const HomeScreen = ()=>{
    const [local,setLocal] = useState("Amh");
    const dispatch = useDispatch();
    const toggleVisibility = () =>{
      setShow(state=>(!state));
    }
    const {language} = useSelector((state)=>(state.preference));
    return (
      <View style={styles.container}>
          <View style={styles.homeHeader}>
            <Text style={styles.text}>
              <Text style={styles.brandLeft}>{Localization[language].getBrandLeft()}</Text>
              <Text style={styles.brandRight}>{Localization[language].getBrandRight()}</Text>
            </Text>
            <Pressable onPress={()=>dispatch(toggleMenu(true))}>
              <IconFoundation name="thumbnails" color="#00A8E8" size={40}/>
            </Pressable>
          </View>
          <ScrollView style={styles.menuList}>
              <MenuItem 
                text={Localization[language].getQRMenu()} 
                icon={<Icon name="qr-code-outline"  size={50} color={false?"#007EA755":"#007EA7"}/>}
              />
              <Divider orientation="horizontal" width={2}/>
              <MenuItem 
                text={Localization[language].getSelectedRestaurant()} 
                icon={<Icon name="fast-food-outline"  size={50} color={true?"#007EA755":"#007EA7"}/>}
                disabled={true}
              />
              <Divider orientation="horizontal" width={2}/>
              <MenuItem 
                text={Localization[language].getHelpMenu()} 
                icon={<IconMaterialCommunityIcons name="head-question-outline"  size={50} color={false?"#007EA755":"#007EA7"}/>}
              />
              <Divider orientation="horizontal" width={2}/>
          </ScrollView>
        <StatusBar style="auto" />
      </View>
    );
  }
  export default HomeScreen;