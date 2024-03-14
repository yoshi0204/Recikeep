// src/components/atoms/ImageDisplay.tsx
import React from 'react';

interface ImageDisplayProps {
  src: string;
  alt?: string;
  className?: string;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ src, alt, className }) => {
  return <img src={src} alt={alt || 'image'} className={className || 'Image-display'} />;
};

export default ImageDisplay;
