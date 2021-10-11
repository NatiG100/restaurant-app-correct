import {BACK_PRESSED} from './../constants';
import {LINK_PRESSED} from './../constants';

const initialState={
    location:["home"],
}

const navigatorReducer = (state=initialState, action)=>{
    switch(action.type){
        case LINK_PRESSED:
            return{
                ...state,
                location: [...state.location,action.payload],
            }
        case BACK_PRESSED:
            if(state.location.length>1){
                const newLocation = state.location;
                newLocation.pop();
                return{
                    ...state,
                    location:newLocation,
                }
            }
            return state;
        default:
            return state;
    }
}

export default navigatorReducer;