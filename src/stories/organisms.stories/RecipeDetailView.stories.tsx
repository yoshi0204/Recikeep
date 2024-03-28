import { Meta, StoryObj } from '@storybook/react';
import RecipeDetailView from '@/components/organisms/RecipeDetailView';

export default {
  title: 'Components/Organisms/RecipeDetailView',
  component: RecipeDetailView,
} as Meta<typeof RecipeDetailView>;

export const Default: StoryObj<typeof RecipeDetailView> = {
  args: {
    imageUrl: 'https://via.placeholder.com/150',
    title: 'レシピタイトル',
    description: 'レシピの説明',
    cookingTime: 30,
    servings: 4,
    ingredients: [{ name: '材料1', amount: '1個' }],
    steps: [{ stepNumber: 1, instruction: '手順1' }],
  },
};
