// src/components/molecules/NavigationMenu.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationMenu: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:text-gray-300">ホーム</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-300">アバウト</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-gray-300">コンタクト</Link>
        </li>
        {/* 他のナビゲーションリンクを追加 */}
      </ul>
    </nav>
  );
};

export default NavigationMenu;
