// src/components/organisms/RecipeSubmissionForm.tsx
import React, { useState } from 'react';
import TextInput from '../atoms/TextInput';
import TextareaInput from '../atoms/TextareaInput';
import PrimaryButton from '../atoms/PrimaryButton';

const RecipeSubmissionForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [servings, setServings] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // レシピデータを準備
    const recipeData = {
      title,
      description,
      ingredients,
      steps,
      cookingTime,
      servings,
    };

    // ここでAPIを呼び出し、レシピを保存
    // 例: await saveRecipe(recipeData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* 各種フォーム要素 */}
      <PrimaryButton type="submit">レシピを投稿</PrimaryButton>
    </form>
  );
};

export default RecipeSubmissionForm;
