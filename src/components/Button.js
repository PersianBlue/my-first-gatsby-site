import React from 'react';
import { button } from "../components/button.module.css";

export const Button = ({ onClick, text, color,id }) => {
    return (
        <button id = {id} style={{ backgroundColor: color }} className={button} onClick={onClick} 
// @ts-ignore
        text={text}> {text} </button>
    );
};

export default Button