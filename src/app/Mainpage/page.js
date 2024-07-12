"use client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Mainpage() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [searchterm, setSearchterm] = useState("");

  function AddtoCart(price) {
    setCount(count + 1);
    setTotal(total + price);
  }

  function ClearCart() {
    setCount(0);
    setTotal(0);
  }

  function GetinputValue(event) {
    let term = event.target.value.toLowerCase();
    setSearchterm(term);
  }

  function Removesearch() {
    setSearchterm("");
  }

  function Minusfromcart(price) {
    setCount((prevCount) => {
      if (prevCount > 0) {
        setTotal(total - price);
        return prevCount - 1;
      }
      return 0;
    });
  }

  const filteredData = data.filter((product) =>
    product.title.toLowerCase().includes(searchterm)
  );

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <section>
      <div className="container-fluid">
        <div className="title">
          <h1>Ecommerce Responsive Website</h1>
        </div>
        <div className="products">
          <h2>List of Products</h2>
          <div className="inputs-container">
            <div className="input-field">
              <input
                type="text"
                className="inputtext"
                placeholder="Search an Item"
                size={40}
                value={searchterm}
                onChange={GetinputValue}
              />
              <div className="clear" onClick={Removesearch}>
                <button> x </button>
              </div>
            </div>

            <h3 className="cart-count">Cart Count : {count}</h3>
            <button className="btn btn-danger" onClick={ClearCart}>
              Clear Cart
            </button>

            <h1>Total amount : ${total.toFixed(2)}</h1>
          </div>
          <div className="products-cards">
            <div className="card">
              {filteredData.length > 0 ? (
                filteredData.map((product) => (
                  <div key={product.id} className="each-card">
                    <Link to={`/product/${product.id}`}>
                      <img
                        src={product.image}
                        className="product-image"
                        alt={product.title}
                      />
                      <h3 className="title">{product.title}</h3>
                      <p>{product.description}</p>
                      <h1 className="price">${product.price}</h1>
                      <p>Rating: {product.rating.rate}</p>
                    </Link>
                    <button
                      className="btn btn-success"
                      onClick={() => AddtoCart(product.price)}
                    >
                      Add to cart
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => Minusfromcart(product.price)}
                    >
                      -
                    </button>
                  </div>
                ))
              ) : (
                <p>Loading products...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
