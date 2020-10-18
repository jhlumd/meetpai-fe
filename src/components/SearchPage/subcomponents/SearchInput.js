import React, { useState, useEffect } from "react";
import { IconButton, TextField } from "@material-ui/core";
import { Mic, Search } from "@material-ui/icons";

/*
  Speech recognition setup
*/
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = "en-US";

export default function SearchInput(props) {
  const { searchInputWord, setSearchInputWord, handleCloseShowCard } = props;

  /*
    Handle text input submit/enter key press/submit
  */
  const handleSubmitSearch = () => {
    console.log("Submit search:", searchInputWord);
    handleCloseShowCard();
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      console.log("Enter key was pressed with value:", e.target.value);
    }
  };

  const handleTextfieldChange = (e) => {
    setSearchInputWord(e.target.value);
  };

  /*
    Handle speech recognition
  */
  const [listening, setListening] = useState(false);

  const toggleListen = () => {
    console.log("Listening set to:", !listening);
    setListening(!listening);
  };

  useEffect(() => {
    /*
      Handle when to start and stop SpeechRecognition
    */
    if (listening) {
      console.log("Starting SpeechRecognition!");
      recognition.start();
      recognition.onend = () => {
        if (listening) {
          console.log("...continue listening...");
          recognition.start();
        }
      };
    } else {
      console.log("Turning listening off!");
      recognition.stop();
      recognition.onend = () => {
        if (!listening) {
          console.log("Stopped listening per user click");
        }
      };
    }

    /*
      Transcript generation
    */
    //  fixme: onresult not firing...
    let finalTranscript = "";
    console.log("recognition obj:", recognition);
    recognition.onresult = (e) => {
      console.log("RESULT EVENT FIRED!!!");
      let interimTranscript = "";

      for (let i = e.resultIndex; i < e.results.length; i++) {
        const transcript = e.results[i][0].transcript;
        console.log("transcript:", transcript);
        if (e.results[i].isFinal) finalTranscript += transcript + " ";
        else interimTranscript += transcript;
      }

      console.log("Final Transcript:", finalTranscript);
      console.log("Interim Transcript:", interimTranscript);

      // document.getElementById(
      //   "search-text-input"
      // ).innerHTML = interimTranscript;
      document.getElementById("search-text-input").innerHTML = finalTranscript;
    };

    /*
      Print error, if any
    */
    recognition.onerror = (e) => {
      console.log("Error occurred in SpeechRecognition: " + e.error);
    };
    // fixme: cleanup effect needed?
    // return () => {
    //   console.log("Turning listening off!");
    // };
  }, [listening]);

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
        onClick={toggleListen}
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
