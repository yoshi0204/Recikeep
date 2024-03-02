// src/components/atoms/AddMoreButton.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

interface AddMoreButtonProps {
  onClick: () => void;
}

const AddMoreButton: React.FC<AddMoreButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded focus:outline-none focus:shadow-outline"
      type="button"
    >
      <FontAwesomeIcon icon={faPlus} className="mr-2" />
      もっと追加
    </button>
  );
};

export default AddMoreButton;
