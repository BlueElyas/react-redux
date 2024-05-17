import React from "react";
import styles from "./randomCocktail.module.css";

const RandomCocktailCard = ({ image, name, category, iba }) => {
  return (
    <article>
      <div className={styles.card}>
        <img src={image} alt="" className={styles.cardImg} />
        <div className={styles.cardBody}>
          <h2 className={styles.cardH2}>{name}</h2>
          <p className={styles.cardP}>{category}</p>
          <h5 className={styles.cardH5}>{iba}</h5>
        </div>
      </div>
    </article>
  );
};

export default RandomCocktailCard;
