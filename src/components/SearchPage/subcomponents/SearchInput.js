import React from "react";
import { IconButton, TextField } from "@material-ui/core";
import { Mic, Search } from "@material-ui/icons";

export default function SearchInput(props) {
  // const { demoData, handleSelectItemForShowCard } = props;

  const handleVoiceInputStart = () => {
    console.log("Start voice input...");
  };

  const handleSubmitSearch = () => {
    console.log("Submit search!!");
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      console.log("Entered value:", e.target.value);
      handleSubmitSearch();
    }
  };

  const handleTextfieldChange = (e) => {
    console.log("Typing:", e.target.value);
    // set app state to e.target.value
    handleSubmitSearch();
  };

  return (
    <div className="search-input-container">
      <img src="logo180.png" alt="MeetKai logo" width="40" height="40" />

      <TextField
        id="search-text-input"
        label="Ask Kai anything..."
        variant="outlined"
        color="primary"
        size="small"
        onKeyDown={handleKeyPress}
        onChange={handleTextfieldChange}
      />

      <IconButton
        onClick={handleVoiceInputStart}
        aria-label="voice search"
        color="primary"
      >
        <Mic />
      </IconButton>

      <IconButton
        onClick={handleSubmitSearch}
        aria-label="submit search"
        color="primary"
      >
        <Search />
      </IconButton>
    </div>
  );
}
