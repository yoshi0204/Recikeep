import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

const FooterMenu: React.FC = () => {
  return (
    <div className="bg-gray-900 footer-menu fixed inset-x-0 bottom-0 shadow-t" style={{ display: 'flex', justifyContent: 'space-around', padding: '1rem', borderTop: '1px solid #ccc' }}>
      <FontAwesomeIcon icon={faHome} size="lg" className="text-gray-600"/>
      <FontAwesomeIcon icon={faPlus} size="lg" className="text-gray-600"/>
      <FontAwesomeIcon icon={faShoppingCart} size="lg" className="text-gray-600"/>
      <FontAwesomeIcon icon={faUser} size="lg" className="text-gray-600"/>
    </div>
  );
};

export default FooterMenu;

