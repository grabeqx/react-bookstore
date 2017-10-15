import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';

import { getBooks, getBook } from '../actions/ApiActionsCreator';
import RouteDefaultListPage from './RouteDefaultListPage';
import DataListContainer from '../containers/DataListContainer';
import EditPageComponent from './EditPage';

class ProductsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: ['id','title','available','quantity','edit', "remove"]
        }
    }

    componentDidMount() {
        this.props.getBooks();
    }

    render() {
        return (
            <Switch>
                <Route exact path={this.props.match.path} render={RouteDefaultListPage(DataListContainer, this.state.columns, this.props.books)} />
                <Route path={`${this.props.match.path}edit/:id`} component={EditPageComponent('book', this.props.getBook)} />
            </Switch>
        )
    }
}

const getStateToProps = (state) => {
    return {
        books: state.bookStore.get('books')
    }
}

export default connect(getStateToProps, { getBooks, getBook })(ProductsList);