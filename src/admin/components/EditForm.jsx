import React from 'react';
import { connect } from 'react-redux';

import { InputForm } from '../containers/EditFormContainer'

class EditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.item
        };
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        this.setState({
            item: Object.assign({}, this.state.item, {
                title: e.target.value
            })
        })
    }

    render() {
        return (
            <InputForm type="text" label="test" value={this.state.item.title} handleInput={this.handleInput} name={this.state.item.title} />
        )
    }
}

export default EditForm;