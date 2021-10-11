import {createStore,combineReducers} from 'redux';

import menuReducer from './../reducers/menuReducer';
import preferenceReducer from './../reducers/preferenceReducer';
import filterReducer from './../reducers/filterReducer';
import navigatorReducer from './../reducers/navigatorReducer';
import categoryReducer from './../reducers/categoryReducer';

const rootReducer = combineReducers(
    {
        menu: menuReducer,
        preference: preferenceReducer,
        filter: filterReducer,
        navigator:navigatorReducer,
        category:categoryReducer,
    }
);

const configureStore = () =>{
    return createStore(rootReducer);
}

export default configureStore;