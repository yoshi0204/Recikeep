import { Meta, StoryObj } from '@storybook/react';
import ImageUploadButton from '../../components/atoms/ImageUploadButton';

export default {
  title: 'Components/Atoms/ImageUploadButton',
  component: ImageUploadButton,
} as Meta<typeof ImageUploadButton>;

export const Default: StoryObj<typeof ImageUploadButton> = {
  args: {
    onImageSelect: (file: File) => console.log(file.name), 
  },
};
