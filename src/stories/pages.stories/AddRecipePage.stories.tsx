import { Meta, StoryObj } from '@storybook/react';
import AddRecipePage from 'src/pages/AddRecipePage';

export default {
  title: 'Pages/AddRecipePage',
  component: AddRecipePage,
} as Meta<typeof AddRecipePage>;

export const Default: StoryObj<typeof AddRecipePage> = {
  render: () => <AddRecipePage />,
};
