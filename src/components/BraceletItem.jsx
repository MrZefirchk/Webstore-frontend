import React from "react";
import { Link } from "react-router-dom";
import "../styles/BraceletItem.css";

function BraceletItem(props) {
  const formatPrice = (price) => {
    return `${price.toFixed(2)} $`;
  };

  console.log(props.context);
  const containerClass =
    props.context === "carousel"
      ? "bracelet bracelet-carousel"
      : "bracelet bracelet-catalog";

  console.log(containerClass);

  return (
    <div className={containerClass}>
      <Link to={`/bracelet/${props.bracelet.id}`}>
        <div className="bracelet__image">
          <img
            src="https://zolotiyvik.ua/media/catalog/product/cache/7d867076b0c31e5e4acf36489cc1e4f1/s/g/sgrit2mm_black_br_rod.webp"
            alt={props.bracelet.name}
          />
        </div>
      </Link>
      <div className="bracelet__info">
        <div className="bracelet__name">{props.bracelet.name}</div>
        <div className="bracelet__description">
          {props.bracelet.description}
        </div>
        <div className="bracelet__price">
          Price: {formatPrice(props.bracelet.price)}
        </div>
        <button>Buy</button>
      </div>
    </div>
  );
}

export default BraceletItem;
