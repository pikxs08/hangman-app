import React from "react";
import Guide from "./Guide";

const Header = ({ triesLeft, setShowGuide }) => {
  return (
    <div className="header">
      <h1>Hangman</h1>
      <p>Find the hidden word - Enter a letter</p>
      <p>Incorrect guesses remaining: {triesLeft}</p>
    </div>
  );
};

export default Header;
