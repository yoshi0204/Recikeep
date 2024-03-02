// src/components/atoms/Label.tsx
import React from 'react';

interface LabelProps {
  text: string;
  htmlFor?: string;
}

const Label: React.FC<LabelProps> = ({ text, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
      {text}
    </label>
  );
};

export default Label;
