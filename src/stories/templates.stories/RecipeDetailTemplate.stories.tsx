import RecipeDetailTemplate from 'src/components/templates/RecipeDetailTemplate';

// モックのレシピデータ
const RecipeData = {
  imageUrl: 'URL',
  title: 'Recipe Title',
  description: 'Recipe Description',
  cookingTime: 30,
  servings: 4,
  ingredients: [
    { name: 'Ingredient 1', amount: '1 cup' },
    { name: 'Ingredient 2', amount: '2 cups' },
    // 他の食材
  ],
  steps: [
    { stepNumber: 1, instruction: 'Step 1: Instruction' },
    { stepNumber: 2, instruction: 'Step 2: Instruction' },

  ]
};

export default {
  title: 'Components/Templates/RecipeDetailTemplate',
  component: RecipeDetailTemplate,
};

export const Default = () => <RecipeDetailTemplate recipeData={RecipeData} />;
