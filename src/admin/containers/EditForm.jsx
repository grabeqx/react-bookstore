import React from 'react';

export const InputForm = ({type, label, value, handleInput, name}) => {
    return (
        <div>
            <label>{label}</label>
            <input type={type} value={value} name={name} onChange={handleInput} />
        </div>
    )
}

const EditForm = (props) => {
    return (
        <div>
            <h1>{props.pageTitle}</h1>
            <form>
                <fieldset>
                    {props.children}
                </fieldset>
            </form>
        </div>
    )
}

export default EditForm;