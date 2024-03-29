import { Meta, StoryObj } from '@storybook/react';
import { SaveRecipeButton, SaveRecipeButtonProps, RecipeDataType } from '/home/mashimashi/Desktop/Recikeep/src/components/molecules/SaveRecipeButton';

export default {
  title: 'Components/Molecules/SaveRecipeButton',
  component: SaveRecipeButton,
} as Meta<typeof SaveRecipeButton>;

export const Default: StoryObj<SaveRecipeButtonProps> = {
  args: {
    onSave: (recipeData: RecipeDataType) => {
      console.log(recipeData);
    },//api後に実装
  },
};
