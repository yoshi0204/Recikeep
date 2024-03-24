// src/stories/pages/RecipeDetailPage.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import RecipeDetailPage from 'src/pages/RecipeDetailPage';

export default {
  title: 'Pages/RecipeDetailPage',
  component: RecipeDetailPage,
} as Meta<typeof RecipeDetailPage>;

export const Default: StoryObj<typeof RecipeDetailPage> = {
  render: () => <RecipeDetailPage />,
};
