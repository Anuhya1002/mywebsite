"use client";
import React, { useState, useEffect } from "react";

export default function Profile() {
  const [exampleData, setExampleData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await res.json();
        setExampleData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);


  console.log(exampleData);
  return (
    <>
      <div className="container">
        <div className="data-profiles">
          {exampleData.map((item) => (
            <div key={item.id}>
              <h1>{item.name}</h1>
              <p>{item.username}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
