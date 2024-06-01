import React from "react";
import "../styles/AboutPage.css";

function AboutPage() {
  return (
    <div className="about">
      <h1>About us</h1>
      <p>
        Welcome to the "About Us" page of{" "}
        <span className="store-name">Needle's</span> online store for knitted
        bracelets!
      </p>
      <p>
        Our store is created with a passion for crafts and a desire to offer you
        unique accessories that add originality and style to your look.
      </p>
      <p>
        At <span className="store-name">Needle</span>, we are dedicated to the
        art of knitting and creating unique adornments that express your
        individuality. Each of our bracelets is the result of skilled
        craftsmanship and attention to detail.
      </p>
      <p>
        Our products are made exclusively from high-quality materials, ensuring
        their durability and maintaining their attractive appearance over time.
      </p>
      <p>
        We aim not only to meet your expectations for a stylish accessory but
        also to make your interaction with{" "}
        <span className="store-name">Needle</span> a memorable experience. Our
        team is always ready to answer all your questions and assist you in
        choosing the perfect bracelet.
      </p>
      <p>
        May our products become an integral part of your style and help you
        express yourself every day!
      </p>
      <p>
        Thank you for choosing <span className="store-name">Needle</span>!
      </p>
    </div>
  );
}

export default AboutPage;
