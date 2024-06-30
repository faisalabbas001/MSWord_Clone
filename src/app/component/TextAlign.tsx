import React from 'react';
import { BsTextRight } from "react-icons/bs";
import { BsTextLeft } from "react-icons/bs";
import { BsTextCenter } from "react-icons/bs";

const TextAlign = ({ inputRef, setInputAlign }) => {
  const handleAlignClick = (align) => {
    setInputAlign(align);
    inputRef.current.style.textAlign = align;
  };

  return (
    <div className='relative inline-block text-left'>
      <div
        className='flex  h-9 bg-white border border-gray-300 rounded-md m-3 items-center justify-between px-2 cursor-pointer shadow-sm hover:shadow-md'
      >
        <div className='flex me-25 justify-evenly p-3'>
          <BsTextRight className='m-2' onClick={() => handleAlignClick('right')} />
          <BsTextLeft className='m-2' onClick={() => handleAlignClick('left')} />
          <BsTextCenter className='m-2' onClick={() => handleAlignClick('center')} />
        </div>
      </div>
    </div>
  );
};

export default TextAlign;