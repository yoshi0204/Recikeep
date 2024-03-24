import { MemoryRouter } from 'react-router-dom';
import { Meta, StoryObj } from '@storybook/react';
import LinkAtom from '../../components/atoms/Link';

export default {
  title: 'Components/Atoms/LinkAtom',
  component: LinkAtom,
  decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>],
} as Meta<typeof LinkAtom>;

export const Default: StoryObj<typeof LinkAtom> = {
  args: {
    to: '/path',
    children: 'リンクテキスト',
    className: 'link', 
  },
};
