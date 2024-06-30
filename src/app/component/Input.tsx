import React from 'react';

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLInputElement>; // Add this line
}

const Input = React.forwardRef(({ value, onChange, style }: InputProps, ref) => {
  return (
    <div className="bg-gray-100">
      <input
        type="text"
        className="w-full h-full outline-none p-4 text-lg md:text-xl lg:text-2xl"
        placeholder="Type here..."
        value={value} // Bind the input value to the passed prop
        onChange={onChange} // Bind the input change event to the passed prop
        style={style} // Apply the style prop directly to the input element
        ref={ref} // Add this line
      />
    </div>
  );
});

export default Input;