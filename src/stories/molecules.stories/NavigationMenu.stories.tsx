import { MemoryRouter } from 'react-router-dom';
import { Meta, StoryObj } from '@storybook/react';
import NavigationMenu from 'src/components/molecules/NavigationMenu';

export default {
  title: 'Components/Molecules/NavigationMenu',
  component: NavigationMenu,
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>],
} as Meta<typeof NavigationMenu>;

export const Default: StoryObj<typeof NavigationMenu> = {};
