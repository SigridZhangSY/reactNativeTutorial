import {
    FETCH_PRODUCTIONS,
    FETCH_PRODUCTIONS_SUCCESS,
    FETCH_PRODUCTIONS_FAILED
} from '../reducers/production';

import { fetchProductions } from '../apis/production';

export const readProductions = () => dispatch => {
    dispatch({
        type: FETCH_PRODUCTIONS
    });

    return fetchProductions()
        .then(res => {
            dispatch({
                type: FETCH_PRODUCTIONS_SUCCESS,
                payload: {
                    items: res,
                    count: res.length
                }
            });
        });
}

