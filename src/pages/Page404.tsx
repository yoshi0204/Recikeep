// src/pages/NotFoundPage.tsx
import React from 'react';
import NotFoundTemplate from '../components/templates/NotFoundTemplate';

const Page404: React.FC = () => {
  return (
    <div>
      <NotFoundTemplate /> // テンプレートコンポーネントを使用
    </div>
  );
};

export default Page404;
