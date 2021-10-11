import {FOOD_OR_BVRG_TOGGLED} from './../constants';
import {FASTING_TOGGLED} from './../constants';

import {SORT_BY_CHANGED} from './../constants';
import {SORT_ORDER_CHANGED} from './../constants';

import {NAME, ASCENDING} from './../constants';

const initialState={
    isFood:true,
    isFasting:false,
    sortBy:NAME,
    sortOrder:ASCENDING,
}

const filterReducer = (state=initialState, action)=>{
    switch(action.type){
        case FOOD_OR_BVRG_TOGGLED:
            return {
                ...state,
                isFood:!state.isFood
            };
        case FASTING_TOGGLED:
            return {
                ...state,
                isFasting:!state.isFasting
            };
        case SORT_BY_CHANGED:
            return{
                ...state,
                sortBy:action.payload,
            }
        case SORT_ORDER_CHANGED:
            return{
                ...state,
                sortOrder:action.payload,
            }
        default:
            return state;
    }
}

export default filterReducer;