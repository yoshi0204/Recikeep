import { MemoryRouter } from 'react-router-dom';
import { Meta, StoryObj } from '@storybook/react';
import NotFoundPage from 'src/pages/Page404';

export default {
  title: 'Pages/NotFoundPage',
  component: NotFoundPage,
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>],

} as Meta<typeof NotFoundPage>;

export const Default: StoryObj<typeof NotFoundPage> = {
  render: () => <NotFoundPage />,
};
