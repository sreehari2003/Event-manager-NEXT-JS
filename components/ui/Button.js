import React from "react";
import Link from "next/link";
import classes from "../styles/button.module.css";
const Button = ({ link, ...props }) => {
  if (link) {
    return (
      <Link href={`${link}`}>
        <button className={classes.btn}>{props.children}</button>
      </Link>
    );
  } else {
    return (
      <button className={classes.btn} onClick={props.onClick}>
        {props.children}
      </button>
    );
  }
};

export default Button;
