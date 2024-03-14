import React from 'react';

// RecipeDataType 型をインポートするか、直接ここで定義します。
// この例では、型定義を直接記載しています。
interface RecipeDataType {
  title: string;
  description: string;
  ingredients: string[];
  steps: string[];
  cookingTime: number;
  servings: number;
  category: string;
  image?: File;
}

interface SaveRecipeButtonProps {
  onSave: (recipeData: RecipeDataType) => void; // 保存時に呼び出される関数
}

const SaveRecipeButton: React.FC<SaveRecipeButtonProps> = ({ onSave }) => {
  return (
    <button onClick={() => onSave({
      // デモのためのダミーデータ
      title: 'レシピのタイトル',
      description: 'レシピの説明',
      ingredients: ['材料1', '材料2'],
      steps: ['ステップ1', 'ステップ2'],
      cookingTime: 30,
      servings: 4,
      category: '和食',
      // image: ここで画像データを渡す場合（オプション）
    })}>
      保存
    </button>
  );
};

export default SaveRecipeButton;
