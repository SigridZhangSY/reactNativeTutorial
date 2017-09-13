import { combineReducers } from 'redux';
import { shoppingCart } from './shoppingCart';
import { productionList } from './production';

const appReducer = combineReducers({
    shoppingCart,
    productionList
});

const rootReducer = (state, action) => (
    appReducer(state, action)
);

export default rootReducer;