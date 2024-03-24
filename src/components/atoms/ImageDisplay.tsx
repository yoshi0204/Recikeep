interface ImageDisplayProps {
  src: string;
  alt?: string;
  className?: string;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ src, alt, className }) => {
  return <img src={src} alt={alt || 'image'} className={className}/>;
};

export default ImageDisplay;