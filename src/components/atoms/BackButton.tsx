// src/components/atoms/BackButton.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // ブラウザの履歴を一つ戻る。
  };

  return (
    <button
      onClick={goBack}
      className="back-button"
    >
      <FontAwesomeIcon icon={faArrowLeft} />
      <span>go back</span>
    </button>
  );
};

export default BackButton;
