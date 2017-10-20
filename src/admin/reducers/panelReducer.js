import { Map , List } from 'immutable';

import API_CONSTANTS from '../constants/ApiConstants';
import ADMIN_CONSTANTS from '../constants/AdminConstants';

const panelReducer = (state = Map({
    messages: List([])
}), action) => {
    switch(action.type) {
        case API_CONSTANTS.GET_BOOKS_FAIL:
        case API_CONSTANTS.GET_BOOK_FAIL:
        case API_CONSTANTS.GET_AUTHORS_FAIL:
        case API_CONSTANTS.GET_AUTHOR_FAIL:
        case API_CONSTANTS.GET_CATEGORIES_FAIL:
        case API_CONSTANTS.GET_CATEGORY_FAIL:
            return state.set('messages', state.get('messages').push(action.payload));
        case API_CONSTANTS.SAVE_SUCCESS:
        case API_CONSTANTS.SAVE_FAIL:
        case API_CONSTANTS.DELETE_SUCCESS:
        case API_CONSTANTS.DELETE_FAIL:
            return state.set('messages', state.get('messages').push(action.payload));
        case ADMIN_CONSTANTS.REMOVE_MESSAGE:
            return state.set('messages', state.get('messages').splice(action.payload, 1));
        default:
            return state;
    }
}

export default panelReducer;