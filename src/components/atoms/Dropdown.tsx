// src/components/atoms/Dropdown.tsx
import React from 'react';

interface DropdownProps {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, selected, onChange }) => {
  return (
    <select 
      value={selected} 
      onChange={(e) => onChange(e.target.value)}
      className="border rounded p-2"
    >
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  );
};

export default Dropdown;
