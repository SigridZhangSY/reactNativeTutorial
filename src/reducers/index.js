import { combineReducers } from 'redux';
import shoppingCart from './shoppingCart';
import { productionList } from './production';

const rootReducer = combineReducers({
    shoppingCart,
    productionList
});

export default rootReducer;