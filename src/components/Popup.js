import React from "react";
import { useEffect } from "react";

const Popup = ({ canPlay, randomWord, wrongLetters, handlePlayAgain, won }) => {
  // Win Status

  useEffect(() => {
    if (!canPlay) {
      document.querySelector("body").classList.add("overlay");
    } else if (canPlay) {
      document.querySelector("body").classList.remove("overlay");
    }
  });

  return (
    <div
      className="popup-container "
      style={!canPlay ? { display: "flex" } : { display: "none" }}
    >
      <div className="popup">
        <h2>
          {won
            ? `AWESOME! YOU WON with ${
                10 - wrongLetters.length
              } tries left! You can play again below.`
            : `You are out of tries, the correct word was ${randomWord}, You can play again below.`}
        </h2>
        <button className="play-again" onClick={handlePlayAgain}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Popup;
