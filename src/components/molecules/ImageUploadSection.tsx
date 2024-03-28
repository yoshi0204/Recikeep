import {useState} from 'react';
import Image from '../atoms/Image';
import ImageUploadButton from '../atoms/ImageUploadButton';

const ImageUploadSection: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const handleImageChange = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageSrc(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="image-upload-section">
      <ImageUploadButton onImageSelect={handleImageChange} />
      {imageSrc && <Image src={imageSrc} alt="Uploaded" />}
    </div>
  );
};

export default ImageUploadSection;
