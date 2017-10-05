import React from 'react';
import { Switch, Route } from 'react-router';

import Admin from './admin/Admin';
import Client from './client/Client';

const Routing = () => (
    <Switch>
        <Route exact path="/" component={Client} />
        <Route path="/admin" component={Admin} />
    </Switch>
)

export default Routing;