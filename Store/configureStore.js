import {createStore,combineReducers} from 'redux';

import menuReducer from './../reducers/menuReducer';
import preferenceReducer from './../reducers/preferenceReducer';

const rootReducer = combineReducers(
    {
        menu:menuReducer,
        preference: preferenceReducer,
    }
);

const configureStore = () =>{
    return createStore(rootReducer);
}

export default configureStore;