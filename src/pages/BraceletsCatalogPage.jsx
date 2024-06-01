import React, { useState } from "react";
import { Link } from "react-router-dom";
import BraceletItem from "../components/BraceletItem";
import { bracelets } from "../constants/bracelets";
import "../styles/BraceletItem.css";

function BraceletsCatalogPage() {
  const [braceletsList, setBraceletsList] = useState([]);

  useState(() => {
    setBraceletsList(bracelets);
  });

  return (
    <div className="bracelets-catalog">
      {braceletsList.length > 0 ? (
        braceletsList.map((bracelet) => (
          <Link key={bracelet.id} to={`/bracelet/${bracelet.id}`}>
            <BraceletItem
              bracelet={bracelet}
              key={bracelet.id}
              context="catalog"
            />
          </Link>
        ))
      ) : (
        <p>No bracelets aveilable</p>
      )}
    </div>
  );
}

export default BraceletsCatalogPage;
