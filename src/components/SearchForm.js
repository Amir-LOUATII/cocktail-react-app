import React, { useContext, useState } from "react";
import classes from "./search-form.module.css";
import { FaSistrix } from "react-icons/fa";
import { AppContext } from "../context/context";

const SearchForm = () => {
  const { filterCocktails } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState("");

  function changeHandler(e) {
    setSearchTerm(e.target.value);

    filterCocktails(e.target.value);
  }

  return (
    <form className={classes.form} onSubmit={(e) => e.preventDefault()}>
      <div className={classes["form-control"]}>
        <label htmlFor="search">Search Your Favorite Cocktail</label>
        <div className={classes.input}>
          <input
            type="text"
            id="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={changeHandler}
          />
          <div className={classes["icon-container"]}>
            <FaSistrix className={classes.icon} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
