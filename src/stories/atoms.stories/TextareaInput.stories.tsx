import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import TextareaInput from '../../components/atoms/TextareaInput';

export default {
  title: 'Components/Atoms/TextareaInput',
  component: TextareaInput,
} as Meta<typeof TextareaInput>;

export const Default: StoryObj<typeof TextareaInput> = {
    render: (args) => {
      const [value, setValue] = useState('');
  
      return (
        <TextareaInput 
          {...args} 
          value={value} 
          onChange={(e) => setValue(e.target.value)} 
        />
      );
    },
    args: {
      placeholder: 'テキストを入力してください',
    },
  };
  