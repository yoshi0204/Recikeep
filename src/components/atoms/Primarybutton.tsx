// src/components/atoms/PrimaryButton.tsx
import React from 'react';

interface PrimaryButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
