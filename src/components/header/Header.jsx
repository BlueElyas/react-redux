import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <ul className={styles.ul}>
        <li>
          <NavLink className={styles.navlink} to="/">
            State and Redux
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.navlink} to="thunks">
            APIs, thunks and Effects
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
