"use client"
import { useState } from "react";
import Image from "next/image";
import color from "../../../public/colorset.png"
import { RiArrowDropDownLine } from 'react-icons/ri';


const ColorChange = ({ onChangeColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(''); 

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
    { label: "Orange", value: "orange" },
    { label: "Pink", value: "pink" },
    { label: "Brown", value: "brown" },
  ];

  const handleChange = (e) => {
    setSelectedColor(e.target.value);
    onChangeColor(e.target.value); // call the onChangeColor prop
  };

  return (
    <div className='relative inline-block text-left'>
      <div
        className='flex w-16 h-8 bg-white border border-gray-300 rounded-md m-3 items-center justify-between px-2 cursor-pointer shadow-sm hover:shadow-md'
        onClick={toggleDropdown}
      >
        <Image src={color} alt="color" width={80} height={20} />
        <RiArrowDropDownLine className='text-gray-700 w-6 h-6' />
      </div>

      {isOpen && (
    <div className='relative inline-block text-left'>
      {/*... */}
      <select
        className='block appearance-none w-17 md:w-17 lg:w-17 max-h-40 bg-white border border-gray-300 rounded-md py-2 px-4 shadow-sm hover:shadow-md focus:outline-none focus:border-blue-500 text-sm md:text-base lg:text-lg'
        onChange={handleChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
)} 


    </div>
  );
}



export default ColorChange;