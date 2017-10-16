import React from 'react';
import { Route, Switch } from 'react-router'

import { getBooks, getBook, getAuthors, getAuthor, getCategories, getCategory } from '../actions/ApiActionsCreator';
import RouterConstants from '../constants/RouterConstants.js';
import DataList from './DataList';

class Root extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Switch>
                <Route path={RouterConstants["Products"]} component={DataList('book','books', getBook, getBooks)} />
                <Route path={RouterConstants["Categories"]} component={DataList('category','categories', getCategory, getCategories)} />
                <Route path={RouterConstants["Authors"]} component={DataList('author','authors', getAuthor, getAuthors)} />
            </Switch>
        )
    }
}

export default Root;