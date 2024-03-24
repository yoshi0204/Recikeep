import { MemoryRouter } from 'react-router-dom';
import { Meta, StoryObj } from '@storybook/react';
import HomePage from 'src/pages/HomePage';

export default {
  title: 'Pages/HomePage',
  component: HomePage,
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>],

} as Meta<typeof HomePage>;

export const Default: StoryObj<typeof HomePage> = {
  render: () => <HomePage />,
};
