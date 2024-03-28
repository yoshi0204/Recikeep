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

interface SaveRecipeButtonProps {
  onSave: (recipeData: RecipeDataType) => void; 
}

const SaveRecipeButton: React.FC<SaveRecipeButtonProps> = ({ onSave }) => {
  return (
    <button onClick={() => onSave({
      title: 'Recipe Title',
      description: 'Recipe Description',
      ingredients: ['Ingredient 1', 'Ingredient 2'],
      steps: ['Step 1', 'Step 2'],
      cookingTime: 30,
      servings: 4,
      category: 'Japanese Cuisine',
     // image: ここで画像データを渡す。後に実装
    })}>
      Save
    </button>
  );
};

export default SaveRecipeButton;
