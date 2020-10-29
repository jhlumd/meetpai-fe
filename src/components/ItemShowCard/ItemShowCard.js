import React from "react";
import { IconButton } from "@material-ui/core";
import { Close, Share } from "@material-ui/icons";
import "./ItemShowCard.css";
import RestaurantItem from "./subcomponents/RestaurantItem";
import MovieItem from "./subcomponents/MovieItem";
import TmdbShow from "./subcomponents/TmdbShow";

export default function ItemShowCard(props) {
  const { showCardHidden, itemForShowCard, handleCloseShowCard } = props;

  const handleShareItem = () => {
    console.log("Share item:", itemForShowCard.name);
  };

  let whichShowCard;
  switch (itemForShowCard.domain) {
    case "restaurant":
      whichShowCard = <RestaurantItem itemForShowCard={itemForShowCard} />;
      break;
  
    case "movie":
      whichShowCard = <MovieItem itemForShowCard={itemForShowCard} />;
      break;
  
    case "braveheart":
      whichShowCard = <TmdbShow itemForShowCard={itemForShowCard} />;
      break;
  
    default:
      // fixme: basic default
      whichShowCard = (
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
        <IconButton
          onClick={handleCloseShowCard}
          aria-label="close item card"
          color="primary"
        >
          <Close />
        </IconButton>

        <IconButton
          onClick={handleShareItem}
          aria-label="share item"
          color="primary"
        >
          <Share />
        </IconButton>
      </div>

      {whichShowCard}
    </div>
  );
}
