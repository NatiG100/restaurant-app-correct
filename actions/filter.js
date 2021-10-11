import {FOOD_OR_BVRG_TOGGLED} from './../constants';
import {FASTING_TOGGLED} from './../constants';
import { SORT_BY_CHANGED } from './../constants';
import {SORT_ORDER_CHANGED} from './../constants';

export function toggleFoodOrBvrg(){
    return{
        type:FOOD_OR_BVRG_TOGGLED,
    }
}
export function toggleFastening(){
    return{
        type:FASTING_TOGGLED,
    }
}

export function changeSortBy(sortBy){
    return{
        type:SORT_BY_CHANGED,
        payload:sortBy,
    }
}

export function sortOrderChanged(order){
    return {
        type:SORT_ORDER_CHANGED,
        payload:order,
    }
}