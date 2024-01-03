"use client";
import React from "react";

const Product = ({ price }) => {
  return <button onClick={() => alert(price)}>Get price</button>;
};

export default Product;
