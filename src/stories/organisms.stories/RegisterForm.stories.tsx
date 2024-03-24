// RegisterForm.stories.tsx
import { Story, Meta } from '@storybook/react';
import RegisterForm from 'src/components/organisms/RegisterForm';

export default {
  title: 'Components/Organisms/RegisterForm',
  component: RegisterForm,
  // ここで必要に応じてargsを設定できますが、RegisterFormが外部からpropsを受け取らない場合は省略可能です。
} as Meta;

// Template関数を使用して、コンポーネントのインスタンスを作成します。
const Template: Story = (args) => <RegisterForm {...args} />;

export const Default = Template.bind({});
// Defaultストーリーのargsを設定します。RegisterFormが外部からpropsを受け取らない場合、このセクションは省略可能です。
// Default.args = { ここに必要なpropsを設定 };
