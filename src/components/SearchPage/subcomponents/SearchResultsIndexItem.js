import React from "react";
import { Restaurant, Movie, ContactSupport } from "@material-ui/icons";
import Rating from "@material-ui/lab/Rating";

export default function SearchResultsIndexItem(props) {
  const { resultItem, handleSelectItemForShowCard } = props;
  let imgUrl = resultItem.imgUrl;
  const { domain, name, rating, availableOn } = resultItem;

  if (!imgUrl) imgUrl = "logo611.png";

  let domainIcon;
  switch (domain) {
    case "restaurant":
      domainIcon = <Restaurant />;
      break;

    case "movie":
      domainIcon = <Movie />;
      break;

    default:
      domainIcon = <ContactSupport />;
      break;
  }

  return (
    <div
      className="search-result-item-container"
      onClick={() => handleSelectItemForShowCard(resultItem)}
    >
      <figure>
        <img src={imgUrl} alt={`${name} main`} />
      </figure>

      <div className="info-container">
        <div className="name-domain">
          <p>{name}</p>
          {domainIcon}
        </div>

        <div className="rating-available">
          <Rating name="read-only" value={rating} precision={0.1} readOnly />
          <p>A: {availableOn}</p>
        </div>
      </div>
    </div>
  );
}
