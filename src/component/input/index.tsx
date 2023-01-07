import Styles from "./input.module.scss";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FiSearch } from "react-icons/fi";

export type InputProps = {
  type: "text";
  placeholder?: string;
  className?: string;
};
const Input = React.forwardRef(
  (
    {
      type,
      placeholder,
      className,
      ...rest
    }: InputProps & React.InputHTMLAttributes<HTMLInputElement>,
    ref: React.Ref<HTMLInputElement>
  ) => {
    return (
      <div className={`${Styles["ui-search"]}`}>
        <FiSearch className={`${Styles["icon"]}`} />
        <input
          ref={ref}
          className={`${Styles["input"]} ${className ?? ""}`}
          type={type}
          placeholder={placeholder}
          {...rest}
        />
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
