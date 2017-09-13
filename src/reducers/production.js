export const FETCH_PRODUCTIONS = "FETCH_PRODUCTIONS";
export const FETCH_PRODUCTIONS_SUCCESS = "FETCH_PRODUCTIONS_SUCCESS";
export const FETCH_PRODUCTIONS_FAILED = "FETCH_PRODUCTIONS_FAILED";

const initState = {
    data:{
        items:[],
        count:0
    },
    isLoading: false,
    error:null,
    success: false,
    failed: false
};

export const productionList = (state = initState, action) => {
    switch (action.type){
        case FETCH_PRODUCTIONS:
            return {
                ...state,
                isLoading: true,
                success: null,
                failed: null
            };
        case FETCH_PRODUCTIONS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                success: true,
                failed: false
            };
        case FETCH_PRODUCTIONS_FAILED:
            return {
                ...state,
                data: initState.data,
                isLoading: false,
                success: false,
                failed: true
            };
        default:
            return state;
    }
};
