// DropdownMenu.tsx
"use client"
import React, { useState } from "react";

interface DropdownMenuProps {
  onChange: (fontFamily: string) => void;
}

const DropdownMenu = ({ onChange }: DropdownMenuProps) => {
  const [selectedFontFamily, setSelectedFontFamily] = useState("");

  const handleFamilyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedFontFamily(selectedValue);
    onChange(selectedValue); // call the onChange prop function
  };

  const options = [
    { label: "Times New Roman", value: "Times New Roman" },
    { label: "Arial", value: "Arial" },
    { label: "Calibri", value: "Calibri" },
    { label: "Brush Script MT", value: "Brush Script MT" },
  ];

  return (
    <div className="me-12">
      <select onChange={handleFamilyChange}   className="w-full pl-10 pr-4 py-2 text-sm md:text-base bg-white border border-gray-200 rounded-md shadow-lg">
        
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownMenu;