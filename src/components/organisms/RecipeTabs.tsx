import Tabs from '../molecules/Tabs';
import IngredientsList from '../molecules/IngredientsList';
import ProcessList from '../molecules/ProcessList';

interface Ingredient {
  name: string;
  amount: string;
}

interface Step {
  stepNumber: number;
  instruction: string;
}

interface RecipeTabsProps {
  ingredients: Ingredient[];
  steps: Step[];
}

const RecipeTabs: React.FC<RecipeTabsProps> = ({ ingredients, steps }) => {
  const tabs = [
    {
      label: 'Ingredients',
      content: <IngredientsList ingredients={ingredients} />,
    },
    {
      label: 'Process',
      content: <ProcessList steps={steps} />,
    },
  ];

  return (
    <Tabs tabs={tabs} />
  );
};

export default RecipeTabs;
