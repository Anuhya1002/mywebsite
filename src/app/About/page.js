"use client";
import React, { useState } from "react";
import { useEffect } from "react";

export default function About() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  // const practice = new obj();
  // console.log(practice);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/users");
        if(!response.ok){
          throw new error("error while fetching data");
        }
        const newData = await response.json();
        console.log(newData);
        setData(newData);
    }
    catch (error){
      console.log("error")
    }
    }
    fetchData();
  }, []);

const hanldeCount = () => {
    setCount(count + 1);
}

  //   class Human {
  //     constructor(section){
  //         this.dna = "example",
  //         this.section = "example section"
  //     }
  //   }

  //   let new_check = Human();
  //   console.log(new_check);

  //   const testing = (name) => {
  //     console.log(name);
  //   };

  //   testing("example");

  return (
    <div className="container">
      <div className="about-section p-4 m-3">
        <h1>About Anime Streaming Platform</h1>
        <a href="./Login" className="btn btn-success">
          Contact us
        </a>

        <button onClick={hanldeCount}>click Me</button>
        <p>{count}</p>
        {data.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </div>
    </div>
  );
}
