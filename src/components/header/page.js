"use client";
import React from "react";
import Link from "next/link";
import { useTheme } from "../../app/context/ThemeContext";
import Headerdata from "../../../data/header.json";

const header = () => {
  const { theme, toggleTheme } = useTheme();
  console.log(Headerdata);

  return (
    <header
      className={`${theme === "light" ? "dark" : "light"} container-fluid`}
    >
      <div className="header-section">
        <div className="heading-section">
          <h1 className="heading">Anime Streaming Platform</h1>
          <button onClick={toggleTheme} className="btn btn-primary">
            Toggle to {theme === "light" ? "Light" : "Dark"} Theme
          </button>
        </div>

        <div className="links">
          <ul>
          {Headerdata.headerData.map((item, index) => (
              <li key={index}>
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default header;
