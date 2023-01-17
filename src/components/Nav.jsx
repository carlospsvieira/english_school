import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Nav.css";

export default function Nav() {
  return (
    <nav className="nav-container">
      <div className="logo">
        <Link to="/">ENGLISH SCHOOL</Link>
      </div>
      <div className="links-container">
        <Link to="/about">About</Link>
        <Link to="/pricing">Dates & Pricing</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}
