"use client";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Authors() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const newData = await res.json();
        setData(newData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData(); 
  }, []);


  const eraseData = () => {
    setData([]);
  };

  return (
    <>
      <div className="heading">
        <h1>Authors Page</h1>
        <button className="btn btn-primary" onClick={eraseData}>
          Erase All Data
        </button>
      </div>
      <div className="container">
        <div className="newdata-container">
          <ul className="d-flex">
            {data.map((item) => (
              <li key={item.id} className="newdata-item">
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
