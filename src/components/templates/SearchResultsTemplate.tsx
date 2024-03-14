// src/components/templates/SearchResultsTemplate.tsx
import React from 'react';
import SearchBarAndResults from '../organisms/SearchBarAndResults';

const SearchResultsTemplate: React.FC = () => {
  return (
    <div>
      <h1>検索結果</h1>
      <SearchBarAndResults />
    </div>
  );
};

export default SearchResultsTemplate;
