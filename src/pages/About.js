import React from "react";
import classes from "./about.module.css";

const About = () => {
  return (
    <section className={classes.section}>
      <div className="container">
        <h1>
          <span>/</span> About
        </h1>
        <span className={classes.underline}></span>
        <div className={classes.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          asperiores animi et explicabo, nemo, voluptatibus omnis in illo sequi
          officia ipsum iusto minima tempore exercitationem cupiditate ipsam
          adipisci laboriosam molestias.
        </div>
      </div>
    </section>
  );
};

export default About;
