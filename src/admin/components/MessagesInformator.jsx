import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MessageContainer from '../containers/MessageContainer';
import { removeMessage } from '../actions/AdminActions';

class MessagesInformator extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.closeMessage = this.closeMessage.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            show: nextProps.messages.size
        })
    }

    closeMessage(e, index) {
        e.preventDefault();
        this.props.removeMessage(index);
    }

    render() {
        return (
            <div>
                {this.props.messages.map((message,index) => (
                    <MessageContainer
                        key={index}
                        onClose={(e) => this.closeMessage(e, index)}
                        type={message.type}
                        index={index}
                        message={this.props.messages.size ? this.props.messages.get(index).message : ""}
                    />
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.panelReducer.get('messages')
    }
}


export default connect(mapStateToProps, { removeMessage })(MessagesInformator);