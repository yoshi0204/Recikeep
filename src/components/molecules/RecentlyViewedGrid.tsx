 
interface RecentlyViewedRecipe {
  recipeId: number;
  imageUrl: string;
  title: string;  
}

interface RecentlyViewedGridProps {
  recipes: RecentlyViewedRecipe[]; 
}

const RecentlyViewedGrid: React.FC<RecentlyViewedGridProps> = ({ recipes }) => {
    return (
      <div className="container mx-auto px-8 py-8">
        <h2 className="text-white text-2xl font-bold mb-8">Recently Viewed</h2> 
        <div className="grid grid-cols-3 gap-10">
          {recipes.map((recipe) => (
            <div key={recipe.recipeId} className="bg-white rounded-xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
              <img src={recipe.imageUrl} alt={recipe.title} className="w-full h-64 object-cover"/>
              <div className="absolute bottom-0 bg-black bg-opacity-50 w-full p-4">
                <h3 className="text-white text-lg font-bold">{recipe.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  

export default RecentlyViewedGrid;
