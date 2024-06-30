// Clear.js
import React from 'react';

const Clear = ({ onClear }) => {
  return (
    <div className='relative inline-block text-left'>
      <div
        className='flex  mb-6 h-9 bg-white border border-gray-300 rounded-md m-3 items-center justify-between px-2 cursor-pointer shadow-sm hover:shadow-md'
      >
        <button onClick={onClear}>Clear</button>
      </div>
    </div>
  );
};

export default Clear;