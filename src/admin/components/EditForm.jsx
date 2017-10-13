import React from 'react';
import { connect } from 'react-redux';

import { InputForm } from '../containers/EditFormContainer'

class EditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.item;
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        let name = e.target.name;
        this.setState({
            [name]: e.target.value
        })
    }

    render() {
        return (
            <span>
                {Object.keys(this.state).map((key, index) => (
                    key != "id" ? 
                        <InputForm 
                            type="text" 
                            key={index} 
                            label={key.replace("_", " ")} 
                            value={this.state[key]} 
                            handleInput={this.handleInput} 
                            name={key}
                        /> 
                    : null
                ))}
                <InputForm type="submit" value={this.props.type} button />
            </span>
        )
    }
}

export default EditForm;