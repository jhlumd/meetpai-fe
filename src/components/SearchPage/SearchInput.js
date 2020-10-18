import React from "react";
import { Button, TextField } from "@material-ui/core";
import { Mic, Search } from "@material-ui/icons";

export default function SearchInput(props) {
  // const { demoData, handleSelectItemForShowCard } = props;

  const handleVoiceInputStart = () => {
    console.log("Start voice input...");
  };

  const handleSubmitSearch = () => {
    console.log("Submit search!!");
  };

  return (
    <div className="search-input-container">
      <TextField
        id="search-text-input"
        label="Ask Kai anything..."
        variant="outlined"
        color="primary"
      />

      <Button
        onClick={handleVoiceInputStart}
        variant="contained"
        color="primary"
      >
        <Mic />
      </Button>

      <Button
        onClick={handleSubmitSearch}
        variant="contained"
        color="primary"
      >
        <Search />
      </Button>
    </div>
  );
}
