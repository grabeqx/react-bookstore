import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.items);
        console.log('test');
    }

    render() {
        return (
            <h1>Client</h1>
        )
    }
}

const mapstateToProps = (state) => {
    return {
        items: state.cart.get('items')
    }
}

export default connect(mapstateToProps, null)(App);