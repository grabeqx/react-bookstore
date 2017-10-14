import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';

import { getAuthors } from '../actions/ApiActionsCreator';
import RouteDefaultListPage from './RouteDefaultListPage';
import DataListContainer from '../containers/DataListContainer';
import RouterConstants from '../constants/RouterConstants.js';
import EditAuthor from './EditAuthor';

class AuthorsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: ['id','name','edit', "remove"]
        }
    }

    componentDidMount() {
        this.props.getAuthors();
    }

    render() {
        return (
            <Switch>
                <Route exact path={this.props.match.path} render={RouteDefaultListPage(DataListContainer, this.state.columns, this.props.authors)} />
                <Route path={`${this.props.match.path}edit/:id`} component={EditAuthor} />
            </Switch>
        )
    }
}

const getStateToProps = (state) => {
    return {
        authors: state.bookStore.get('authors')
    }
}

export default connect(getStateToProps, { getAuthors })(AuthorsList);