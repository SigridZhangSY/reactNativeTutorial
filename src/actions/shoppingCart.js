import { ADD_TO_SHOPPING_CART } from '../reducers/shoppingCart';

export const addToCart = (item) => dispatch => (
    dispatch({
        type: ADD_TO_SHOPPING_CART,
        payload: item
    })
);
