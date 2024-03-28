import { Meta, StoryObj } from '@storybook/react';
import RecipeForm from '@/components/organisms/RecipeForm';

export default {
  title: 'Components/Organisms/RecipeForm',
  component: RecipeForm,
} as Meta<typeof RecipeForm>;

export const Default: StoryObj<typeof RecipeForm> = {
  render: (args) => (
    <RecipeForm {...args} onSave={(data) => console.log(data)} />
  ),
};
