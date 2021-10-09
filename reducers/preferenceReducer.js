import { LANGUAGE_CHANGED } from "../constants";

const initialState = {
    language:"Eng",
}

const preferenceReducer = (state=initialState, action)=>{
    switch(action.type){
        case LANGUAGE_CHANGED:
            return {
                ...state,
                language: action.payload
            }
        default:
            return state
    }
}

export default preferenceReducer;