import { MemoryRouter } from 'react-router-dom';
import { Meta, StoryObj } from '@storybook/react';
import RecipeCard from '@/components/molecules/RecipeCard';

export default {
  title: 'Components/Molecules/RecipeCard',
  component: RecipeCard,
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>],
} as Meta<typeof RecipeCard>;

export const Default: StoryObj<typeof RecipeCard> = {
  args: {
    
    imageUrl: 'https://via.placeholder.com/150',
    title: 'レシピのタイトル',
  }
};
