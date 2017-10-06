import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';

import Admin from './admin/Admin';
import Client from './client/Client';

ReactDOM.render(<BrowserRouter>
    <Switch>
        <Route exact path="/" component={Client} />
        <Route path="/admin" component={Admin} />
    </Switch>
</BrowserRouter>, document.querySelector('#root'))