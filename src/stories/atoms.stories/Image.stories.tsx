import { Meta, StoryObj } from '@storybook/react';
import Image from '../../components/atoms/Image';

export default {
  title: 'Components/Atoms/Image',
  component: Image,
} as Meta<typeof Image>;

export const Default: StoryObj<typeof Image> = {
  args: {
    src: 'https://via.placeholder.com/150', // 例としてプレースホルダーのURLを使用
    alt: '代替テキスト',
    className: 'image-default',
  },
};

export const Rounded: StoryObj<typeof Image> = {
  args: {
    src: 'https://via.placeholder.com/150',
    alt: '代替テキスト',
    className: 'image-rounded',
  },
};

export const WithBorder: StoryObj<typeof Image> = {
  args: {
    src: 'https://via.placeholder.com/150',
    alt: '代替テキスト',
    className: 'image-border',
  },
};
