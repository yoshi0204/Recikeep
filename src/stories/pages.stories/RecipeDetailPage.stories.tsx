// src/stories/pages/RecipeDetailPage.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import RecipeDetailPage from '@/pages/RecipeDetailPage';

export default {
  title: 'Pages/RecipeDetailPage',
  component: RecipeDetailPage,
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>],

} as Meta<typeof RecipeDetailPage>;

export const Default: StoryObj<typeof RecipeDetailPage> = {
  render: () => <RecipeDetailPage />,
};
