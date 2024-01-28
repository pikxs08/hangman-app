import React, { useState, useEffect } from "react";
import state1 from "../hangmandrawings/state1.GIF";
import state2 from "../hangmandrawings/state2.GIF";
import state3 from "../hangmandrawings/state3.GIF";
import state4 from "../hangmandrawings/state4.GIF";
import state5 from "../hangmandrawings/state5.GIF";
import state6 from "../hangmandrawings/state6.GIF";
import state7 from "../hangmandrawings/state7.GIF";
import state8 from "../hangmandrawings/state8.GIF";
import state9 from "../hangmandrawings/state9.GIF";
import state10 from "../hangmandrawings/state10.gif";
import state11 from "../hangmandrawings/state11.GIF";

// Object containing images
const images = {
  1: state1,
  2: state2,
  3: state3,
  4: state4,
  5: state5,
  6: state6,
  7: state7,
  8: state8,
  9: state9,
  10: state10,
  11: state11,
};

const Figure = ({ wrongLetters, figureNumber }) => {
  return (
    <>
      <img src={images[figureNumber]} alt="hangman drawing" />
    </>
  );
};

export default Figure;
