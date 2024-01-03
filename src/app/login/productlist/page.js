"use client";
import { useState, useEffect } from "react";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let data = await fetch("https://dummyjson.com/products");
      data = await data.json();
      setProducts(data.products);
      console.log(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      {products.map((product) => (
        <h1 key={product.id}>{product.title}</h1>
      ))}
    </div>
  );
};

export default ProductList;
