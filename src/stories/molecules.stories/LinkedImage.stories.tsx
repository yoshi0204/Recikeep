import { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import LinkedImage from 'src/components/molecules/LinkedImage';

export default {
  title: 'Components/Molecules/LinkedImage',
  component: LinkedImage,
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>], // MemoryRouterを追加
} as Meta<typeof LinkedImage>;

export const Default: StoryObj<typeof LinkedImage> = {
  args: {
    imageUrl: 'https://via.placeholder.com/150',
    linkTo: '#',
    altText: '画像'
  }
};
