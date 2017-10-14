import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';

import { getCategories } from '../actions/ApiActionsCreator';
import RouteDefaultListPage from './RouteDefaultListPage';
import DataListContainer from '../containers/DataListContainer';
import RouterConstants from '../constants/RouterConstants.js';
import EditCategory from './EditCategory';

class CategoryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: ['id','name','edit', "remove"]
        }
    }

    componentDidMount() {
        this.props.getCategories();
    }

    render() {
        return (
            <Switch>
                <Route exact path={this.props.match.path} render={RouteDefaultListPage(DataListContainer, this.state.columns, this.props.categories)} />
                <Route path={`${this.props.match.path}edit/:id`} component={EditCategory} />
            </Switch>
        )
    }
}

const getStateToProps = (state) => {
    return {
        categories: state.bookStore.get('categories')
    }
}

export default connect(getStateToProps, { getCategories })(CategoryList);