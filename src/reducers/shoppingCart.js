export const ADD_TO_SHOPPING_CART = "ADD_TO_SHOPPING_CART";

const mockData = [
    {
        production:{
            id: 6,
            name: "Schindler's List",
            poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
        },
        count: 1
    },
    {
        production: {
            id: 7,
            name: "Pulp Fiction",
            poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_UX182_CR0,0,182,268_AL_.jpg",
        },
        count : 2
    }
];

const initState = {
    items: mockData
};

export const shoppingCart = (state = initState, action) => {
    switch (action.type) {
        case ADD_TO_SHOPPING_CART: {
            let items = state.items.slice();
            const find = items.filter(item => item.production.id == action.payload.production.id);
            if (find.length > 0) {
                find[0].count = find[0].count+ action.payload.count;
                return {
                    ...state,
                    items: items
                }
            } else {
                return {
                    ...state,
                    items: state.items.concat([action.payload])
                }
            }
            return {...state,};
        }
        default:
            return state;
    }
};
