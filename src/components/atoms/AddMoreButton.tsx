// src/components/atoms/AddMoreButton.tsx
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
      <FontAwesomeIcon icon={faPlus} className="mr-2" />
      add
    </button>
  );
};

export default AddMoreButton;