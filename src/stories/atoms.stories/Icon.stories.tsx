import { Meta, StoryObj } from '@storybook/react';
import Icon from '../../components/atoms/Icon';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'; // アイコンの例

export default {
  title: 'Components/Atoms/Icon',
  component: Icon,
} as Meta<typeof Icon>;

export const Default: StoryObj<typeof Icon> = {
  args: {
    icon: faCoffee,
    className: 'icon',
  },
};

export const Large: StoryObj<typeof Icon> = {
  args: {
    icon: faCoffee,
    className: 'icon icon-large',
  },
};

export const Blue: StoryObj<typeof Icon> = {
  args: {
    icon: faCoffee,
    className: 'icon icon-blue',
  },
};
