import {MENU_TOGGLED} from './../constants';

const initialState={
    menuVisibility:false,
}

const menuReducer = (state=initialState, action)=>{
    switch(action.type){
        case MENU_TOGGLED:
            return{
                ...state,
                menuVisibility:action.payload
            };
        default:
            return state
    }
}

export default menuReducer;