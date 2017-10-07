import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';

import { getProducts } from '../actions/Api.actions';
import ProductListContainer from '../containers/ProductListContainer';
import RouterConstants from '../constants/RouterConstants.js';
import List from '../containers/List';
import Edit from './Edit';

class ProductsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: ['id','title','available','quantity','edit']
        }
    }

    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        return (
            <ProductListContainer>
                <List 
                    items={this.props.books} 
                    columns={this.state.columns}
                />
            </ProductListContainer>
        )
    }
}

const getStateToProps = (state) => {
    return {
        books: state.bookStore.get('books')
    }
}

export default connect(getStateToProps, { getProducts })(ProductsList);