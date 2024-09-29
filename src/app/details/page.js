"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

export default function Details() {
  const [data, setData] = useState(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  console.log(data);

  return (
    <div className="container">
      {data ? (
        <div className="details">
          <h2>COVID-19 Global Data</h2>
          <p>Cases: {data.cases}</p>
          <p>Deaths: {data.deaths}</p>
          <p>Recovered: {data.recovered}</p>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}
