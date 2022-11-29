import React from "react";
import classes from "./LoadMoreButton.module.css";

const LoadMoreButton = (props) => {
  return (
    <div className={classes["load-more-btn-div"]}>
      <button
        className={classes["load-more-btn"]}
        onClick={props.onLoadMoreInfoHandler}
      >
        Load More...
      </button>
    </div>
  );
};

export default LoadMoreButton;
