import { useState } from 'react';
import SaveRecipeButton from '../molecules/SaveRecipeButton';

interface RecipeDataType {
    title: string;
    description: string;
    ingredients: string[];
    steps: string[];
    cookingTime: number;
    servings: number;
    category: string;
    image?: File;
  }
  
  interface RecipeFormProps {
    onSave: (recipeData: RecipeDataType) => void;
  }
  
  const RecipeForm: React.FC<RecipeFormProps> = ({ onSave }) => {
    const [recipeData, setRecipeData] = useState<RecipeDataType>({
      title: '',
      description: '',
      ingredients: [],
      steps: [],
      cookingTime: 0,
      servings: 0,
      category: '',
      image: undefined,
    });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRecipeData({
      ...recipeData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(recipeData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={recipeData.title}
        onChange={handleChange}
      />
      <textarea
        name="description"
        value={recipeData.description}
        onChange={handleChange}
      />
      <SaveRecipeButton onSave={() => onSave(recipeData)} />
    </form>
  );
};

export default RecipeForm;
