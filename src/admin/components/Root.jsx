import React from 'react';
import { Route, Switch } from 'react-router'

import RouterConstants from '../constants/RouterConstants.js';
import ProductsList from './ProductsList'
import CategoryList from './CategoryList';
import AuthorsList from './AuthorsList';

class Root extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Switch>
                <Route path={RouterConstants["Products"]} component={ProductsList} />
                <Route path={RouterConstants["Categories"]} component={CategoryList} />
                <Route path={RouterConstants["Authors"]} component={AuthorsList} />
            </Switch>
        )
    }
}

const getStateToProps = (state) => {
    return {
        books: state.bookStore.get('books')
    }
}

export default Root;