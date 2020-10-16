import React, { useState } from "react";
import "./App.css";
import SearchPage from "./SearchPage/SearchPage";
import ItemShowCard from "./ItemShowCard/ItemShowCard";

export default function App(props) {
  const { demoData } = props;

  const [showCardHidden, setShowCardHidden] = useState(true);
  const [itemForShowCard, setItemForShowCard] = useState({});

  function handleSelectItemForShowCard(selectedItem) {
    console.log(`Selecting item ${selectedItem.name} for ShowCard...`);

    setItemForShowCard(selectedItem);
    setShowCardHidden(false);
  }

  function handleCloseShowCard() {
    console.log("Closing ShowCard...");
    if (showCardHidden) return;

    setShowCardHidden(true);
    // fixme: Animate the ShowCard down out of view
  }

  return (
    <div className="app-container">
      <SearchPage
        demoData={demoData}
        handleSelectItemForShowCard={handleSelectItemForShowCard}
      />
      <ItemShowCard
        showCardHidden={showCardHidden}
        itemForShowCard={itemForShowCard}
        handleCloseShowCard={handleCloseShowCard}
      />
    </div>
  );
}
