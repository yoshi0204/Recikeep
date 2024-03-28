import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

interface AddMoreButtonProps {
  onClick: () => void;
}

const AddMoreButton: React.FC<AddMoreButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="add-more-button"
      type="button"
    >
      <FontAwesomeIcon icon={faPlus} className="inline-flex items-center px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
 />
      add
    </button>
  );
};

export default AddMoreButton;
