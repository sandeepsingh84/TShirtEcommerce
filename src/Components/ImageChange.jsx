import React from "react";
import styles from "../styles/ImageHover.module.css";

const ImageChange = () => {
  return (
    <div>
      <div className={styles.container}>
        <img
          class={styles.bottom}
          src="https://images.pexels.com/photos/1311590/pexels-photo-1311590.jpeg?auto=compress&cs=tinysrgb&w=5600"
        />
        <img
          class={styles.top}
          src="https://images.pexels.com/photos/6347888/pexels-photo-6347888.jpeg?auto=compress&cs=tinysrgb&w=2600"
        />
      </div>

      <h1 class={styles.main}>hlooo</h1>
    </div>
  );
};

export default ImageChange;



