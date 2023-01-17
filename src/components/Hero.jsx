import React from "react";
import "../stylesheets/Hero.css";

export default function Hero() {
  const handleClickScroll = () => {
    const element = document.querySelector(".programs");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero-container">
      <div className="heading">
        <h2>It's a fun old world</h2>
        <h1>Where the new is always present.</h1>
        <button type="button" onClick={handleClickScroll}>
          CHECK OUT OUR PROGRAMS
        </button>
      </div>
    </div>
  );
}
