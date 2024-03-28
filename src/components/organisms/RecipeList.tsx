import RecipeCard from '../molecules/RecipeCard';
import Divider from '../atoms/Divider';

interface Recipe {
  recipeId: number;
  imageUrl: string;
  title: string;
  description: string;
}

interface RecipeListProps {
  recipes: Recipe[];
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe, index) => (
        <>
          <RecipeCard
            key={recipe.recipeId}
            imageUrl={recipe.imageUrl}
            title={recipe.title}
          />
          {index < recipes.length - 1 && <Divider />}
        </>
      ))}
    </div>
  );
};

export default RecipeList;
