// src/components/molecules/SearchBar.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string; // プレースホルダーはオプショナルなプロパティです。
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = "Search for recipes" // 提供された画像のプレースホルダーのテキストです。
}) => {
  return (
    <div className="flex items-center border-2 border-gray-600 rounded-full py-4 px-4 mx-12 bg-black">
      <FontAwesomeIcon icon={faSearch} className="text-gray-500 mr-2" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="flex-grow bg-black text-white placeholder-gray-500 focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
