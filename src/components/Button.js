import React from 'react';
import { button } from "../components/layout.module.css";

export const Button = ({ onClick, text, color }) => {
    return (
        <button style={{ backgroundColor: color }} className={button} onClick={onClick} text={text}> {text} </button>
    );
};
