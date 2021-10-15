import React from 'react';

import {View, SafeAreaView, FlatList, Text} from 'react-native';
import { Divider } from 'react-native-elements';

import Filter from './Filter/Filter';
import Category from './../../Components/Category/Category';
import FoodItem from './../../Components/FoodItem/FoodItem';

import {useSelector} from 'react-redux';
import Localization from '../../Localization';
import {NAME,PRICE,ASCENDING,DESCENDING} from './../../constants';

const MenuScreen =()=>{
    const {language} = useSelector((state)=>(state.preference));
    const FOODS = [
        {
            title:["Special Pasta","ስፔሻል ፓስታ"],
            category:["pasta","ፓስታ"],
            price:45,
            fasting:true,
            image:"/../../assets/BG.jpg",
            _id:"1",
            isFood:true,
        },
        {
            title:["Pasta with sauce","ፓስታ በስጎ"],
            category:["pasta","ፓስታ"],
            price:50,
            fasting:true,
            image:"/../../assets/BG.jpg",
            _id:"2",
            isFood:true,

        },
        {
            title:["Beyeaynet","በየአይነት"],
            category:["pasta","ፓስታ"],
            price:30,
            fasting:true,
            image:"/../../assets/BG.jpg",
            _id:"3",
            isFood:true,
        },
        {
            title:["Special Pasta","ስፔሻል ፓስታ"],
            category:["pasta", "ፓስታ"],
            price:55,
            fasting:false,
            image:"/../../assets/BG.jpg",
            _id:"4",
            isFood:true,

        },
        {
            title:["Tea","ሻይ"],
            category:["Hot","ትኩስ"],
            price:10,
            fasting:true,
            image:"/../../assets/BG.jpg",
            _id:"3",
            isFood:false,
        },
        {
            title:["Milk","ወተት"],
            category:["Hot", "ትኩስ"],
            price:25,
            fasting:false,
            image:"/../../assets/BG.jpg",
            _id:"4",
            isFood:false,
        }

    ];
    const {isFood,isFasting,sortBy,sortOrder} = useSelector((state)=>(state.filter));
    const {
        currentFoodCategory,
        currentBeverageCategory,
        foodCategories,
        beverageCategories,
    } = useSelector((state)=>(state.category));
    const currentCategoryString =  isFood?foodCategories[currentFoodCategory][0]
                                    :beverageCategories[currentBeverageCategory][0];
    const filterAndSort=(isFood,isFasting,sortBy,sortOrder,currentCategory,foods)=>{
        let filteredFoods = [];
        filteredFoods = foods.filter((food,index)=>{
            if(currentCategory.toLowerCase()==="all") return true;
            return food.category[0].toLowerCase() === currentCategory.toLowerCase()
        })
        console.log(sortBy+" "+sortOrder);
        filteredFoods = filteredFoods.filter((food)=>(food.fasting === isFasting))
        filteredFoods = filteredFoods.filter((food)=>(food.isFood === isFood))
        const index= language==="Eng"?0:1;
        
        filteredFoods.sort((foodA,foodB)=>{
            if(sortBy===NAME){
                let val;
                val = foodA.title[index]>foodB.title[index]?-1:
                                foodB.title[index]>foodA.title[index]?1:0;
                if(sortOrder===DESCENDING)return val;
                return (-1*val);
            }
            else if(sortBy===PRICE){
                let val;
                val = foodA.price>foodB.price?-1:
                                foodB.price>foodA.price?1:0;
                if(sortOrder===DESCENDING)return val;
                return (-1*val);
            }
        })
        return filteredFoods;
    }
    const filteredFoods = filterAndSort(isFood,isFasting,sortBy,sortOrder,currentCategoryString,FOODS);

    const EmptyDataIndicator = () =>{
        return (
            <Text
                style={{
                    color:"#44444444",
                    textAlign:"center",
                    padding:"20px",
                }}
            >
                {Localization[language].getEmptyDataIndicator()}
            </Text>
        );
    }
    const renderFood = ({item})=>{
        return(
            <FoodItem 
                food={item}
            />
        );
    }
    return(
        <View>
            <Filter/>
            <Category/>
            <SafeAreaView>
                <FlatList
                    data={filteredFoods}
                    renderItem={renderFood}
                    keyExtractor={(item) => item._id}
                    // extraData={selectedId}
                    ListEmptyComponent={EmptyDataIndicator}
                    ItemSeparatorComponent={Divider}
                    ListFooterComponent={Divider}
                    ListHeaderComponent={Divider}
                />
            </SafeAreaView>
        </View>
    );
}

export default MenuScreen;