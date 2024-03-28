import { SetStateAction, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import SearchBar from '@/components/molecules/SearchBar';

export default {
  title: 'Components/Molecules/SearchBar',
  component: SearchBar,
} as Meta<typeof SearchBar>;

export const Default: StoryObj<typeof SearchBar> = {
  render: (args) => {
    const [value, setValue] = useState('');
    return <SearchBar {...args} value={value} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setValue(e.target.value)} />;
  }
};
