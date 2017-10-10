import React from 'react';
import { connect } from 'react-redux';

class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productId: parseInt(this.props.match.params.id)
        }
        console.log(this);
    }

    componentDidMount() {

    }

    render() {
        return (
            <h1>Edit</h1>
        )
    }
}



export default Edit;