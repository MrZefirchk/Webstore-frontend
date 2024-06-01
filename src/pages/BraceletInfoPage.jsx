// src/pages/BraceletInfoPage.jsx
import React, { useEffect } from "react";
//import axios from "axios";
import { useParams } from "react-router-dom";
import { bracelets } from "../constants/bracelets";
import "../styles/BraceletInfoPage.css";

const BraceletInfoPage = () => {
  const { id } = useParams();
  const bracelet = bracelets.find((item) => item.id === parseInt(id));
  // const [bracelet, setBracelet] = useEffect(null);
  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:5000/api/bracelets/${id}`)
  //     .then((response) => setBracelet(response.data))
  //     .catch((error) => console.error("Error fetching bracelet data:", error));
  // }, [id]);

  if (!bracelet) {
    return <div>Bracelet not found</div>;
  }

  return (
    <div className="bracelet-info-page">
      <img
        src={bracelet.imageUrl}
        alt={bracelet.name}
        className="bracelet-image"
      />
      <div className="bracelet-details">
        <h2>{bracelet.name}</h2>
        <p>{bracelet.description}</p>
        <p>
          <strong>Size:</strong> {bracelet.size}
        </p>
        <p>
          <strong>Material:</strong> {bracelet.material}
        </p>
        <p>
          <strong>Condition:</strong> {bracelet.condition}
        </p>
        <p>
          <strong>Price:</strong> ${bracelet.price.toFixed(2)}
        </p>
        <button>Buy</button>
      </div>
    </div>
  );
};

export default BraceletInfoPage;
