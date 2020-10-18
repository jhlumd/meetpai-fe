import React from "react";

export default function SearchResultsItem(props) {
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
