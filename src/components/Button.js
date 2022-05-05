import React from 'react';
import { button } from "../components/layout.module.css";

export const Button = ({ onClick, text, color,id }) => {
    return (
        <button id = {id} style={{ backgroundColor: color }} className={button} onClick={onClick} text={text}> {text} </button>
    );
};

export default Button