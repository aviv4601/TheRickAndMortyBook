import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={classes.header}>
        <h1 className={classes.title}>The Rick And Morty Book</h1>
      </div>
    </header>
  );
};

export default Header;
