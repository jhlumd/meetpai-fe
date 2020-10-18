import React from "react";

export default function RestaurantItem(props) {
  const { itemForShowCard } = props;

  return (
    <div
      className="item-show-card"
    >
      Restaurant: {itemForShowCard.name}
    </div>
  );
}
