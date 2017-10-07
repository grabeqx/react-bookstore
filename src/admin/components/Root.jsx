import React from 'react';
import { Route, Switch } from 'react-router'

import RouterConstants from '../constants/RouterConstants.js';
import ProductsList from './ProductsList'
import CategoryList from './CategoryList';

class Root extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Switch>
                <Route path={RouterConstants["Products"]} component={ProductsList} />
                <Route path={RouterConstants["Categories"]} component={CategoryList} />
            </Switch>
        )
    }
}

export default Root;