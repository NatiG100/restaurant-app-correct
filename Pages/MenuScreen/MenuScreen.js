import React from 'react';

import {View} from 'react-native';

import Filter from './Filter/Filter';
import Category from './../../Components/Category/Category';

const MenuScreen =()=>{
    return(
        <View>
            <Filter/>
            <Category/>
        </View>
    );
}

export default MenuScreen;