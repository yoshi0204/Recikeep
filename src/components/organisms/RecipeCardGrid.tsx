// src/components/organisms/RecipeCardGrid.tsx
import RecipeCard from '../molecules/RecipeCard';

interface Recipe {
  imageUrl: string;
  title: string;
}

interface RecipeCardGridProps {
  recipes: Recipe[];
}

const RecipeCardGrid: React.FC<RecipeCardGridProps> = ({ recipes }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 py-4">
      {recipes.map((recipe, index) => (
        <RecipeCard
          key={index}
          imageUrl={recipe.imageUrl}
          title={recipe.title}
        />
      ))}
    </div>
  );
};

export default RecipeCardGrid;