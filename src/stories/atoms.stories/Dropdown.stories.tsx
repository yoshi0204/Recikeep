import { Meta, StoryObj } from '@storybook/react';
import Dropdown from '../../components/atoms/Dropdown';

export default {
  title: 'Components/Atoms/Dropdown',
  component: Dropdown,
} as Meta<typeof Dropdown>;

export const Default: StoryObj<typeof Dropdown> = {
  args: {
    options: ['オプション1', 'オプション2', 'オプション3'],
    selected: 'オプション1',
    onChange: value => console.log(value),
  },
};
