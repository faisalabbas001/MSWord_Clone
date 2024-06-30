"use client"
import React, { useState } from 'react';

const CountLetter = ({ inputValue }) => {
  const [letterCount, setLetterCount] = useState(0);

  const handleCountLetters = () => {
    const count = inputValue.length;
    setLetterCount(count);
  };

  return (
    <div className="mt-5">
      <button onClick={handleCountLetters}>COUNT LETTERS</button>
      <p>Letter count: {letterCount}</p>
    </div>
  );
};

export default CountLetter;