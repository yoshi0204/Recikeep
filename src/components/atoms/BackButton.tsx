import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); 
  };

  return (
    <button
      onClick={goBack}
      className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-2xl hover:bg-gray-300"
    >
      <FontAwesomeIcon icon={faArrowLeft} />
    </button>
  );
};

export default BackButton;
