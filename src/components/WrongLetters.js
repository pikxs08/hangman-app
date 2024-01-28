import React from "react";

const WrongLetters = ({ wrongLetters }) => {
  return (
    <>
      <div className="wrong-letters-container">
        <div>
          {wrongLetters.length > 0 && <p>Wrong</p>}
          {wrongLetters.map((letter, index) => {
            return <span key={index}>{letter}, </span>;
          })}
        </div>
      </div>
    </>
  );
};

export default WrongLetters;
