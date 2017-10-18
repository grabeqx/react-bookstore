import React from 'react';

const MessageContainer = (props) => {
    return (
        <div className={"message " + props.type +" show"} style={{top: props.index * 45 + 5 + 'px'}}>
            <div>
                <a href="#" className="close-btn" onClick={props.onClose}>
                    <i className="fa fa-times-circle" aria-hidden="true"></i>
                </a>
                <p>{props.message}</p>
            </div>
        </div>
    )
}

export default MessageContainer;