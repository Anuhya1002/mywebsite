"use client";
import React, { useEffect, useState } from "react";

export default function Details() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/2")
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, []);

  console.log(product);

  return (
    <div className="container">
      {product ? (
        <div className="product-details">
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h3>${product.price}</h3>
        </div>
      ) : (
        <p>Loading product...</p>
      )}
    </div>
  );
}
