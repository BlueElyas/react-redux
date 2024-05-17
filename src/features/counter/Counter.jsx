import React from "react";
import styles from "./counter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);

  return (
    <div className={styles.div}>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <h1 className={styles.h1}>{counter}</h1>
      </div>
    </div>
  );
};

export default Counter;
