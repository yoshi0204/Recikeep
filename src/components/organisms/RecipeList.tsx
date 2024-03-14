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
            recipeId={recipe.recipeId}
            imageUrl={recipe.imageUrl}
            title={recipe.title}
            description={recipe.description}
          />
          {index < recipes.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default RecipeList;
