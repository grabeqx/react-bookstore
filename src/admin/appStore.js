import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';

import adminSaga from './sagas/adminSaga';
import rootReducer from './reducers/rootReducer';

export const history = createHistory();

const sagaMiddleware = createSagaMiddleware();
const historyMiddleware = routerMiddleware(history);

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(historyMiddleware, sagaMiddleware)
)

sagaMiddleware.run(adminSaga);

export default store;