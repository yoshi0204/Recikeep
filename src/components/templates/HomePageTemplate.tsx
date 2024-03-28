// src/components/templates/HomePageTemplate.tsx
import { useState } from 'react';
import Tabs from '../molecules/Tabs';
import SearchBar from '../molecules/SearchBar';
import RecipeCardGrid from '../organisms/RecipeCardGrid';
import RecentlyViewedGrid from '../molecules/RecentlyViewedGrid';
import Footer from '../molecules/FooterMenu';

const HomePageTemplate: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const tabsData = [
    { label: 'Recommended', content: 'Recommended dishes content' },
    { label: 'New Recipes', content: 'Newly added recipes content' },
    

  ];
  const recentlyViewedRecipes = [
    { recipeId: 1, imageUrl: 'public/images/29017962_l.jpg', title: 'Mediterranean Salad' },
    { recipeId: 2, imageUrl: 'public/images/chigyu458A7197.jpg', title: 'Mediterranean Salad' },
    { recipeId: 3, imageUrl: 'public/images/IK21317939.jpg', title: 'Mediterranean Salad' },
  ];
  const sampleRecipes = [
   
    { recipeId: 1, imageUrl: 'public/images/29017962_l.jpg', title: 'Mediterranean Salad' },
    { recipeId: 2, imageUrl: 'public/images/29017962_l.jpg', title: 'Mediterranean Salad' },
    { recipeId: 3, imageUrl: 'public/images/29017962_l.jpg', title: 'Mediterranean Salad' },
    { recipeId: 4, imageUrl: 'public/images/IK21317939.jpg', title: 'Mediterranean Salad' },
    { recipeId: 5, imageUrl: 'public/images/29017962_l.jpg', title: 'Mediterranean Salad' },
    { recipeId: 6, imageUrl: 'public/images/29017962_l.jpg', title: 'Mediterranean Salad' },
    { recipeId: 7, imageUrl: 'public/images/29017962_l.jpg', title: 'Mediterranean Salad' },
    { recipeId: 8, imageUrl: 'public/images/chigyu458A7197.jpg', title: 'Mediterranean Salad' },
    { recipeId: 9, imageUrl: 'public/images/29017962_l.jpg', title: 'Mediterranean Salad' },
    { recipeId: 10, imageUrl: 'public/images/29017962_l.jpg', title: 'Mediterranean Salad' },
  ];//デモデータ

  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="bg-gray-800">
       <RecentlyViewedGrid recipes={recentlyViewedRecipes} />
      <SearchBar value={searchTerm} onChange={handleSearchChange} placeholder="search with ingredients" />
      <Tabs tabs={tabsData} />
      <RecipeCardGrid recipes={sampleRecipes} />
      <Footer />
    </div>
  );
};

export default HomePageTemplate;