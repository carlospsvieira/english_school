import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Hero.css";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="heading">
        <h2>It's a fun old world</h2>
        <h1>Where the new is always present.</h1>
        <Link to="/pricing">CHECK OUT WHEN OUR CLASSES START</Link>
      </div>
    </div>
  );
}
