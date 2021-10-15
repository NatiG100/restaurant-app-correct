import {
    PREVIOUS_FOOD_CATEGORY,
    NEXT_FOOD_CATEGORY,
    PREVIOUS_BEVERAGE_CATEGORY,
    NEXT_BEVERAGE_CATEGORY
} from './../constants';


const initialState = {
    foodCategories:[["All","ሁሉም"],["Pasta","ፓስታ"],["Pizza","ፒዛ"],["Burgar","በርገር"],["Sweet","ጣፋጭ"],["Habesha","ሀበሻ"]],
    beverageCategories:[["All","ሁሉም"],["Hot","ትኩስ"],["Soft Drink","የለስላሳ መጠጥ"],["Alchol","የአልኮል መጠጥ"],["Juice","ጁስ"]],
    currentFoodCategory:0,
    currentBeverageCategory:0,
}

const categoryReducer = (state=initialState,action)=>{
    switch(action.type){
        case NEXT_FOOD_CATEGORY:
            if(state.currentFoodCategory<state.foodCategories.length-1){
                return{
                    ...state,
                    currentFoodCategory:state.currentFoodCategory+1,
                }
            }
            return state
        case PREVIOUS_FOOD_CATEGORY:
            if(state.currentFoodCategory>0){
                return{
                    ...state,
                    currentFoodCategory:state.currentFoodCategory-1,
                }
            }
            return state
        case NEXT_BEVERAGE_CATEGORY:
            if(state.currentBeverageCategory<state.beverageCategories.length-1){
                return{
                    ...state,
                    currentBeverageCategory:state.currentBeverageCategory+1,
                }
            }
            return state
        case PREVIOUS_BEVERAGE_CATEGORY:
            if(state.currentBeverageCategory>0){
                return{
                    ...state,
                    currentBeverageCategory:state.currentBeverageCategory-1,
                }
            }
            return state
        default:
            return state;
    }
}

export default categoryReducer;