import React from "react";
import { Button } from "@material-ui/core";
import { Close, Share } from "@material-ui/icons";
import "./ItemShowCard.css";
import RestaurantItem from "./RestaurantItem/RestaurantItem";
import MovieItem from "./MovieItem/MovieItem";

export default function ItemShowCard(props) {
  const { showCardHidden, itemForShowCard, handleCloseShowCard } = props;

  const handleShareItem = () => {
    console.log("Share item:", itemForShowCard.name);
  };

  let showCardComponent;
  switch (itemForShowCard.type) {
    case "restaurant":
      showCardComponent = <RestaurantItem itemForShowCard={itemForShowCard} />;
      break;
  
    case "movie":
      showCardComponent = <MovieItem itemForShowCard={itemForShowCard} />;
      break;
  
    default:
      // fixme: basic default
      showCardComponent = (
        <p>
          Item Show Card:{" "}
          {itemForShowCard.name ? itemForShowCard.name : "No Item Selected"}
        </p>
      );
      break;
  }

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

      {showCardComponent}
    </div>
  );
}
