import { useState } from 'react';
import RecipeForm from '../organisms/RecipeForm';
import ImageUploadSection from '../molecules/ImageUploadSection';
import { SaveRecipeButton } from '../molecules/SaveRecipeButton';
import FooterMenu from '../molecules/FooterMenu';
import Dropdown from '../atoms/Dropdown';

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

const AddRecipeTemplate = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Japanese Cuisine");
  const [recipeData, setRecipeData] = useState<RecipeDataType>({ title: '', description: '', ingredients: [], steps: [], cookingTime: 0, servings: 0, category: selectedCategory, image: undefined });

  const handleSaveRecipe = (recipeData: RecipeDataType) => {
    console.log(recipeData);
  };

  const categories = ["Japanese Cuisine", "Western Cuisine", "Chinese Cuisine", "Italian Cuisine", "Others"];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Add Recipe</h2>
      <Dropdown options={categories} selected={selectedCategory} onChange={setSelectedCategory} />
      <ImageUploadSection />
      <RecipeForm onSave={setRecipeData} />
      <SaveRecipeButton onSave={() => handleSaveRecipe(recipeData)} />
      <FooterMenu />
    </div>
  );
};

export default AddRecipeTemplate;
