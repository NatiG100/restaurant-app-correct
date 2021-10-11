import React from 'react';
import {Overlay} from 'react-native-elements';
import {changeLanguage} from './../../../actions/preference';
import Localization from './../../../Localization';
import { Pressable, ScrollView, Text, View} from 'react-native';
import {ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'modal-react-native-web';
import styles from './Style';
import { useSelector,useDispatch } from 'react-redux';

import {changeSortBy,sortOrderChanged} from './../../../actions/filter';
import {NAME,PRICE,ASCENDING,DESCENDING} from './../../../constants';
const SortModal = ({isOpen, setIsOpen}) =>{
    const dispatch = useDispatch();
    const {language} = useSelector((state)=>(state.preference));
    const {sortBy,sortOrder} = useSelector((state)=>(state.filter));
    const MenuHeader = ({icon,title})=>{
        return(
            <View style={styles.menuHeader}>
                {icon&&icon}
                <Text style={styles.menuHeaderText}>{title}</Text>
            </View>
        );
    }
    return(
        <Overlay ModalComponent={Modal} isVisible={isOpen} onBackdropPress = {()=>setIsOpen(false)}>
            <ScrollView>
                <MenuHeader 
                    icon={
                        <Icon name="language" size={20} color="#00A8E8"/>
                    }
                    title={"Sort By"}
                />
                <Pressable onPress={()=>dispatch(changeSortBy(NAME))}>
                    <ListItem bottomDivider containerStyle={sortBy===NAME?{backgroundColor:"#f9f9f9"}:{}}> 
                        <ListItem.Content>
                            <ListItem.Title>Name</ListItem.Title>  
                        </ListItem.Content>      
                    </ListItem>
                </Pressable>
                <Pressable onPress={()=>dispatch(changeSortBy(PRICE))}>
                    <ListItem bottomDivider containerStyle={sortBy===PRICE?{backgroundColor:"#f9f9f9"}:{}}> 
                        <ListItem.Content>
                            <ListItem.Title>Price</ListItem.Title>  
                        </ListItem.Content>      
                    </ListItem>
                </Pressable>
                <MenuHeader 
                    icon={
                        <Icon name="language" size={20} color="#00A8E8"/>
                    }
                    title={"Sort Order"}
                />
                <Pressable onPress={()=>dispatch(sortOrderChanged(ASCENDING))}>
                    <ListItem  bottomDivider containerStyle={sortOrder===ASCENDING?{backgroundColor:"#f9f9f9"}:{}}> 
                        <ListItem.Content>
                            <ListItem.Title>Ascending</ListItem.Title>  
                        </ListItem.Content>      
                    </ListItem>
                </Pressable>
                <Pressable onPress={()=>dispatch(sortOrderChanged(DESCENDING))}>
                    <ListItem bottomDivider containerStyle={sortOrder===DESCENDING?{backgroundColor:"#f9f9f9"}:{}}> 
                        <ListItem.Content>
                            <ListItem.Title>Descending</ListItem.Title>  
                        </ListItem.Content>      
                    </ListItem>
                </Pressable>
            </ScrollView>
        </Overlay>
    );
}

export default SortModal;