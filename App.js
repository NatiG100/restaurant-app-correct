import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import {  Pressable,ScrollView,ImageBackground,Animated, Image,StyleSheet, Text, View, Button} from 'react-native';
import {Divider, ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFoundation from 'react-native-vector-icons/Foundation';
const Localization = {
  Amh:{
    getBrandLeft:()=>("ስዊፍት "),
    getBrandRight:()=>("ሜኑ"),
    getQRMenu:()=>("የ QR ኮዱን ይቃኙ"),
    getSelectedRestaurant:()=>("ምንም ምግብ ቤት አልተመረጠም (አንዱን ለመምረጥ የ QR ኮዱን ይቃኙ።)"),
    getHelpMenu:()=>("ይህን መተግበሪያ እንዴት መጠቀም እችላለሁ?"),
    getLanguage:()=>("ቋነቋ"),
  },
  Eng:{
    getBrandLeft:()=>("Swift "),
    getBrandRight:()=>("Menu"),
    getQRMenu:()=>("Scan the QR code"),
    getSelectedRestaurant:()=>("No restaurant selected (Scan the QR code to selct one.)"),
    getHelpMenu:()=>("How can I use this app?"),
    getLanguage:()=>("Language"),
  }
}

export default function App() {
  const [local,setLocal] = useState("Amh");
  const toggleVisibility = () =>{
    setShow(state=>(!state));
  }
  const MenuItem = ({text,icon,disabled})=>{
    const [handsOn,setHandsOn] = useState(false);
    return(
      <Pressable 
        onPressIn={()=>{
          setHandsOn(true)
        }}
        onPressOut={()=>{
          setHandsOn(false);
        }}
      >
        <View style={handsOn?styles.menuItemPressed:styles.menuItem}>
          {icon&&<Icon name={icon} size={50} color={disabled?"#007EA755":"#007EA7"}/>}
          <View style={styles.menuContent}>
            <Text style={{textAlign:"center"}}>
              <Text style={disabled?{color:"#00345955"}:{color:"#003459"}}>{text}</Text>
            </Text>
          </View>
        </View>
      </Pressable>
    );
  }
  return (
    <View style={styles.container}>
        <View style={styles.homeHeader}>
          <Text style={styles.text}>
            <Text style={styles.brandLeft}>{Localization[local].getBrandLeft()}</Text>
            <Text style={styles.brandRight}>{Localization[local].getBrandRight()}</Text>
          </Text>
          <IconFoundation name="thumbnails" color="#00A8E8" size={40}/>
        </View>
        <ScrollView style={styles.menuList}>
            <MenuItem text={Localization[local].getQRMenu()} icon="qr-code-outline" />
            <Divider orientation="horizontal" width={2}/>
            <MenuItem disabled={true} text={Localization[local].getSelectedRestaurant()} icon="fast-food-outline"/>
            <Divider orientation="horizontal" width={2}/>
            <MenuItem text={Localization[local].getHelpMenu()} icon="question"/>
            <Divider orientation="horizontal" width={2}/>
        </ScrollView>
      <Icon name="language" size={20} color="#00A8E8"/><Text>{Localization[local].getLanguage()}</Text>
      <Pressable onPress={()=>setLocal("Eng")}>
        <ListItem bottomDivider> 
          <ListItem.Content>
            <ListItem.Title>English</ListItem.Title>  
            </ListItem.Content>      
        </ListItem>
      </Pressable>
      <Pressable onPress={()=>setLocal("Amh")}>
        <ListItem bottomDivider> 
        <ListItem.Content>
        <ListItem.Title>አማርኛ</ListItem.Title>  
        </ListItem.Content>      
        </ListItem>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fcfcfc',
    height:"100%",
  },
  menuList:{
    // flex:5,
    backgroundColor:"#fff"
  },
  homeHeader:{
    padding:8,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    backgroundColor: "#00171F",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  brand:{
    fontSize:"40px",
  },
  brandLeft:{
    fontWeight:"bold",
    color:"#00A8E8",
  },
  brandRight:{
    color:"#FFFFFF",
    fontWeight:10,
  },
  menuItem:{
    height:"120px",
    display:'flex',
    alignItems:"center",
    justifyContent:"center",
    borderBottom:"2px solid #00171F",
    backgroundColor:"#00171F05",
    padding:"7px",
    borderRadius:2,
  },
  menuItemPressed:{
    height:"120px",
    display:'flex',
    alignItems:"center",
    justifyContent:"center",
    borderBottom:"2px solid #00171F",
    backgroundColor:"#00000015",
    padding:"7px",
    borderRadius:2,
  },
  menuItemIcon:{
    width: 50,
    height:50,
  },
  menuContent:{
  }
});
