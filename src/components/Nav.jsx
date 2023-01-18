import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Nav.css";
import { GiHamburgerMenu } from "react-icons/gi";

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
      <button
        className="btn btn-light hamburger"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
      >
        <GiHamburgerMenu />
      </button>

      <div
        className="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">English School Links</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="links-list">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/pricing">Dates & Pricing</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
