"use client";

import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";

export default function Product({
  searchTerm,
  setCount,
  setTotal,
  count,
  total,
  message,
}) {
  const [data, setData] = useState([]);

  // Add to Cart function
  function addToCart(price) {
    setCount(count + 1);
    setTotal(total + price);
  }

  // Remove item from cart function
  function minusFromCart(price) {
    setCount((prevCount) => {
      if (prevCount > 0) {
        setTotal(total - price);
        return prevCount - 1;
      }
      return 0;
    });
  }

  // Filter the data based on search term
  const filteredData = data.filter((product) =>
    product.title.toLowerCase().includes(searchTerm)
  );

  // Fetch product data
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="d-flex flex-wrap">
      {filteredData.length > 0 ? (
        filteredData.map((product) => (
          <>
            <div key={product.id} className="each-card">
              <a>
                <img
                  src={product.image}
                  className="product-image"
                  alt={product.title}
                />
                <h3 className="title">{product.title}</h3>
                <p>{product.description}</p>
                <h1 className="price">${product.price}</h1>
                <p>Rating: {product.rating.rate}</p>
              </a>
              <button
                className="btn btn-success"
                onClick={() => addToCart(product.price)}
              >
                Add to cart
              </button>
              <button
                className="btn btn-danger"
                onClick={() => minusFromCart(product.price)}
              >
                -
              </button>
            </div>
          </>
        ))
      ) : (
        <ReactBootStrap.Spinner
          className="spinner"
          animation="border"
          variant="primary"
        />
      )}
    </div>
  );
}
