// src/components/organisms/RecipeCardGrid.tsx
import React from 'react';
import RecipeCard from '../molecules/RecipeCard';

interface Recipe {
  recipeId: number;
  imageUrl: string;
  title: string;
  description: string;
}

interface RecipeCardGridProps {
  recipes: Recipe[];
}

const RecipeCardGrid: React.FC<RecipeCardGridProps> = ({ recipes }) => {
  return (
    <div className="recipe-card-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '16px' }}>
      {recipes.map(recipe => (
        <RecipeCard
          key={recipe.recipeId}
          recipeId={recipe.recipeId}
          imageUrl={recipe.imageUrl}
          title={recipe.title}
          description={recipe.description}
        />
      ))}
    </div>
  );
};

export default RecipeCardGrid;
