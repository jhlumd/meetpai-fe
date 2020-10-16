import React from "react";
import "./SearchPage.css";
// import SearchPage from "./SearchPage";
// import ItemShowCard from "./ItemShowCard";

export default function SearchPage(props) {
  const { demoData, handleSelectItemForShowCard } = props;

  return (
    <div className="search-page-container">
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
  );
}
