import React from 'react';
import { connect } from 'react-redux';

import { InputForm } from '../containers/EditFormContainer'

class EditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.item;
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        let name = e.target.name;
        let data = e.target.dataset.object;
        if(data) {
            this.setState({
                [data]: Object.assign({}, this.state[data], {[name]: e.target.value})
            })
        } else {
            this.setState({
                [name]: e.target.value
            })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {Object.keys(this.state).map((key, index) => (
                    <InputForm 
                        type={this.props.textareas.findIndex((item) => (item == key)) ? "text" : "textarea"}
                        key={index} 
                        label={key.replace("_", " ")} 
                        value={this.state[key]} 
                        handleInput={this.handleInput} 
                        name={key}
                        disabled={!this.props.disabledItems.findIndex((item) => (item == key))}
                    />
                ))}
                <InputForm type="submit" value={this.props.type} button />
            </form>
        )
    }
}

export default EditForm;