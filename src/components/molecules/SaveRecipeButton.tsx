// SaveRecipeButton.tsx
import React from 'react';

export interface RecipeDataType {
  title: string;
  description: string;
  ingredients: string[];
  steps: string[];
  cookingTime: number;
  servings: number;
  category: string;
  image?: File;
}

export interface SaveRecipeButtonProps {
  onSave: (recipeData: RecipeDataType) => void;
}

export const SaveRecipeButton: React.FC<SaveRecipeButtonProps> = ({ onSave }) => {
  // デモ用のダミーデータ、実際には親コンポーネントまたはフォームからデータが渡される想定
  return (
    <button onClick={() => onSave({
      title: 'Example Title',
      description: 'Example Description',
      ingredients: ['Ingredient 1', 'Ingredient 2'],
      steps: ['Step 1', 'Step 2'],
      cookingTime: 45,
      servings: 4,
      category: 'Example Category',
      // image: ここでは省略
    })}>
      Save Recipe
    </button>
  );
};
