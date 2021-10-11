import React from 'react';

import {useDispatch,useSelector} from 'react-redux';
import IconI from 'react-native-vector-icons/Ionicons';
import {View, Text, Pressable} from 'react-native';

import {next,previous} from './../../actions/category';

import styles from './Style';

const Category = ()=>{
    const dispatch = useDispatch();
    const {currentCategory,categories} = useSelector((state)=>(state.category));
    const nextable=currentCategory<categories.length-1;
    return(
        <View style={styles.categoryContainer}>
            <Pressable onPress={()=>dispatch(previous())}>
                <IconI name="arrow-back" size={23} color={currentCategory===0?"#66666655":"#666"}/>
            </Pressable>
            <Text style={styles.categoryText}>{categories[currentCategory]}</Text>
            <Pressable onPress={()=>dispatch(next())}>
                <IconI name="arrow-forward" size={23} color={nextable?"#666":"#66666655"}/>
            </Pressable>
        </View>
    );
}

export default Category;