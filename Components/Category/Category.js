import React from 'react';

import {useDispatch,useSelector} from 'react-redux';
import IconI from 'react-native-vector-icons/Ionicons';
import {View, Text, Pressable} from 'react-native';

import {nextFood,nextBeverage,previousFood,previousBeverage} from './../../actions/category';

import styles from './Style';

const Category = ()=>{
    const dispatch = useDispatch();
    const {
        currentFoodCategory,
        currentBeverageCategory,
        foodCategories,
        beverageCategories
    } = useSelector((state)=>(state.category));
    const {isFood} = useSelector((state)=>(state.filter));
    const {language} = useSelector((state)=>(state.preference));
    const index = language==="Eng"?0:1;
    const foodNextable=currentFoodCategory<foodCategories.length-1;
    const beverageNextable=currentBeverageCategory<beverageCategories.length-1;
    return(
        <View style={styles.categoryContainer}>
            <Pressable 
                onPress={
                    ()=>isFood?dispatch(previousFood()):dispatch(previousBeverage())
                }
            >
                <IconI 
                    name="arrow-back" 
                    size={23} 
                    color={isFood&&currentFoodCategory===0||!isFood&&currentBeverageCategory===0?"#66666655":"#666"}
                />
            </Pressable>
            <Text style={styles.categoryText}>
                {isFood?foodCategories[currentFoodCategory][index]
                :beverageCategories[currentBeverageCategory][index]}
            </Text>
            <Pressable 
                onPress={
                    ()=>isFood?dispatch(nextFood()):dispatch(nextBeverage())
                }
            >
                <IconI 
                    name="arrow-forward" 
                    size={23} 
                    color={isFood&&foodNextable||!isFood&&beverageNextable?"#666":"#66666655"}
                />
            </Pressable>
        </View>
    );
}

export default Category;