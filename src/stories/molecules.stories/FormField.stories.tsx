import { SetStateAction, useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import FormField from 'src/components/molecules/FormField';

export default {
  title: 'Components/Molecules/FormField',
  component: FormField,
} as Meta<typeof FormField>;

export const Default: StoryObj<typeof FormField> = {
  render: (args) => {
    const [value, setValue] = useState('');
    return <FormField {...args} value={value} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setValue(e.target.value)} />;
  },
  args: {
    label: 'label',
    id: 'input-id',
    name: 'input-name',
    placeholder: 'プレースホルダー'
  }
};
