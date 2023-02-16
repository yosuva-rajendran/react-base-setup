import React, { FC } from 'react';

interface IInput {
  type: 'button' | 'checkbox' | 'email' | 'file' | 'text' | 'image' | 'number' | 'password';
  value?: string;
  name?: string;
  placeholder?: string;
  onChange?: (e: React.BaseSyntheticEvent) => void;
}

const Input: FC<IInput> = ({ type, value, name, placeholder, onChange }) => {
  return (
    <input
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      className="mt-1 px-3 py-2 
      bg-white border shadow-sm border-slate-300
      placeholder-slate-400 focus:outline-none
      focus:border-sky-500 focus:ring-sky-500
      block w-full rounded-md sm:text-sm focus:ring-1"
    />
  );
};

export default Input;
