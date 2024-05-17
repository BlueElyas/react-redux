import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RandomCocktailCard from "./RandomCocktailCard";
import { fetchRandomCocktail } from "./randomCocktailSlice";
import styles from "./randomCocktail.module.css";

const RandomCocktail = () => {
  const isLoading = useSelector((state) => state.randomCocktail.isLoading);
  const hasError = useSelector((state) => state.randomCocktail.hasError);
  const dispatch = useDispatch();
  const select = useSelector((state) => state.randomCocktail.drinksArr);

  useEffect(() => {
    dispatch(fetchRandomCocktail());
  }, [dispatch]);

  if (isLoading) {
    return <h1>Hello</h1>;
  }

  if (hasError) {
    return <h1>ERROR</h1>;
  }

  if (select.length > 0) {
    if (select)
      return (
        <section className={styles.section}>
          {select[0].drinks.map((drink) => {
            return (
              <RandomCocktailCard
                image={drink.strDrinkThumb}
                name={drink.strDrink}
                category={drink.strCategory}
                iba={drink.strIBA}
              />
            );
          })}
        </section>
      );
  }
};

export default RandomCocktail;
