import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import API_CONSTANTS from '../constants/ApiConstants';
import bookStore from './bookStoreReducer';

const rootReducer = combineReducers({
    bookStore,
    router: routerReducer
})

export default rootReducer;