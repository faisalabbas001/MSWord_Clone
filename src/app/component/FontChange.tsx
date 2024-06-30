"use client"
import { useState } from "react";
import Input from "./Input";

const FontChange = ({ onChange }) => {
  const [fontsize, setFontsize] = useState(16);

  const handleFontSizeChange = (e) => {
    setFontsize(e.target.value.replace("px", ""));
    onChange(e.target.value); // call the onChange prop
  };

  const options = [
    { label: "2px", value: "2" },
    { label: "5px", value: "5" },
    { label: "7px", value: "7" },
    { label: "10px", value: "10" },
    { label: "13px", value: "13" },
    { label: "16px", value: "16" },
    { label: "18px", value: "18" },
    { label: "23px", value: "23" },
    { label: "26px", value: "26" },
    { label: "27px", value: "27" },
    { label: "29px", value: "29" },
    { label: "56px", value: "56" },
    { label: "78px", value: "78" },
    { label: "100px", value: "100" },
  ];

  return (
    <div className="me-12">
     <select
  className='block appearance-none w-17 md:w-17 lg:w-17 max-h-40 bg-white border border-gray-300 rounded-md py-2 px-4 shadow-sm hover:shadow-md focus:outline-none focus:border-blue-500 text-sm md:text-base lg:text-lg'
  value={fontsize.toString()}
  onChange={handleFontSizeChange}
>
<option >Font Size</option>
  {options.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ))}
</select>
    </div>
  );
};

export default FontChange;