import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import SearchPage from "./SearchPage/SearchPage";
import ItemShowCard from "./ItemShowCard/ItemShowCard";

export default function App(props) {
  const { demoData } = props;

  const [showCardHidden, setShowCardHidden] = useState(true);
  const [itemForShowCard, setItemForShowCard] = useState({});

  const handleSelectItemForShowCard = (selectedItem) => {
    console.log(`Selecting item "${selectedItem.name}" for ShowCard...`);

    setItemForShowCard(selectedItem);
    setShowCardHidden(false);
  };

  const handleCloseShowCard = () => {
    if (showCardHidden) return;

    console.log("Closing ShowCard...");

    setShowCardHidden(true);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <div className="app-container">
        <SearchPage
          demoData={demoData}
          handleSelectItemForShowCard={handleSelectItemForShowCard}
          handleCloseShowCard={handleCloseShowCard}
        />
        <ItemShowCard
          showCardHidden={showCardHidden}
          itemForShowCard={itemForShowCard}
          handleCloseShowCard={handleCloseShowCard}
        />
      </div>
    </React.Fragment>
  );
}
