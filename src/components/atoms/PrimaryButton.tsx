// src/components/atoms/PrimaryButton.tsx
import React from 'react';
// PrimaryButton.tsx
import '../../styles/PrimaryButton.css';


interface PrimaryButtonProps {
  onClick?: () => void;  // onClickはオプションにする
  type?: "button" | "submit" | "reset";  // ボタンのtype属性を追加
  children: React.ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onClick, type = "button", children }) => {
  return (
    <button
      onClick={onClick}
      type={type} // type属性を設定
      className="primary-button" 
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
