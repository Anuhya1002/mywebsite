"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import * as ReactBootStrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTheme } from "../context/ThemeContext";

export default function Homepage() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const { theme, toggleTheme } = useTheme();

  // Add to Cart function
  function addToCart(price) {
    setCount(count + 1);
    setTotal(total + price);
  }

  // Clear Cart function
  function clearCart() {
    setCount(0);
    setTotal(0);
  }

  // Search input value handler
  function getInputValue(event) {
    let term = event.target.value.toLowerCase();
    setSearchTerm(term);
  }

  // Remove search value function
  function removeSearch() {
    setSearchTerm("");
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
    <section>
      <div className="toggle-section">
        {/* <button onClick={toggleTheme} className="btn btn-primary mb-3">
          Toggle to Theme
        </button> */}

        <div className="container-fluid">
          <div className="title">
            <h1>Ecommerce Responsive Website</h1>
          </div>

          <div className="products">
            <h2>List of Products</h2>

            {/* Search and Cart Info */}
            <div className="inputs-container">
              <div className="input-field">
                <input
                  type="text"
                  className="inputtext"
                  placeholder="Search an Item"
                  size={40}
                  value={searchTerm}
                  onChange={getInputValue}
                />
                <div className="clear" onClick={removeSearch}>
                  <button> x </button>
                </div>
              </div>

              <h3 className="cart-count">Cart Count : {count}</h3>
              <button className="btn btn-danger" onClick={clearCart}>
                Clear Cart
              </button>

              <h1>Total amount : ${total.toFixed(2)}</h1>
            </div>

            {/* Product Cards */}
            <div className="products-cards">
              <div className="card">
                {filteredData.length > 0 ? (
                  filteredData.map((product) => (
                    <div key={product.id} className="each-card">
                      <Link href={`/product/${product.id}`} legacyBehavior>
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
                      </Link>
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
                  ))
                ) : (
                  <ReactBootStrap.Spinner
                    className="spinner"
                    animation="border"
                    variant="primary"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
