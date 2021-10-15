import {
    PREVIOUS_FOOD_CATEGORY,
    NEXT_FOOD_CATEGORY,
    PREVIOUS_BEVERAGE_CATEGORY,
    NEXT_BEVERAGE_CATEGORY
} from './../constants';
export function nextFood(){
    return{
        type:NEXT_FOOD_CATEGORY,
    }
}

export function previousFood(){
    return{
        type:PREVIOUS_FOOD_CATEGORY,
    }
}
export function nextBeverage(){
    return{
        type:NEXT_BEVERAGE_CATEGORY,
    }
}

export function previousBeverage(){
    return{
        type:PREVIOUS_BEVERAGE_CATEGORY,
    }
}