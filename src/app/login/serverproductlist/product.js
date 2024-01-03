"use client";
import React from "react";
import { useState } from "react";
import styles from "./product.module.css";
const Product = ({ price }) => {
  const [background, setBackground] = useState("green");
  const [html, setHtml] = useState(<h1>Hello</h1>);
  return (
    <>
      <div id={styles.orange}>Orange</div>
      <div className={background == "red" ? styles.red : styles.green}>
        Test
      </div>
      {html}
      <button
        // style={background}
        onClick={() => setHtml(<h2>Hello</h2>)}
      >
        Update color
      </button>
      <button onClick={() => alert(price)}>Get price</button>;
    </>
  );
};

export default Product;
