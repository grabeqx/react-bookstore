import React from 'react';

export const InputForm = ({type, label, value, handleInput, name, button}) => {
    return (
        <div className="editRow">
            {label ? <label>{label}</label> : null}
            <input type={type} value={value} name={name} onChange={handleInput} className={button ? "button bg" : null} />
        </div>
    )
}

const EditFormContainer = (props) => {
    return (
        <div className="mainContent">
            <h1 className="pageTitle">{props.pageTitle}</h1>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default EditFormContainer;