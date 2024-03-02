// src/components/atoms/TextareaInput.tsx
import React from 'react';

interface TextareaInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

const TextareaInput: React.FC<TextareaInputProps> = ({ value, onChange, placeholder }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border rounded p-2 w-full"
      rows={4}
    />
  );
};

export default TextareaInput;
