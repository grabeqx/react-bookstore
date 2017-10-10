import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import API_CONSTANTS from '../constants/ApiConstants';
import bookStore from './bookStoreReducer';
import panelReducer from './panelReducer';

const rootReducer = combineReducers({
    bookStore,
    panelReducer,
    router: routerReducer
})

export default rootReducer;