import { MemoryRouter as Router } from 'react-router-dom';
import BackButton from "src/components/atoms/BackButton";
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Atoms/BackButton',
  component: BackButton,
  decorators: [(Story) => <Router><Story /></Router>],
} as Meta<typeof BackButton>;

export const Default: StoryObj<typeof BackButton> = {
  // ここで必要なプロパティを追加できます
  // 例:
  // args: { ... },
};
