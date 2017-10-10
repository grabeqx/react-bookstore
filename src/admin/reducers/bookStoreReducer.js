import API_CONSTANTS from '../constants/ApiConstants';
import { Map } from 'immutable';


const bookStoreReducer = (state = Map({
    books: [],
    editBook: {}
}), action) => {
    switch(action.type) {
        case API_CONSTANTS.GET_PRODUCTS_SUCCESS: 
            return state.set('books', [...action.payload]);
        case API_CONSTANTS.GET_BOOK_SUCCESS:
            return state.set('editBook', action.payload)
        default:
            return state;
    }
}

export default bookStoreReducer;