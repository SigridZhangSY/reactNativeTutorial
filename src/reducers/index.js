import { combineReducers } from 'redux';
import { shoppingCart } from './shoppingCart';
import { productionList } from './production';
import { reducer as formReducer } from 'redux-form';

const appReducer = combineReducers({
    shoppingCart,
    productionList,
    form: formReducer
});

const rootReducer = (state, action) => (
    appReducer(state, action)
);

export default rootReducer;