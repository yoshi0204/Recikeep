// src/components/atoms/ImageUploadButton.tsx
import React from 'react';

interface ImageUploadButtonProps {
  onImageSelect: (file: File) => void;
}

const ImageUploadButton: React.FC<ImageUploadButtonProps> = ({ onImageSelect }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      onImageSelect(file);
    }
  };

  return (
    <label className="block">
      <span className="sr-only">写真を追加</span>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="file:cursor-pointer file:rounded file:border-0 file:bg-blue-500 file:text-white"
      />
    </label>
  );
};

export default ImageUploadButton;
