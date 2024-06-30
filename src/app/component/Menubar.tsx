"use client"
import { useState,useRef } from "react";

import { BiBold } from "react-icons/bi";
import { RxFontItalic, RxUnderline } from "react-icons/rx";
// ... other imports ...
import DropdownMenu from "./DropdownMenu";
import ColorChange from "./ColorChange";
import FontChange from "./FontChange";
import TextFont from "./TextFont";
import TextAlign from "./TextAlign";
import Clear from "./Clear";
import CountLetter from "./CountLetter";
import CountWord from "./CountWord";
import Input from "./Input";


const Menubar = () => {
  const inputRef = useRef(null);
  const [inputAlign, setInputAlign] = useState('left');

  const [selectedColor, setSelectedColor] = useState(""); 
  const [selectedFont, setSelectedFont] = useState(""); 
  const [fontSize, setFontSize] = useState(16); 
  const [textfont, setTextFont] = useState("");
  const [fontFamily, setFontFamily] = useState("");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const handleFontChange = (font: string) => {
    setSelectedFont(font);
    setFontSize(parseInt(font, 10));
  };

  const handleTextChange = (text: string) => {
    setTextFont(text);
  };

  const handleFontFamilyChange = (fontFamily: string) => {
    setFontFamily(fontFamily);
  };

  const handleBoldClick = (bold) => {
    setIsBold(bold)
  };
  
  const handleItalicClick = (itelic) => {
    setIsItalic(itelic)
  };
  
  const handleUnderlineClick = (underline) => {
    setIsUnderline(underline)
  };


  const handleClear = () => {
    setTextFont('')
  };


  const handleCountLetters = () => {
    const count = inputValue.length;
    setTextFont(count);
  };
  
 
  return (
    <div className="bg-neutral-300 h-30 rounded-md">
      <div className="h-21 flex items-center text-3xl">
        {/* First set */}
        <div className="flex items-center w-auto h-14 bg-white m-2 md:flex-wrap">
          <BiBold
            className="bg-black text-white cursor-pointer rounded-md m-1 w-14 h-8 md:w-10 md:h-6"
            onClick={handleBoldClick}
          />
          <RxFontItalic
            className="bg-black text-white cursor-pointer rounded-md m-1 w-12 h-8 md:w-10 md:h-6"
            onClick={handleItalicClick}
          />
          <RxUnderline
            className="text-2xl md:text-xl cursor-pointer"
            onClick={handleUnderlineClick}
          />
        </div>
  
        {/* Second set */}
        <div className="flex items-center flex-wrap md:flex-nowrap">
          <DropdownMenu className="md:mr-2" onChange={handleFontFamilyChange} />
          <ColorChange className="md:mr-2" onChangeColor={handleColorChange} />
          <FontChange className="md:mr-2" onChange={handleFontChange} />
          <TextFont inputText={textfont} onChange={handleTextChange} />
          <TextAlign  inputRef={inputRef} setInputAlign={setInputAlign} />
        </div>
      </div>
      <div className="flex flex-wrap md:flex-nowrap">
        <Clear className="md:mr-2" onClear={handleClear} />
        <CountLetter className="md:mr-2" inputValue={textfont} />
        <CountWord className="md:mr-2" text={textfont} />
      </div>
      <Input
  value={textfont}
  ref={inputRef}

  onChange={(e) => {
    setTextFont(e.target.value);
  
  }}
  style={{
    color: selectedColor,
    fontSize: `${fontSize}px`,
    fontFamily: fontFamily,
    textAlign: inputAlign,
    cssText: `
      ${isBold? 'font-weight: bold;' : ''}
      ${isItalic? 'font-style: italic;' : ''}
      ${isUnderline? 'text-decoration: underline;' : ''}
    `,
  }}
/>
    </div>
  );
};

export default Menubar;