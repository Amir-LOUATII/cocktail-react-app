import React, { useEffect, useState } from "react";

const AppContext = React.createContext();

const AppContextProvider = (props) => {
  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  const fetchCocktails = () => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
      .then((response) => response.json())
      .then((responseData) => {
        const data = responseData.drinks.map((item) => {
          const {
            idDrink: id,
            strAlcoholic: info,
            strDrink: name,
            strGlass: glass,
            strDrinkThumb: image,
          } = item;
          return { name, id, info, glass, image };
        });
        setData(data);
        setCocktails(data);
        setIsLoading(false);
      });
  };

  const filterCocktails = (value) => {
    if (value) {
      const newCocktails = data.filter((item) => {
        return item.name.toLowerCase().includes(value.toLowerCase());
      });
      setCocktails(newCocktails);
    } else {
      setCocktails(data);
    }
  };

  useEffect(() => {
    fetchCocktails();
  }, []);
  return (
    <AppContext.Provider
      value={{ cocktails, isError, isLoading, filterCocktails }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContextProvider, AppContext };
