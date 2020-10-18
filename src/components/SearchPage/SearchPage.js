import React, { useState } from "react";
import "./SearchPage.css";
import SearchInput from "./subcomponents/SearchInput";
import SearchResultsIndexItem from "./subcomponents/SearchResultsIndexItem";

export default function SearchPage(props) {
  const { demoData, handleSelectItemForShowCard, handleCloseShowCard } = props;

  /*
    Local state for the search term
  */
  const [searchInputWord, setSearchInputWord] = useState("");

  // fixme: search more props
  const filteredResults =
    searchInputWord === ""
      ? []
      : demoData.filter(
          (item) =>
            item.name.toLowerCase().includes(searchInputWord.toLowerCase()) ||
            item.domain.includes(searchInputWord.toLowerCase())
        );

  return (
    <div className="search-page-container">
      <SearchInput
        searchInputWord={searchInputWord}
        setSearchInputWord={setSearchInputWord}
        handleCloseShowCard={handleCloseShowCard}
      />

      <div className="results-index">
        <div className="results-index-center">
          {filteredResults.map((item) => (
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
