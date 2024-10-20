"use client";
import React from "react";
import { useTheme } from "../context/ThemeContext";
import { headerData } from '../data/header';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  console.log(headerData);

  return (
    <header className={`${theme === "light" ? "dark" : "light"}`}>
      <div className="header-section">
        <div className="heading-section">
          <h1 className="heading">Anime Streaming Platform</h1>
          <button onClick={toggleTheme} className="btn btn-primary">
            Toggle to {theme === "light" ? "Light" : "Dark"} Theme
          </button>
        </div>

        <div className="links">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
            <li>Login</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
