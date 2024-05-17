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
      <input
        type="text"
        value={capturedText}
        onChange={handleChange}
        placeholder="Write anything"
        className={styles.input}
      />
      <h2 className={styles.h2}>{capturedText}</h2>
    </div>
  );
};

export default TextCapture;
