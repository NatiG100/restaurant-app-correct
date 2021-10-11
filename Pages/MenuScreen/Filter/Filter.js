import React, { useState } from 'react';

import {View,Text, Pressable} from 'react-native';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import { Divider } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';

import {toggleFoodOrBvrg, toggleFastening} from './../../../actions/filter';

import styles from './Style';

import SortModal from './SortModal';

const FilterElement = ({icon, lable, pressHandler})=>{
    const [pressed,setPressed] = useState(false);
    return(
        <Pressable 
            onPressIn={()=>setPressed(true)} 
            onPressOut={()=>setPressed(false)} 
            onPress={pressHandler}
            style={pressed?styles.filterElPressed:styles.filterEl}
        >
            <View style={styles.filterElVw}>
                {icon}
                <Text style={styles.filterElLbl}>{lable}</Text>
            </View>
        </Pressable>
    );
}
const Filter = () =>{
    const [isOpen,setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const {isFood, isFasting} = useSelector((state)=>(state.filter));
    return(
        <View>
            <SortModal isOpen={isOpen} setIsOpen={setIsOpen}/>
            <View style={styles.filter}>
                <FilterElement
                    icon={isFood?<IconFA5 name="hamburger" size={20} color="#fff"/>:
                                <IconMI name="emoji-food-beverage" size={19} color="#fff"/>}
                    lable={isFood?"FOOD":"BEVERAGE"}
                    pressHandler = {()=>dispatch(toggleFoodOrBvrg())}
                />
                <Divider orientation="vertical" width={1} style={styles.filterDivider}/>
                
                <FilterElement
                    icon={isFasting?<IconFA5 name="seedling" size={20} color="#fff"/>:
                                    <IconMCI name="sheep" size={21} color="#fff"/>}
                    lable={isFasting?"FASTING":"NON-FASTING"}
                    pressHandler = {()=>dispatch(toggleFastening())}
                />
                <Divider orientation="vertical" width={1} style={styles.filterDivider}/>
                {/* <FilterElement
                    icon={<IconFA name="filter" size={18} color="#fff"/>}
                    lable="FILTER"
                />
                <Divider orientation="vertical" width={1} style={styles.filterDivider}/> */}
                <FilterElement
                    icon={<IconFA5 name="sort" size={20} color="#fff"/>}
                    lable="SORT"
                    pressHandler = {()=>setIsOpen(true)}
                />
            </View>
        </View>
    );
}

export default Filter;