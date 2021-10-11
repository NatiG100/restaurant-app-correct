import React from 'react';
import IconI from 'react-native-vector-icons/Ionicons';
import {View, Text} from 'react-native';

import styles from './Style';

const Category = ()=>{
    return(
        <View style={styles.categoryContainer}>
            <IconI name="arrow-back" size={23} color={"#666"}/>
            <Text style={styles.categoryText}>All</Text>
            <IconI name="arrow-forward" size={23} color={"#666"}/>
        </View>
    );
}

export default Category;