import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import TextInput from '../../components/atoms/TextInput';

export default {
  title: 'Components/Atoms/TextInput',
  component: TextInput,
} as Meta<typeof TextInput>;

export const Default: StoryObj<typeof TextInput> = {
  render: (args) => {
    const [value, setValue] = useState('');

    return (
      <TextInput 
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
