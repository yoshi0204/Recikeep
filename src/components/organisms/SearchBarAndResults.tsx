import { useState, useEffect } from 'react';
import SearchBar from '../molecules/SearchBar';
import RecipeList from './RecipeList';

const SearchBarAndResults: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    //検索用のapiを後に実装
    const fetchSearchResults = async () => {
      // 検索APIへのリクエスト
      
    };

    if (searchTerm) {
      fetchSearchResults();
    } else {
      setSearchResults([]); 
    }
  }, [searchTerm]);

  return (
    <div>
      <SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <RecipeList recipes={searchResults} />
    </div>
  );
};

export default SearchBarAndResults;
