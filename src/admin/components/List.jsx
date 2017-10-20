import React from 'react';
import { connect } from 'react-redux';

import ListContainer from '../containers/ListContainer';
import { deleteData } from '../actions/ApiActionsCreator';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e, id) {
        e.preventDefault();
        console.log("asda");
        this.props.deleteData(id, `delete${this.props.itemType.charAt(0).toUpperCase() + this.props.itemType.slice(1)}`);
    }

    render() {
        return (
            <ListContainer {...this.props} handleDelete={this.handleDelete}/>
        )
    }
}

export default connect(null, { deleteData })(List);