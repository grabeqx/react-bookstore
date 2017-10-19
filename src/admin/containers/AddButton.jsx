import React from 'react';
import { Link } from "react-router-dom";

const AddButton = (props) => {
    return (
        <Link to={{
            pathname: "add",
            state: props.itemType
        }} className="btn button bg align-self-end">
            <i className="fa fa-plus" aria-hidden="true"></i>Add
        </Link>
    )
}

export default AddButton;