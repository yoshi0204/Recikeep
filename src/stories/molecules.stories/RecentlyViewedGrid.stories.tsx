import RecentlyViewedGrid from '@/components/molecules/RecentlyViewedGrid';

const recipes = [
  {
    id: 1,
    imageUrl: 'path/to/your/image1.jpg',
    title: 'Avocado Salad',
    // 他のプロパティ
  },
  {
    id: 2,
    imageUrl: 'path/to/your/image2.jpg',
    title: 'Tomato Pasta',
    // 他のプロパティ
  },
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