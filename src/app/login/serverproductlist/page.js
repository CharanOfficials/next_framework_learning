import React from "react";
import Product from "./product";
const product = async () => {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
};
const ServerProductList = async () => {
  const products = await product();
  // console.log(products);
  return (
    <div>
      {products.map((item) => (
        <div>
          {item.title} <Product price={item.price} />
        </div>
      ))}
    </div>
  );
};

export default ServerProductList;
