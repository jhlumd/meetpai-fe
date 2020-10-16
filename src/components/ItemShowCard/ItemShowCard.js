import React from "react";
import "./ItemShowCard.css";
// import SearchPage from "./SearchPage";
// import ItemShowCard from "./ItemShowCard";

export default function ItemShowCard(props) {
  const { showCardHidden, itemForShowCard, handleCloseShowCard } = props;

  return (
    <div className={`item-show-card-container ${showCardHidden ? "hide" : ""}`}>
      <p onClick={handleCloseShowCard}>x</p>
      <p>
        Item Show Card:{" "}
        {itemForShowCard.name ? itemForShowCard.name : "No Item Selected"}
      </p>
    </div>
  );
}
