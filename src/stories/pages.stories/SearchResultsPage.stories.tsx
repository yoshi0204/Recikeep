// src/stories/pages/SearchResultsPage.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import SearchResultsPage from 'src/pages/SearchResultsPage';

export default {
  title: 'Pages/SearchResultsPage',
  component: SearchResultsPage,
} as Meta<typeof SearchResultsPage>;

export const Default: StoryObj<typeof SearchResultsPage> = {
  render: () => <SearchResultsPage />,
};
