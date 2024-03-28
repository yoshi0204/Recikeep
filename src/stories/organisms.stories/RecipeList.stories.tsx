import { MemoryRouter } from 'react-router-dom';
import { Meta, StoryObj } from '@storybook/react';
import RecipeList from '@/components/organisms/RecipeList';

const sampleRecipes = [
  { recipeId: 1, imageUrl: 'https://via.placeholder.com/150', title: 'レシピ1', description: '説明1' },
];

export default {
  title: 'Components/Organisms/RecipeList',
  component: RecipeList,
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>]
} as Meta<typeof RecipeList>;

export const Default: StoryObj<typeof RecipeList> = {
  args: {
    recipes: sampleRecipes,
  },
};
