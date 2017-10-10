import React from 'react';

const MessageContainer = (props) => {
    return (
        <div className={"message " + props.type +" "+ (props.show ? "show" : "hidden")}>
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