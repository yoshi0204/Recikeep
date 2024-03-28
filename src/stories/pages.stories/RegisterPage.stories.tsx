import { Meta, StoryObj } from '@storybook/react';
import RegisterPage from '/home/mashimashi/Desktop/Recikeep/src/pages/RegisterPage';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Components/Pages/RegisterPage',
  component: RegisterPage,
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>],

} as Meta<typeof RegisterPage>;

export const Default: StoryObj<typeof RegisterPage> = {
  args: {},
};
