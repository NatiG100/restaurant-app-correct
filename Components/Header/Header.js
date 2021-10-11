import React from 'react';
import { Pressable,ScrollView, Text, View} from 'react-native';
import IconFoundation from 'react-native-vector-icons/Foundation';
import styles from './Style';
import Localization from './../../Localization';
import toggleMenu from './../../actions/menu';
import {useDispatch, useSelector} from 'react-redux';

import Navigator from '../Navigator/Navigator';

const Header = () =>{
    const {language} = useSelector((state)=>(state.preference));
    const dispatch = useDispatch();
    return (
        <View style={styles.header}>
            <Navigator/>
            {/* <Text style={styles.text}>
                <Text style={styles.brandLeft}>{Localization[language].getBrandLeft()}</Text>
                <Text style={styles.brandRight}>{Localization[language].getBrandRight()}</Text>
            </Text> */}
            <Pressable onPress={()=>dispatch(toggleMenu(true))}>
                <IconFoundation name="thumbnails" color="#00A8E8" size={40}/>
            </Pressable>
        </View>
    );
}

export default Header;