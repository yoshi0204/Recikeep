import { Meta, StoryObj } from '@storybook/react';
import { SaveRecipeButton, SaveRecipeButtonProps } from 'src/components/molecules/SaveRecipeButton'; // 相対パスに注意してください

export default {
  title: 'Components/Molecules/SaveRecipeButton',
  component: SaveRecipeButton,
} as Meta<typeof SaveRecipeButton>;

export const Default: StoryObj<SaveRecipeButtonProps> = {
  args: {
    onSave: (recipeData) => {
      console.log('Saved recipe data:', recipeData);
    },
  },
};
