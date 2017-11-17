import React from 'react';



const Content = (props) => {
    return (
        <div className="container mt-2">
            <div className="row">
                {props.children}
            </div>
        </div>
    )
}

export default Content;