import React from 'react';
import { connect } from 'react-redux';

import { getBooks } from '../actions/actionCreator';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.getBooks();
    }

    render() {
        return (
            <div>Home</div>
        )
    }
}

const mapStateToProps = function(state) {
    return {
        books: state.data.books
    }
}

export default connect(mapStateToProps, { getBooks })(Home);