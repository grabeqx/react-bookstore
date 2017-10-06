require('./styles/style.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import store, { history } from './appStore.js';
import { Switch, Route } from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import RootContainer from './containers/RootContainer';


const Admin = function () {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Route path="/admin" component={RootContainer} />
            </ConnectedRouter>
        </Provider>
    )
}

export default Admin;