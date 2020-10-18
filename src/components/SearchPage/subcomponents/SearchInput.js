import React from "react";
import { IconButton, TextField } from "@material-ui/core";
import { Mic, Search } from "@material-ui/icons";

export default function SearchInput(props) {
  const { searchInputWord, setSearchInputWord, handleCloseShowCard } = props;

  const handleSubmitSearch = () => {
    console.log("Submit search:", searchInputWord);
    handleCloseShowCard();
  };

  const handleVoiceInputStart = () => {
    window.SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new window.SpeechRecognition();
    recognition.interimResults = true;
    recognition.lang = "en-US";

    console.log("Start voice input...", recognition);

    // fixme: https://medium.com/@amanda.k.hussey/a-basic-tutorial-on-how-to-incorporate-speech-recognition-with-react-6dff9763cea5
    // const textFieldElement = document.getElementById("search-text-input");

    // recognition.addEventListener("result", (e) => {
    //   const transcript = Array.from(e.results)
    //     .map((result) => result[0])
    //     .map((result) => result.transcript)
    //     .join("");

    //   console.log("transcript:", transcript);
    //   textFieldElement.value = transcript;
    // });

    // recognition.addEventListener("end", recognition.start);
    // recognition.start();
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      console.log("Enter key was pressed with value:", e.target.value);
    }
  };

  /*
    Search results update as user types
  */
  const handleTextfieldChange = (e) => {
    setSearchInputWord(e.target.value);
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
