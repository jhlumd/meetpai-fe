import React from "react";

export default function SearchResultsIndexItem(props) {
  const { resultItem, handleSelectItemForShowCard } = props;

  return (
    <div
      className="search-result-item-container"
      onClick={() => handleSelectItemForShowCard(resultItem)}
    >
      {resultItem.name}
    </div>
  );
}
