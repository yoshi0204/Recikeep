import { Meta, StoryObj } from '@storybook/react';
import ImageDisplay from '../components/atoms/ImageDisplay';

export default {
  title: 'Components/Atoms/ImageDisplay',
  component: ImageDisplay,
} as Meta<typeof ImageDisplay>;

export const Default: StoryObj<typeof ImageDisplay> = {
  args: {
    src: 'https://via.placeholder.com/150',
    alt: 'デフォルト画像',
    className: 'image-display',
  },
};

export const Rounded: StoryObj<typeof ImageDisplay> = {
  args: {
    src: 'https://via.placeholder.com/150',
    alt: '角丸画像',
    className: 'image-display-rounded',
  },
};

export const Bordered: StoryObj<typeof ImageDisplay> = {
  args: {
    src: 'https://via.placeholder.com/150',
    alt: '枠線付き画像',
    className: 'image-display-bordered',
  },
};
