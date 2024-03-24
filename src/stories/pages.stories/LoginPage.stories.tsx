import { MemoryRouter } from 'react-router-dom';
import { Meta, StoryObj } from '@storybook/react';
import LoginPage from 'src/pages/LoginPage';

export default {
  title: 'Pages/LoginPage',
  component: LoginPage,
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>],
} as Meta<typeof LoginPage>;

export const Default: StoryObj<typeof LoginPage> = {
  render: () => <LoginPage />,
};
