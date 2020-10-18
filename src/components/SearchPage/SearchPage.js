import React from "react";
import "./SearchPage.css";
import SearchInput from "./subcomponents/SearchInput";
import SearchResultsIndexItem from "./subcomponents/SearchResultsIndexItem";

export default function SearchPage(props) {
  const { demoData, handleSelectItemForShowCard } = props;

  // state for the search term

  return (
    <div className="search-page-container">
      <SearchInput />

      <div className="results-index">
        <div className="results-index-center">
          {demoData.map((item) => (
            <SearchResultsIndexItem
              key={item.id}
              resultItem={item}
              handleSelectItemForShowCard={handleSelectItemForShowCard}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
