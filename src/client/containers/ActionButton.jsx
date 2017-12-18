import React from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
    background: #fff;
    color: #000;
    padding: 5px 15px;
    font-size: 20px;
    border: 1px solid #000;
    transition: all .3s ease-in-out;
    &:hover {
        background: #000;
        color: #fff;
    }
`;

const ActionButton = ({text}) => {
    return (
        <Button>{text}</Button>
    )
}

export default ActionButton;