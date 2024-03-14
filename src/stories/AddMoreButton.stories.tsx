import { Meta, StoryObj } from '@storybook/react';
import AddMoreButton from '../components/atoms/AddMoreButton';

// Storybookのメタデータ設定
const meta: Meta<typeof AddMoreButton> = {
  title: 'Components/Atoms/AddMoreButton', // Storybookのサイドバーに表示されるタイトル
  component: AddMoreButton, // どのコンポーネントのストーリーかを指定
};
export default meta;

// デフォルトのストーリー
export const Default: StoryObj<typeof AddMoreButton> = {
  // ストーリーの引数（props）
  args: {
    // この例ではonClickは空の関数で設定していますが、
    // 実際の実装では適切な関数を設定する必要があります。
    onClick: () => {}
  },
};

// 他のバリエーションを追加する場合は、以下のように別のストーリーを定義できます
// 例: Disabled 状態のストーリー
// export const Disabled: StoryObj<typeof AddMoreButton> = {
//   args: {
//     onClick: () => {},
//     disabled: true,
//   },
// };
