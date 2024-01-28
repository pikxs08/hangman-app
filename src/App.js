import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import Words from "./words";
import Popup from "./components/Popup";
import Guide from "./components/Guide";

// Random Word Generator
let randomWord = Words[Math.floor(Math.random() * Words.length)];
console.log(randomWord);

// An array containing non-duplicate letters from randomWord
const filterArray = (randomWord) => {
  let randomWordArr = randomWord.split("");
  let filteredArray = randomWordArr.filter(
    (letter, index) => randomWordArr.indexOf(letter) === index
  );
  return filteredArray;
};

// Final array containing non-duplicate letters from randomWord
// This array is used to compare the length with correctLetters
let filteredLetters = filterArray(randomWord);

function App() {
  // Game States
  const [canPlay, setCanPlay] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [figureNumber, setFigureNumber] = useState(1);
  const [won, setWon] = useState(false);
  const [triesLeft, setTriesLeft] = useState(10);
  const [showGuide, setShowGuide] = useState(false);

  useEffect(() => {
    // Check for win
    if (filteredLetters.length === correctLetters.length) {
      setWon(true);
      setCanPlay(false);
    } else if (wrongLetters.length === 10) {
      setWon(false);
      setCanPlay(false);
    }

    const handleKeyDown = (event) => {
      // Destructure key and keyCode from event
      const { key, keyCode } = event;
      // If canPlay is true and keyCode is between 65 and 90 (a-z)
      if (canPlay && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (randomWord.includes(letter)) {
          // if letter is in randomWord and not already in correctLetters
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            // if letter is already in correctLetters
            alert(`You already guessed ${key}, try again.`);
          }
        } else {
          // if letter is not in randomWord and not already in wrongLetters
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
            // If wrongLetters is less than 11, increment figureNumber
            if (wrongLetters.length < 11 && figureNumber < 11) {
              setFigureNumber((currentFigureNumber) => currentFigureNumber + 1);
              setTriesLeft((currentTriesLeft) => currentTriesLeft - 1);
            }
          } else {
            // if letter is already in wrongLetters
            alert(`You already guessed ${key}, try again.`);
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [canPlay, correctLetters, wrongLetters]);

  // User opts to play again
  const handlePlayAgain = () => {
    setCanPlay(true);
    setCorrectLetters([]);
    setWrongLetters([]);
    setFigureNumber(1);
    setWon(false);
    setTriesLeft(10);
    const newRandomWord = Math.floor(Math.random() * Words.length);
    randomWord = Words[newRandomWord];
    filteredLetters = filterArray(randomWord);
  };

  const showGuidePopup = () => {
    setShowGuide(true);
  };

  return (
    <>
      <Header triesLeft={triesLeft} />
      <button className="guide-btn" onClick={showGuidePopup}>
        Help!
      </button>
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} figureNumber={figureNumber} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word randomWord={randomWord} correctLetters={correctLetters} />
        <Popup
          setCanPlay={setCanPlay}
          wrongLetters={wrongLetters}
          correctLetters={correctLetters}
          randomWord={randomWord}
          canPlay={canPlay}
          handlePlayAgain={handlePlayAgain}
          won={won}
        />
        <Guide showGuide={showGuide} setShowGuide={setShowGuide} />
      </div>
    </>
  );
}

export default App;
