// CountWord.js
"use client"
import React, { useState } from 'react';

const CountWord = ({ text }) => {
  const [wordCount, setWordCount] = useState(0);

  const handleCountWord = () => {
    const count = text.trim().split(/\s+/).length;
    setWordCount(count);
  }

  return (
    <div className='relative inline-block text-left'>
      <div
        className='flex  h-9 bg-white border border-gray-300 rounded-md m-3 items-center justify-between px-2 cursor-pointer shadow-sm hover:shadow-md'
      >
        <button onClick={handleCountWord}>Count Word</button>
      </div>
      <p>Word count: {wordCount}</p>
    </div>
  );
};

export default CountWord;