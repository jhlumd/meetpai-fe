import React from "react";
import { Restaurant, Movie, ContactSupport } from "@material-ui/icons";
import Rating from "@material-ui/lab/Rating";
import { logoUrls } from "../../../demo/demoData";

export default function SearchResultsIndexItem(props) {
  const { resultItem, handleSelectItemForShowCard } = props;
  let imgUrl = resultItem.imgUrl;
  const { domain, name, rating, availableOn } = resultItem;

  if (!imgUrl) imgUrl = "logo611.png";

  let domainIcon;
  switch (domain) {
    case "restaurant":
      domainIcon = <Restaurant fontSize="small" />;
      break;

    case "movie":
      domainIcon = <Movie fontSize="small" />;
      break;

    default:
      domainIcon = <ContactSupport fontSize="small" />;
      break;
  }

  return (
    <div
      className="search-result-item-container"
      onClick={() => handleSelectItemForShowCard(resultItem)}
    >
      <figure>
        <img src={imgUrl} alt={`${name} small`} />
      </figure>

      <div className="info-container">
        <div className="name-domain">
          <p>{name}</p>
          {domainIcon}
        </div>

        <div className="rating-available">
          <Rating
            name="read-only"
            value={rating}
            precision={0.1}
            size="small"
            readOnly
          />
          <div className="available-on-container">
            <p className="available-on-label">
              Available on:
            </p>
            <div className="available-on-list">
              {availableOn.map((company, i) => (
                <img key={i} src={logoUrls[company]} alt={`${company} logo`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
