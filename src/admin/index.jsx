import React from 'react';
import ReactDOM from 'react-dom';
import store, { history } from './appStore.js';
import { Route } from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import Content from './containers/Content';

ReactDOM.render(<Provider store={store}>
    <ConnectedRouter history={history}>
        <Route path="/admin" component={Content} />
    </ConnectedRouter>
</Provider>, document.querySelector('#root'))