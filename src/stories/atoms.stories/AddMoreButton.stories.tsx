import { Meta, StoryObj } from '@storybook/react';
import AddMoreButton from 'src/components/atoms/AddMoreButton';


const meta: Meta<typeof AddMoreButton> = {
  title: 'Components/Atoms/AddMoreButton', 
  component: AddMoreButton, 
};
export default meta;


export const Default: StoryObj<typeof AddMoreButton> = {
  
  args: {
    
    // 実際の実装では適切な関数を設定
    onClick: () => {}
  },
};

