// src/components/atoms/BackButton.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // ブラウザの履歴を一つ戻ります。
  };

  return (
    <button
      onClick={goBack}
      className="flex items-center px-4 py-2 space-x-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
    >
      <FontAwesomeIcon icon={faArrowLeft} />
      <span>戻る</span>
    </button>
  );
};

export default BackButton;
