import { Map, List } from 'immutable';

import ACTIONS from '../constants/api.actions';

const dataReducer = (state = Map({
    books: List([]),
    categories: List([]),
    authors: List([])
}), action) => {

    switch(action.type) {
        case ACTIONS.GET_BOOKS_SUCCESS: 
            console.log(action.payload);
            return state;
        default: return state;
    }

}

export default dataReducer;