import React from "react";
import classes from "./Loading.module.css";

const Loading = () => {
  return (
    <>
      <div className="container">
        <div className={classes.loading}></div>
      </div>
    </>
  );
};

export default Loading;
