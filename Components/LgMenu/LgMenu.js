import styles from "./Style";
import { Pressable, Text, View} from 'react-native';
import React, {useState} from 'react';
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
          {icon}
          <View style={styles.menuContent}>
            <Text style={{textAlign:"center"}}>
              <Text style={disabled?{color:"#00345955"}:{color:"#003459"}}>{text}</Text>
            </Text>
          </View>
        </View>
      </Pressable>
    );
  }

export default MenuItem;