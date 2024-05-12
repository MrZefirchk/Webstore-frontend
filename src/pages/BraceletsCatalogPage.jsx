import React, { useState } from "react";
import BraceletItem from "../components/BraceletItem";
import { bracelets } from "../constants/bracelets";

function BraceletsCatalogPage() {
  const [braceletsList, setBraceletsList] = useState([]);

  useState(() => {
    setBraceletsList(bracelets);
  });

  return (
    <div className="bracelets__list">
      {braceletsList.length > 0 ? (
        braceletsList.map((bracelet) => (
          <BraceletItem bracelet={bracelet} key={bracelet.id} />
        ))
      ) : (
        <p>No bracelets aveilable</p>
      )}
    </div>
  );
}

export default BraceletsCatalogPage;
