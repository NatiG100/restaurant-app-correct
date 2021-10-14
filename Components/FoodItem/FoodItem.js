import React from 'react';
import {useSelector} from 'react-redux';
import {View, Text,Image,TouchableHighlight,Pressable} from 'react-native';

import styles from './Style';
const FoodItem = ({food})=>{
    const {price,title,category,fasting,image} = food;
    const {language} = useSelector((state)=>(state.preference));
    const getLocalText = (allTexts)=>{
        if(!allTexts||allTexts.length===0){
            return "error!"
        }
        if(allTexts.length===1){
            return allTexts[0]
        }
        if(language==="Eng"){
            return allTexts[0]
        }
        return allTexts[1]
    } 
    const getLocalFastingText =(fasting) =>{
        if(language==="Eng"){
            return fasting?"Fasting":"Non-Fasting"
        }
        return fasting?"የጾም":"የፍስክ"
    } 
    return(
        <TouchableHighlight
            onPress={()=>console.log("clicked")}
            underlayColor="#22222215"
            activeOpacity={0.6}
        >
            <View style={styles.root}>
                <View style={styles.imageWrapper}>
                    <Image
                        source={require(__dirname+"/../../assets/BG.jpg")}
                        style={styles.image}
                        resizeMode="cover"
                    />
                </View>
                <View style={styles.content}>
                    <View style={styles.topContent}>
                        <Text style={styles.title}>{getLocalText(title)}</Text>
                        <Text style={styles.category}>{getLocalText(category)}</Text>
                    </View>
                    <View style={styles.bottomContent}>
                        <View style={styles.info}>
                            <Text style={styles.price}>{price}</Text>
                            <Text style={styles.fasting}>{getLocalFastingText(fasting)}</Text>
                        </View>
                        <Pressable onPress={()=>console.log("clicked")}>
                            <Text style={styles.detail}>View Detail</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    );
}

export default FoodItem;