import React from "react";
import "./SearchPage.css";
import SearchInput from "./SearchInput";
// import ItemShowCard from "./ItemShowCard";

export default function SearchPage(props) {
  const { demoData, handleSelectItemForShowCard } = props;

  // state for the search term

  return (
    <div className="search-page-container">
      <SearchInput />

      <div className="results-index">
        <p
          onClick={() => handleSelectItemForShowCard(demoData[0])}
          className="blue"
        >
          {demoData[0].name}
        </p>
        <p onClick={() => handleSelectItemForShowCard(demoData[1])}>
          {demoData[1].name}
        </p>
      </div>
    </div>
  );
}
