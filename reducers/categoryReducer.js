import {PREVIOUS_CATEGORY,NEXT_CATEGORY} from './../constants';
const initialState = {
    categories:["All","Pasta","Pizza","Burgar","Sweet","Habesha"],
    currentCategory:0,
}

const categoryReducer = (state=initialState,action)=>{
    switch(action.type){
        case NEXT_CATEGORY:
            if(state.currentCategory<state.categories.length-1){
                return{
                    ...state,
                    currentCategory:state.currentCategory+1,
                }
            }
            return state
        case PREVIOUS_CATEGORY:
            if(state.currentCategory>0){
                return{
                    ...state,
                    currentCategory:state.currentCategory-1,
                }
            }
            return state
        default:
            return state;
    }
}

export default categoryReducer;