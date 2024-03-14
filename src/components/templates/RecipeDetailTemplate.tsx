// src/components/templates/RecipeDetailTemplate.tsx
import React from 'react';
import RecipeDetailView from '../organisms/RecipeDetailView';
import FooterMenu from '../molecules/FooterMenu';

const RecipeDetailTemplate: React.FC = () => {
  // ダミーデータです。実際のアプリケーションでは、APIから取得するデータを使用します。
  const recipeData = {
    imageUrl: "path/to/image.jpg",
    title: "レシピのタイトル",
    description: "レシピの説明",
    cookingTime: 30,
    servings: 4,
    ingredients: [
      { name: "材料1", amount: "1個" },
      { name: "材料2", amount: "200g" },
      // 他の材料...
    ],
    steps: [
      { stepNumber: 1, instruction: "手順1の説明" },
      { stepNumber: 2, instruction: "手順2の説明" },
      // 他の手順...
    ],
  };

  return (
    <div className="recipe-detail-template">
      <RecipeDetailView {...recipeData} />
      <FooterMenu />
    </div>
  );
};

export default RecipeDetailTemplate;
