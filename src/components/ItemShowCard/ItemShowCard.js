import React from "react";
import { Button } from "@material-ui/core";
import "./ItemShowCard.css";
// import SearchPage from "./SearchPage";
// import ItemShowCard from "./ItemShowCard";

export default function ItemShowCard(props) {
  const { showCardHidden, itemForShowCard, handleCloseShowCard } = props;

  return (
    <div className={`item-show-card-container${showCardHidden ? " hide" : ""}`}>
      <Button onClick={handleCloseShowCard}>x</Button>
      <p>
        Item Show Card:{" "}
        {itemForShowCard.name ? itemForShowCard.name : "No Item Selected"}
      </p>
    </div>
  );
}
