// src/components/templates/HomePageTemplate.tsx
import React, { useState } from 'react';
import Tabs from '../molecules/Tabs';
import SearchBar from '../molecules/SearchBar';
import RecipeCardGrid from '../organisms/RecipeCardGrid';
import Footer from '../molecules/FooterMenu';

const HomePageTemplate: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([
    // ここにサンプルレシピデータを追加
    // 例:
    // { recipeId: 1, imageUrl: 'path/to/image1.jpg', title: 'レシピ1', description: '説明1' },
    // { recipeId: 2, imageUrl: 'path/to/image2.jpg', title: 'レシピ2', description: '説明2' },
  ]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const tabs = [
    { label: '日本料理', content: '日本料理のコンテンツ' },
    { label: 'イタリアン', content: 'イタリアンのコンテンツ' },
    // その他のカテゴリに対応するタブを追加
  ];

  return (
    <div>
      <Tabs tabs={tabs} />
      <SearchBar value={searchTerm} onChange={handleSearchChange} placeholder="レシピを検索" />
      <RecipeCardGrid recipes={recipes} />
      <Footer />
    </div>
  );
};

export default HomePageTemplate;
