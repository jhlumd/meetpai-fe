import React from "react";
import { logoUrls } from "../../../demo/demoData";

export default function MovieItem(props) {
  const { itemForShowCard } = props;
  const {
    name,
    imgUrl,
    genre,
    releaseDate,
    duration,
    allRatings,
    availableOn,
    director,
    cast,
    synopsis,
  } = itemForShowCard;

  return (
    <div className="item-show-card">
      <div className="poster-info">
        <img src={imgUrl} className="movie-image" alt="movie poster" />

        <div className="movie-info">
          <h3>
            {name}
            <span className="release-date"> ({releaseDate})</span>
          </h3>
          <p className="genre-duration">
            <span>{genre}</span>
            <span>{duration}</span>
          </p>
          <p className="director">Directed by {director}</p>
        </div>
      </div>

      <div className="movie-ratings">
        <div>
          <p>{allRatings[0]}/10</p>
          <p className="rating-site">IMDb</p>
        </div>
        <div className="rating-mid">
          <p>{allRatings[1]}%</p>
          <p className="rating-site">Rotten Tomatoes</p>
        </div>
        <div>
          <p>{allRatings[2]}%</p>
          <p className="rating-site">Metacritic</p>
        </div>
      </div>

      <div className="synopsis">{synopsis}</div>

      <div className="cast-list-container">
        <p className="cast-section-title">Cast Members:</p>  
        <div className="cast-list">
          {cast.map((actor, i) => (
            <div key={i} className="cast-card">
              <img src="https://i.stack.imgur.com/YaL3s.jpg" alt="default cast profile" />
              <p>{actor}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="movie-available-on">
        <div className="movie-available-on-inner">
          <p>Watch on:</p>
          <img src={logoUrls[availableOn[0]]} alt={`${availableOn[0]} logo`} />
        </div>
      </div>
    </div>
  );
}
