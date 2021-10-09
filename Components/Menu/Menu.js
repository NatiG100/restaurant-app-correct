import React from 'react';
import {Overlay} from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import toggleMenu from './../../actions/menu';
import {changeLanguage} from './../../actions/preference';
import Localization from './../../Localization';
import { Pressable, ScrollView, Text, View} from 'react-native';
import {ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'modal-react-native-web';
import styles from './Style';
const Menu = () =>{
    const MenuHeader = ({icon,title})=>{
        return(
            <View style={styles.menuHeader}>
                {icon&&icon}
                <Text style={styles.menuHeaderText}>{title}</Text>
            </View>
        );
    }

    const dispatch = useDispatch();
    const {menuVisibility} = useSelector((state)=>(state.menu));
    const {language} = useSelector((state)=>(state.preference));
    return (
        <Overlay ModalComponent={Modal} isVisible={menuVisibility} onBackdropPress = {()=>dispatch(toggleMenu(false))}>
            <ScrollView>
                <MenuHeader 
                    icon={
                        <Icon name="language" size={20} color="#00A8E8"/>
                    }
                    title={Localization[language].getLanguage()}
                />
                <Pressable onPress={()=>dispatch(changeLanguage("Eng"))}>
                    <ListItem bottomDivider> 
                        <ListItem.Content>
                            <ListItem.Title>English</ListItem.Title>  
                        </ListItem.Content>      
                    </ListItem>
                </Pressable>
                <Pressable onPress={()=>dispatch(changeLanguage("Amh"))}>
                    <ListItem bottomDivider> 
                        <ListItem.Content>
                            <ListItem.Title>አማርኛ</ListItem.Title>  
                        </ListItem.Content>      
                    </ListItem>
                </Pressable>
            </ScrollView>
        </Overlay>
    );
}

export default Menu;