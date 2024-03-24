import { useState } from 'react';
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
    const recipeData = {
      title,
      description,
      ingredients,
      steps,
      cookingTime,
      servings,
    };
    console.log('送信するレシピデータ:', recipeData);
    // ここでAPIを呼び出し、レシピを保存
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        placeholder="レシピのタイトル"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextareaInput
        placeholder="レシピの説明"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      {/* 他の入力フィールドを追加 */}
      <TextInput
        placeholder="材料"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <TextareaInput
        placeholder="手順"
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
      />
      <TextInput
        placeholder="調理時間"
        value={cookingTime}
        onChange={(e) => setCookingTime(e.target.value)}
      />
      <TextInput
        placeholder="分量"
        value={servings}
        onChange={(e) => setServings(e.target.value)}
      />
      <PrimaryButton type="submit">レシピを投稿</PrimaryButton>
    </form>
  );
};

export default RecipeSubmissionForm;
