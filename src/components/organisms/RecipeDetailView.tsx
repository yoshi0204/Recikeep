import ImageDisplay from '../atoms/ImageDisplay';
import Divider from '../atoms/Divider';

interface Ingredient {
  name: string;
  amount: string;
}

interface Step {
  stepNumber: number;
  instruction: string;
}

interface RecipeDetailViewProps {
  imageUrl: string;
  title: string;
  description: string;
  cookingTime: number;
  servings: number;
  ingredients: Ingredient[];
  steps: Step[];
}

const RecipeDetailView: React.FC<RecipeDetailViewProps> = ({
  imageUrl,
  title,
  description,
  cookingTime,
  servings,
  ingredients,
  steps,
}) => {
  return (
    <div className="recipe-detail-view">
      <ImageDisplay src={imageUrl} alt={title} className="ml-auto" />
      <h1>{title}</h1>
      <p>{description}</p>
      <p> Cooking time: {cookingTime}min</p>
      <p>amount {servings}servings</p>
      <Divider />
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.name} - {ingredient.amount}</li>
        ))}
      </ul>
      <Divider />
      <h2>Process</h2>
      <ol>
        {steps.map((step, index) => (
          <li key={index}>{step.stepNumber}. {step.instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetailView;
