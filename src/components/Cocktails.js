import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/context";
import Loading from "../UI/Loading";
import classes from "./cocktails.module.css";

const Cocktails = () => {
  const { cocktails, isLoading } = useContext(AppContext);

  return (
    <section className={classes.section}>
      <h1>
        <span>/</span> Our Cocktails
      </h1>
      <span className={classes.underline}></span>

      <section className={classes["section-center"]}>
        {isLoading && <Loading />}
        {!isLoading &&
          cocktails.length > 0 &&
          cocktails.map((item) => {
            const { image, name, id, info, glass } = item;
            return (
              <article key={id}>
                <img src={image} alt={name} />
                <div className={classes.info}>
                  <h2>{name}</h2>
                  <h4>{glass}</h4>
                  <p>{info}</p>{" "}
                  <Link to={`/home/cocktail/${id}`}>
                    <button className={classes.button}>Details</button>
                  </Link>
                </div>
              </article>
            );
          })}
        {!isLoading && cocktails.length < 1 && (
          <h2>Sorry,No Cockatils Matched Your Searched!</h2>
        )}
      </section>
    </section>
  );
};

export default Cocktails;
