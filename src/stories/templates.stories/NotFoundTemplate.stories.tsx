import { MemoryRouter } from 'react-router-dom';
import NotFoundTemplate from 'src/components/templates/NotFoundTemplate';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Templates/NotFoundTemplate',
  component: NotFoundTemplate,
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>],
} as Meta<typeof NotFoundTemplate>;

export const Default: StoryObj<typeof NotFoundTemplate> = {
  render: () => <NotFoundTemplate />,
};
