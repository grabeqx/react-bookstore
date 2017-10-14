import React from 'react';

export const InputForm = ({type, label, value, handleInput, name, button, disabled}) => {
    return (
        <div className="editRow d-flex align-items-center">
            {label ? <label className="m-0">{label}</label> : null}
            {
                type == "textarea" ? <textarea name={name} value={value} onChange={handleInput} disabled={disabled} />
                : typeof value == "object" ? Object.keys(value).map((item, index) => (
                    <div key={index} className="d-flex align-items-center">
                        <label className="col-sm-2 text-center m-0">{item}</label>
                        <input type={type} value={value[item]} name={item} data-object={name} onChange={handleInput} className="col-sm-10" disabled={disabled} />
                    </div>
                )) 
                : <input type={type} value={value} name={name} onChange={handleInput} className={button ? "button bg" : null} disabled={disabled} /> 
            }
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