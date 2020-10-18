import React from "react";
import { Button } from "@material-ui/core";
import { Close, Share } from "@material-ui/icons";
import "./ItemShowCard.css";
// import SearchPage from "./SearchPage";
// import ItemShowCard from "./ItemShowCard";

export default function ItemShowCard(props) {
  const { showCardHidden, itemForShowCard, handleCloseShowCard } = props;

  const handleShareItem = () => {
    console.log("Share item:", itemForShowCard.name);
  };

  return (
    <div className={`item-show-card-container${showCardHidden ? " hide" : ""}`}>
      <div className="header">
        <Button
          onClick={handleCloseShowCard}
          variant="contained"
          color="primary"
        >
          <Close />
        </Button>

        <Button
          onClick={handleShareItem}
          variant="contained"
          color="primary"
        >
          <Share />
        </Button>
      </div>

      <p>
        Item Show Card:{" "}
        {itemForShowCard.name ? itemForShowCard.name : "No Item Selected"}
      </p>
    </div>
  );
}
