import React from "react";

export default function RestaurantItem(props) {
  const { itemForShowCard } = props;
  const {
    name,
    imgUrl,
    cuisine,
    location,
    rating,
    numRatings,
    priceRange,
    numBookedToday,
    address,
    phoneNumber,
    availableOn,
  } = itemForShowCard;

  return (
    <div className="item-show-card">
      <h3 className="restaurant-name">{name}</h3>
      <img src={imgUrl} className="restaurant-image" alt="restaurant main" />

      <div className="rating-price-range">
        {rating}{numRatings}{priceRange}
      </div>

      <div className="cuisine-location">
        {cuisine}{location}
      </div>

      <div className="booked-available-on">
        {numBookedToday}{availableOn}
      </div>

      <div className="address-phone">
        {address}{phoneNumber}
      </div>
    </div>
  );
}
