import { MemoryRouter } from 'react-router-dom';
import { Meta, StoryObj } from '@storybook/react';
import LoginForm from 'src/components/organisms/LoginForm';

export default {
  title: 'Components/Organisms/LoginForm',
  component: LoginForm,
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>]
} as Meta<typeof LoginForm>;

export const Default: StoryObj<typeof LoginForm> = {};
