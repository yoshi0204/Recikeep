import { Meta, StoryObj } from '@storybook/react';
import Label from '../../components/atoms/Label';

export default {
  title: 'Components/Atoms/Label',
  component: Label,
} as Meta<typeof Label>;

export const Default: StoryObj<typeof Label> = {
  args: {
    text: 'ラベルテキスト',
    htmlFor: 'inputId',
  },
};
