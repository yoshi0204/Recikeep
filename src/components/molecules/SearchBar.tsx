// src/components/molecules/SearchBar.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string; // プレースホルダーはオプショナルなプロパティ
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = "材料で検索" // デフォルト値として「材料で検索」を設定
}) => {
  return (
    <div className="flex items-center border rounded p-2">
      <FontAwesomeIcon icon={faSearch} className="mr-2 text-gray-400" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="flex-grow"
      />
    </div>
  );
};

export default SearchBar;
