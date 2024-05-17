import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleTextCapture } from "./textCaptureSlice";
import styles from "./textCapture.module.css";

const TextCapture = () => {
  const dispatch = useDispatch();
  const capturedText = useSelector((state) => state.textCounter);

  const handleChange = (e) => {
    dispatch(handleTextCapture(e.target.value));
  };
  console.log(capturedText);
  return (
    <div className={styles.div}>
      <textarea
        type="text"
        value={capturedText}
        onChange={handleChange}
        placeholder="Write anything"
        className={styles.input}
        autoFocus
        rows={6}
        cols={40}
      ></textarea>
      <span className={styles.span}>Anything you write will appear here: </span>
      <h2 className={styles.h2}>{capturedText}</h2>
    </div>
  );
};

export default TextCapture;
