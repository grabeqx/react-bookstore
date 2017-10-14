import API_CONSTANTS from '../constants/ApiConstants';
import { Map } from 'immutable';


const bookStoreReducer = (state = Map({
    books: [],
    editBook: {},
    categories: [],
    editCategory: {},
    authors: [],
    editAuthor: {}
}), action) => {
    switch(action.type) {
        case API_CONSTANTS.GET_BOOKS_SUCCESS: 
            return state.set('books', [...action.payload]);
        case API_CONSTANTS.GET_BOOK_SUCCESS:
            return state.set('editBook', action.payload);
        case API_CONSTANTS.GET_CATEGORIES_SUCCESS: 
            return state.set('categories', [...action.payload]);
        case API_CONSTANTS.GET_CATEGORY_SUCCESS:
            return state.set('editCategory', action.payload);
        case API_CONSTANTS.GET_AUTHORS_SUCCESS: 
            return state.set('authors', [...action.payload]);
        case API_CONSTANTS.GET_AUTHOR_SUCCESS:
            return state.set('editAuthor', action.payload);
        default:
            return state;
    }
}

export default bookStoreReducer;