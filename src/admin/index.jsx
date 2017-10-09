import React from 'react';
import ReactDOM from 'react-dom';
import store, { history } from './appStore.js';
import { Route } from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import RootContainer from './containers/RootContainer';

ReactDOM.render(<Provider store={store}>
    <ConnectedRouter history={history}>
        <Route path="/admin" component={RootContainer} />
    </ConnectedRouter>
</Provider>, document.querySelector('#root'))