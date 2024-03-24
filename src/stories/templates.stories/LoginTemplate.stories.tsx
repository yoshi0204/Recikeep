import { MemoryRouter } from 'react-router-dom';
import LoginTemplate from 'src/components/templates/LoginTemplate';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Templates/LoginTemplate',
  component: LoginTemplate,
  decorators: [(Story) => <MemoryRouter>{<Story />}</MemoryRouter>],
} as Meta<typeof LoginTemplate>;

export const Default: StoryObj<typeof LoginTemplate> = {
  render: () => <LoginTemplate />,
};
