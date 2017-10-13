import React from 'react';
import { connect } from 'react-redux';

import { getBook } from '../actions/ApiActionsCreator';
import EditFormContainer from '../containers/EditFormContainer';
import EditForm from './EditForm';

class EditProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Edit",
            productId: parseInt(this.props.match.params.id),
            book: {}
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            book: nextProps.book
        })
    }

    componentDidMount() {
        this.props.getBook(this.state.productId);
    }

    render() {
        return (
            <EditFormContainer pageTitle = {this.state.title}>
                {this.state.book.id ? <EditForm item={this.state.book} type="Edit"/> : null}
            </EditFormContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        book: state.bookStore.get('editBook')
    }
}


export default connect(mapStateToProps, { getBook })(EditProduct);