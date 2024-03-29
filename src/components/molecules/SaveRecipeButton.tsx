
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
  const dummyRecipeData: RecipeDataType = {
    title: 'Recipe Title',
    description: 'Recipe Description',
    ingredients: ['Ingredient 1', 'Ingredient 2'],
    steps: ['Step 1', 'Step 2'],
    cookingTime: 30,
    servings: 4,
    category: 'Japanese Cuisine',
  };

  return (
    <button onClick={() => onSave(dummyRecipeData)}>
      Save Recipe
    </button>
  );
};
