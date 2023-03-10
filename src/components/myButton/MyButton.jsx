import React from "react";
import classNames from "classnames";
import "./myButton.css";

export const MyButton = ({ type, children, size = "s", onClick }) => {
  const btnClass = classNames({
    btn: true,
    "btn-primary": type === "primary",
    "btn-secondary": type === "secondary",
    "btn-small": size === "s",
    "btn-medium": size === "m",
  });

  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};
