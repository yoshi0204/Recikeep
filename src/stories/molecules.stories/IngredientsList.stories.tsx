import IngredientsList from 'src/components/molecules/IngredientsList';

const demoIngredients = [
    { name: "All-purpose flour", amount: "2 cups" },
    { name: "Granulated sugar", amount: "1 cup" },
    { name: "Butter", amount: "1/2 cup" },
    { name: "Eggs", amount: "2" },
    { name: "Baking powder", amount: "2 teaspoons" },
    { name: "Salt", amount: "1/2 teaspoon" },
    { name: "Milk", amount: "1 cup" },
    { name: "Vanilla extract", amount: "1 teaspoon" },
    { name: "Ground cinnamon", amount: "1/2 teaspoon" },
    { name: "Powdered sugar", amount: "for dusting" },
  ];//デモデータ
  
export default {
  title: 'Components/Molecules/IngredientsList',
  component: IngredientsList,
};

export const Default = {
  args: {
    ingredients: demoIngredients,
  },
};
