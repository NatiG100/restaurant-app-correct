import React from 'react';

import {View,Text, Pressable} from 'react-native';
import IconI from 'react-native-vector-icons/Ionicons';
import {useDispatch,useSelector} from 'react-redux';
import {backPressed} from './../../actions/navigator'

import styles from './Style';

const Navigator = ()=>{
    const dispatch = useDispatch();
    const thiss= "asdf";
    const that = thiss.toUpperCase;
    const {location} = useSelector((state)=>(state.navigator));
    const goBackHandler = ()=>{
        dispatch(backPressed());
    }  
    return(
        <View style={styles.navContainer}>
            <Pressable onPress={goBackHandler}>
                <IconI name="arrow-back" size={23} color={location.length===1?"#00a8e833":"#00a8e8"}/>
            </Pressable>
            <Text style={styles.location}>Home</Text>
        </View>
    );
}

export default Navigator;