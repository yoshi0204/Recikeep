// src/components/molecules/RecentlyViewedGrid.stories.tsx
import RecentlyViewedGrid from 'src/components/molecules/RecentlyViewedGrid';

// 仮の画像URLとタイトル
const recipes = [
  {
    id: 1,
    imageUrl: 'path/to/your/image1.jpg',
    title: 'Avocado Salad',
    // 他のプロパティ...
  },
  {
    id: 2,
    imageUrl: 'path/to/your/image2.jpg',
    title: 'Tomato Pasta',
    // 他のプロパティ...
  },
  // 他のレシピデータ...
];

export default {
  title: 'Components/Molecules/RecentlyViewedGrid',
  component: RecentlyViewedGrid,
};

export const Default = {
  args: {
    recipes,
  },
};