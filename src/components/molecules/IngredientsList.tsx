interface Ingredient {
  name: string;
  amount: string;
}

interface IngredientsListProps {
  ingredients: Ingredient[];
}

const IngredientsList: React.FC<IngredientsListProps> = ({ ingredients }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow">
      <ul className="divide-y divide-gray-200">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="flex items-center py-3">
            <input
              type="checkbox"
              id={`ingredient-${index}`}
              className="mr-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor={`ingredient-${index}`} className="flex-1 min-w-0">
              <span className="text-white">{ingredient.name}</span>
              <span className="text-white ml-3">{ingredient.amount}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientsList;
