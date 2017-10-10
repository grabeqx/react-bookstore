import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MessageContainer from '../containers/MessageContainer';

class MessagesInformator extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.closeMessage = this.closeMessage.bind(this);
        this.state = {
            show: this.props.errors.size
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            show: nextProps.errors.size
        })
    }

    closeMessage(e) {
        e.preventDefault();
        this.setState({
            show: 0
        })
    }

    render() {
        return ( 
            <MessageContainer 
                onClose={this.closeMessage}
                type="negative"
                show={this.state.show}
                message={this.props.errors.get(-1)}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        errors: state.panelReducer.get('errors')
    }
}


export default connect(mapStateToProps, null)(MessagesInformator);