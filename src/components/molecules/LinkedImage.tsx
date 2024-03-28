import ImageDisplay from '../atoms/ImageDisplay';
import Link from '../atoms/Link';

interface LinkedImageProps {
  imageUrl: string;
  linkTo: string;
  altText?: string;
}

const LinkedImage: React.FC<LinkedImageProps> = ({ imageUrl, linkTo, altText }) => {
  return (
    <Link to={linkTo}>
      <ImageDisplay src={imageUrl} alt={altText} />
    </Link>
  );
};

export default LinkedImage;
