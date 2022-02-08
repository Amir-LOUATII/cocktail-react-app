import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../UI/Loading";
import classes from "./single-drink.module.css";
import { Link } from "react-router-dom";

const SingleDrink = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [cockail, setCocktail] = useState([]);
  const fetchCocktail = () => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        const {
          strAlcoholic: info,
          strDrinkThumb: image,
          strDrink: name,
          strGlass: glass,
          strCategory: category,
          strInstructions: instruction,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
          strIngredient6,
          strIngredient8,
          strIngredient9,
        } = responseData.drinks[0];
        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
          strIngredient6,
          strIngredient8,
          strIngredient9,
        ];
        const newCocktail = {
          name,
          info,
          instruction,
          image,
          glass,
          category,
          ingredients,
        };
        setCocktail(newCocktail);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchCocktail();
  }, [id]);

  if (isLoading) return <Loading />;
  const { name, info, instruction, image, ingredients, glass, category } =
    cockail;
  return (
    <>
      <section className={`section`}>
        <div className="container">
          <section className={classes.cocktail}>
            <div className={classes.col}>
              <img src={image} alt={name} />
            </div>
            <div className={classes.col}>
              <div>
                <button className={classes.button}>Name:</button> {name}
              </div>
              <div>
                <button className={classes.button}>Info:</button> {info}
              </div>
              <div>
                <button className={classes.button}>Ingredients:</button>
                {ingredients.map((item) => {
                  if (item) return ` ${item},`;
                  return;
                })}
              </div>
              <div>
                <button className={classes.button}>Category:</button> {category}
              </div>
              <div>
                <button className={classes.button}>Instructions:</button>
                {instruction}
              </div>
              <div>
                <button className={classes.button}>Glass:</button>
                {glass}
              </div>
              <Link to="/">
                <button className={classes.btn}>Back Home</button>
              </Link>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default SingleDrink;
