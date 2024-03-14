// src/components/molecules/FooterMenu.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

const FooterMenu: React.FC = () => {
  return (
    <div className="footer-menu" style={{ display: 'flex', justifyContent: 'space-around' }}>
      <FontAwesomeIcon icon={faHome} />
      <FontAwesomeIcon icon={faPlus} />
      <FontAwesomeIcon icon={faShoppingCart} />
      <FontAwesomeIcon icon={faUser} />
    </div>
  );
};

export default FooterMenu;
