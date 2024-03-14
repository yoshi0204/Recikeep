// src/components/organisms/SearchBarAndResults.tsx
import React, { useState, useEffect } from 'react';
import SearchBar from '../molecules/SearchBar';
import RecipeList from './RecipeList';

const SearchBarAndResults: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // 検索用のAPIを呼び出す
    const fetchSearchResults = async () => {
      // 検索APIへのリクエスト（例: `/api/search?query=${searchTerm}`）
      // 結果を setSearchResults で状態更新
    };

    if (searchTerm) {
      fetchSearchResults();
    } else {
      setSearchResults([]); // 検索語がなければ結果をクリア
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
