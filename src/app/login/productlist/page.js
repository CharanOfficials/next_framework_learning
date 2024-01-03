"use client";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight: "100",
  subsets: ["latin"],
  display: "swap",
});
import { useState, useEffect } from "react";
const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let data = await fetch("https://dummyjson.com/products");
      data = await data.json();
      setProducts(data.products);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className={roboto.className}>Roboto</div>
      {products.map((product) => (
        <h1 key={product.id}>{product.title}</h1>
      ))}
    </div>
  );
};

export default ProductList;
