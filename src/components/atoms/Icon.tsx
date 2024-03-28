import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface IconProps {
  icon: IconDefinition; 
  className?: string;    
}

const Icon: React.FC<IconProps> = ({ icon, className }) => {
  return <FontAwesomeIcon icon={icon} className={className || 'text-gray-500'} />;
};

export default Icon;


