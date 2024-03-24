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
          {...args} // 最初にargsを展開
          value={value} // ここでvalueを設定
          onChange={(e) => setValue(e.target.value)} // ここでonChangeを設定
        />
      );
    },
    args: {
      placeholder: 'テキストを入力してください',
    },
  };
  