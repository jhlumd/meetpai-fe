import React from "react";
import "./SearchPage.css";
import SearchInput from "./SearchInput";
import SearchResultsItem from "./SearchResultsItem";

export default function SearchPage(props) {
  const { demoData, handleSelectItemForShowCard } = props;

  // state for the search term

  return (
    <div className="search-page-container">
      <SearchInput />

      <div className="results-index">
        {demoData.map((item) => (
          <SearchResultsItem
            key={item.id}
            resultItem={item}
            handleSelectItemForShowCard={handleSelectItemForShowCard}
          />
        ))}
      </div>
    </div>
  );
}
