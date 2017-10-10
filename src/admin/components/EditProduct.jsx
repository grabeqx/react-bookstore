import React from 'react';
import { connect } from 'react-redux';

import { getBook } from '../actions/ApiActionsCreator';
import EditForm, { InputForm } from '../containers/EditForm';

class EditProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Edit",
            productId: parseInt(this.props.match.params.id),
            book: {
                title: ""
            }
        }
        this.handleInput = this.handleInput.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            book: nextProps.book
        })
    }

    componentDidMount() {
        this.props.getBook(this.state.productId);
    }

    handleInput(e) {
        this.setState({
            book: Object.assign({}, this.state.book, {
                title: e.target.value
            })
        })
    }

    render() {
        return (
            <EditForm pageTitle = {this.state.title} >
                <InputForm type="text" label="test" value={this.state.book.title} handleInput={this.handleInput} name={this.state.book.title} />
            </EditForm>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        book: state.bookStore.get('editBook')
    }
}


export default connect(mapStateToProps, { getBook })(EditProduct);