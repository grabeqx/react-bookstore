import API_CONSTANTS from '../constants/ApiConstants';
import { Map , List } from 'immutable';


const panelReducer = (state = Map({
    errors: List([])
}), action) => {
    switch(action.type) {
        case API_CONSTANTS.GET_BOOKS_FAIL:
        case API_CONSTANTS.GET_BOOK_FAIL:
            return state.set('errors', state.get('errors').push(action.payload));
        case API_CONSTANTS.SAVE_SUCCESS:
            return state;
        default:
            return state;
    }
}

export default panelReducer;