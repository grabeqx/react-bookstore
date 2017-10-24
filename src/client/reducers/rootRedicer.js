import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import cartReducer from './cartReducer';
import dataReducer from './dataReducer';


const rootReducer = combineReducers({
    data: dataReducer,
    cart: cartReducer,
    router: routerReducer
})

export default rootReducer;