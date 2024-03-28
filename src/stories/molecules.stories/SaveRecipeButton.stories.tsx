import { Meta, StoryObj } from '@storybook/react';
import SaveRecipeButton from '@/components/molecules/SaveRecipeButton';

export default {
  title: 'Components/Molecules/SaveRecipeButton',
  component: SaveRecipeButton,
} as Meta<typeof SaveRecipeButton>;

export const Default: StoryObj<typeof SaveRecipeButton> = {
  render: (args) => (
    <SaveRecipeButton {...args} onSave={(recipeData: any) => console.log(recipeData)} />
  ),
};
