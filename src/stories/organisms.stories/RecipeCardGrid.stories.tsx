import { MemoryRouter } from 'react-router-dom';
import { Meta, StoryObj } from '@storybook/react';
import RecipeCardGrid from 'src/components/organisms/RecipeCardGrid';

const sampleRecipes = [
  { recipeId: 1, imageUrl: 'https://via.placeholder.com/150', title: 'レシピ1', description: '説明1' },
  // 他のサンプルレシピ
];

export default {
  title: 'Components/Organisms/RecipeCardGrid',
  component: RecipeCardGrid,
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>]
} as Meta<typeof RecipeCardGrid>;

export const Default: StoryObj<typeof RecipeCardGrid> = {
  args: {
    recipes: sampleRecipes,
  },
};
