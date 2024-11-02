"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTheme } from "../context/ThemeContext";
import Product from "@/components/Prodcut";

export default function Homepage() {
  const { theme, toggleTheme } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

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

  return (
    <section>
      <div className="toggle-section">
        {/* Theme Toggle */}
        {/* <button onClick={toggleTheme} className="btn btn-primary mb-3">
          Toggle Theme
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

              <h3 className="cart-count">Cart Count: {count}</h3>
              <button className="btn btn-danger" onClick={clearCart}>
                Clear Cart
              </button>

              <h1>Total amount: ${total.toFixed(2)}</h1>
            </div>

            {/* Product Cards */}
              <Product searchTerm={searchTerm} setCount={setCount} setTotal={setTotal} count={count} total={total} message={"Hello welcome"}/>
          </div>
        </div>
      </div>
    </section>
  );
}