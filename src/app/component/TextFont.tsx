"use client"
import React, { useState } from "react";

interface TextFontProps {
  inputText: string;
  onChange: (transformedText: string) => void;
}

const TextFont = ({ inputText, onChange }: TextFontProps) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleTextTransform = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.value;
    let transformedText = inputText;

    switch (selectedOption) {
      case "Uppercase":
        transformedText = inputText.toUpperCase();
        break;
      case "Lowercase":
        transformedText = inputText.toLowerCase();
        break;
      case "Capitalize":
        transformedText = inputText
          .split(' ')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join(' ');
        break;
      default:
        transformedText = inputText;
    }

    
    setSelectedOption(selectedOption);
    onChange(transformedText);
  };

  const options = [
    { label: "Uppercase", value: "Uppercase" },
    { label: "Lowercase", value: "Lowercase" },
    { label: "Capitalize", value: "Capitalize" },
  ];

  return (
    <div className="me-12">
      <select
        className="w-full pl-10 pr-4 py-2 text-sm md:text-base bg-white border border-gray-200 rounded-md shadow-lg"
        value={selectedOption}
        onChange={handleTextTransform}
      >
        <option value="">Text Transformation</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TextFont;
