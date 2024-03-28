import RecipeTabs from 'src/components/organisms/RecipeTabs';

export default {
  title: 'Components/Organisms/RecipeTabs',
  component: RecipeTabs,
};

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
];

const demoSteps = [
  { stepNumber: 1, instruction: "Preheat your oven to 175°C." },
  { stepNumber: 2, instruction: "Grease and flour a pan." },
  { stepNumber: 3, instruction: "Mix flour and sugar in a large bowl." },
  { stepNumber: 4, instruction: "Beat in eggs one at a time." },
  { stepNumber: 5, instruction: "Stir in milk and vanilla extract." },
  { stepNumber: 6, instruction: "Pour batter into prepared pan." },
  { stepNumber: 7, instruction: "Bake for 30 minutes." },
  { stepNumber: 8, instruction: "Allow to cool before slicing." },
];

export const DefaultRecipeTabs = {
  args: {
    ingredients: demoIngredients,
    steps: demoSteps,
  },
};
