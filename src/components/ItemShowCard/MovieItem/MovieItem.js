import React from "react";

export default function MovieItem(props) {
  const { itemForShowCard } = props;

  return (
    <div
      className="item-show-card"
    >
      Movie: {itemForShowCard.name}
    </div>
  );
}
