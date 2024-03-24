import { MemoryRouter } from 'react-router-dom';
import HomePageTemplate from 'src/components/templates/HomePageTemplate';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Templates/HomePageTemplate',
  component: HomePageTemplate,
  decorators: [(Story) => <MemoryRouter>{Story()}</MemoryRouter>],
} as Meta<typeof HomePageTemplate>;

export const Default: StoryObj<typeof HomePageTemplate> = {
  render: () => <HomePageTemplate />,
};
