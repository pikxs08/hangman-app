// This is a guide popup component that will show
// when the user clicks on the guide button.

import React from "react";

const Guide = ({ showGuide, setShowGuide }) => {
  const closeGuide = () => {
    setShowGuide(false);
  };

  return (
    <>
      <div
        className="popup-container"
        style={showGuide === true ? { display: "flex" } : { display: "none" }}
      >
        <button className="close-btn" onClick={closeGuide}>
          X
        </button>
        <div className="popup">
          <h2>Guide</h2>

          <p>
            Objective: Guess the hidden word by entering letters. Each correct
            guess reveals letters in the word, while each incorrect guess adds a
            part to the hangman figure. You have 10 tries to guess the word
            correctly before the hangman is fully drawn.
          </p>

          <h3>Game Rules:</h3>
          <ol>
            <li>
              <strong>Guess the Word:</strong> Enter letters into the input
              field to guess the hidden word. The word is randomly chosen from a
              predefined list.
            </li>
            <li>
              <strong>Letter Input:</strong> Type a letter and press Enter or
              click the "Guess" button to submit your guess. Only letters from A
              to Z are valid inputs.
            </li>
            <li>
              <strong>Correct Guesses:</strong> If your guessed letter is in the
              hidden word, it will be revealed in its correct position(s).
            </li>
            <li>
              <strong>Incorrect Guesses:</strong> If your guessed letter is not
              in the hidden word, a part of the hangman figure will be drawn.
              You have 10 incorrect guesses before the game ends.
            </li>
            <li>
              <strong>Winning:</strong> If you correctly guess all the letters
              in the word before making 10 incorrect guesses, you win the game.
            </li>
            <li>
              <strong>Losing:</strong> If you make 10 incorrect guesses before
              guessing the word correctly, the hangman figure will be fully
              drawn, and you lose the game.
            </li>
          </ol>

          <p>
            <strong>Play Again:</strong> If you want to play again, simply click
            the "Play Again" button. This will reset the game, allowing you to
            start a new round with a new word.
          </p>

          <p>
            <strong>Tips:</strong>
          </p>
          <ul>
            <li>
              Start with common vowels (e.g., A, E, I, O, U) as they are often
              present in words.
            </li>
            <li>
              Pay attention to the revealed letters and try to guess the word
              based on the visible pattern.
            </li>
          </ul>

          <p>Have Fun and Good Luck!</p>
        </div>
      </div>
    </>
  );
};

export default Guide;
