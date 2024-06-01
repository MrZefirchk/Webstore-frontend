import React from "react";
import BraceletsCarousel from "../components/BraceletsCarousel";
import "../styles/HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Welcome to Bracelet Store</h1>
        <h2>Discover our latest bracelets</h2>
      </div>
      <div className="bracelet-carousel-container">
        <BraceletsCarousel />
      </div>
    </div>
  );
}

export default HomePage;
