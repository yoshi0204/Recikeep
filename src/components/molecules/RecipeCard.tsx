// src/components/molecules/RecipeCard.tsx
import React from 'react';
import ImageDisplay from '../atoms/ImageDisplay';
import Link from '../atoms/Link';

interface RecipeCardProps {
  recipeId: number;
  imageUrl: string;
  title: string;
  description: string;
  // 他に必要なプロパティがあれば追加
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  recipeId,
  imageUrl,
  title,
  description,
}) => {
  return (
    <div className="recipe-card">
      <Link to={`/recipe/${recipeId}`}>
        <ImageDisplay src={imageUrl} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </Link>
    </div>
  );
};

export default RecipeCard;
