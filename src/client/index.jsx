import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';

import store, {history} from './ClientStore';
import App from './components/App';

ReactDOM.render(<Provider store={store}>
    <ConnectedRouter history={history}>
        <Route path="/" component={App} />
    </ConnectedRouter>
</Provider>, document.querySelector('#root'));