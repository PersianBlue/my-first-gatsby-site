import React from "react";
import { button } from "../Button/button.module.css";
export const Button = ({ onClick, text, color, id, textColor }) => {
  return (
    <button
      id={id}
      style={{ backgroundColor: color, color: textColor }}
      className={button}
      onClick={onClick}
      // @ts-ignore
      text={text}
    >
      {" "}
      {text}{" "}
    </button>
  );
};

export default Button;
