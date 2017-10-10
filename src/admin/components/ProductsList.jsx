import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';

import { getProducts } from '../actions/ApiActionsCreator';
import RouteDefaultListPage from './RouteDefaultListPage';
import ProductListContainer from '../containers/ProductListContainer';
import RouterConstants from '../constants/RouterConstants.js';
import Edit from './Edit';

class ProductsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: ['id','title','available','quantity','edit', "remove"]
        }
    }

    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        return (
            <Switch>
                <Route exact path={this.props.match.path} render={RouteDefaultListPage(ProductListContainer, this.state.columns, this.props)} />
                <Route path={`${this.props.match.path}edit/:id`} component={Edit} />
            </Switch>
        )
    }
}

const getStateToProps = (state) => {
    return {
        books: state.bookStore.get('books')
    }
}

export default connect(getStateToProps, { getProducts })(ProductsList);