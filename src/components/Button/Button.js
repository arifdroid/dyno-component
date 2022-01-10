import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Outlined = styled.button`
    background-color: rgb(255, 221, 0);
    border: solid 1px rgb(255, 221, 0);
    border-radius: 8px;
    height: 38px;
    width: 112px;
    font-family: "Rubik", sans-serif;
    color: rgb(14, 27, 66);
    text-align: center;
    font-size: 14px;
    font-weight: 500;    
    background-color: white;
    text-decoration: none;
    transition: border 0.25s, background 0.25s, color 0.25s;
    &:hover {
        cursor: pointer;
        color: rgb(14, 27, 66);
        border-color: #ccb100;
        background-color: #dddddd;
    }
`;

const Primary = styled.button`
    background-color: rgb(255, 221, 0);
    border: solid 1px rgb(255, 221, 0);
    border-radius: 8px;
    height: 38px;
    width: 112px;
    font-family: "Rubik", sans-serif;
    color: rgb(14, 27, 66);
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    &:hover {
        cursor: pointer;        
        background-color: #fff5b8;
        border-color: #ccb100;
    }
`;

const Button = ({ label, variant, ...props }) => {

    if (props.className) {
        return <button
            {...props}
        ></button>;
    }

    let ButtonStyled = Outlined;
    if (variant === 'primary') {
        ButtonStyled = Primary;
    }
    return <ButtonStyled
        {...props}        
        onClick={props.onClick}
    >{label}</ButtonStyled>;
}

Button.defaultProps = {
    type: 'button',
    variant: 'primary'
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['primary','outlined']),
    onClick: PropTypes.func.isRequired
}

export default Button;