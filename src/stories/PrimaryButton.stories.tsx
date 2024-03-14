import { Meta, StoryObj } from '@storybook/react';
import PrimaryButton from '../components/atoms/PrimaryButton';

const meta: Meta<typeof PrimaryButton> = {
  title: 'Components/Atoms/PrimaryButton',
  component: PrimaryButton,
};
export default meta;

export const Default: StoryObj<typeof PrimaryButton> = {
  args: {
    children: 'ボタン',
  },
};
