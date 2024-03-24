// src/components/molecules/RecipeCard.tsx
import React from 'react';

// description プロパティを削除
interface RecipeCardProps {
  imageUrl: string;
  title: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ imageUrl, title }) => {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
      {/* 画像をカバーとして表示 */}
      <img src={imageUrl} alt={title} className="w-full object-cover" />
      
      {/* タイトルを画像の下部に重ねる */}
      <div className="absolute bottom-0 bg-transparent p-4 w-full text-white text-lg font-bold bg-gradient-to-t from-black to-transparent">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default RecipeCard;
