import { Meta, StoryObj } from '@storybook/react';
import Divider from '../components/atoms/Divider';

export default {
  title: 'Components/Atoms/Divider',
  component: Divider,
} as Meta;

export const Default: StoryObj<typeof Divider> = {
  args: {
    className: 'hr-default',
  },
};

// 必要に応じて他のスタイルバリエーションを追加できます
// 例: カスタムスタイル
// export const Custom: StoryObj<typeof Divider> = {
//   args: {
//     className: 'custom-class',
//   },
// };
