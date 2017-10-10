import API_CONSTANTS from '../constants/ApiConstants';
import { Map , List } from 'immutable';


const panelReducer = (state = Map({
    errors: List([])
}), action) => {
    switch(action.type) {
        case API_CONSTANTS.GET_PRODUCTS_FAIL:
        case API_CONSTANTS.GET_BOOK_FAIL:
            return state.set('errors', state.get('errors').push(action.payload));
        default:
            return state;
    }
}

export default panelReducer;