// src/components/organisms/RecipeList.tsx
import React from 'react';
import RecipeCard from '../molecules/RecipeCard';
import Divider from '../atoms/Divider';

interface Recipe {
  recipeId: number;
  imageUrl: string;
  title: string;
  description: string;
}

interface RecipeListProps {
  recipes: Recipe[];
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe, index) => (
        <React.Fragment key={recipe.recipeId}>
          <RecipeCard
            imageUrl={recipe.imageUrl}
            title={recipe.title}
          />
          {index < recipes.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default RecipeList;
