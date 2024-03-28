import { useState } from 'react';
import TextInput from '../atoms/TextInput';
import TextareaInput from '../atoms/TextareaInput';
import PrimaryButton from '../atoms/PrimaryButton';

const RecipeSubmissionForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [servings, setServings] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const recipeData = {
      title,
      description,
      ingredients,
      steps,
      cookingTime,
      servings,
    };
    console.log('Recipe Data to Submit:', recipeData);
    // API は後に実装予定
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextareaInput
        placeholder="Recipe Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <TextInput
        placeholder="Ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <TextareaInput
        placeholder="Steps"
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
      />
      <TextInput
        placeholder="Cooking Time"
        value={cookingTime}
        onChange={(e) => setCookingTime(e.target.value)}
      />
      <TextInput
        placeholder="Servings"
        value={servings}
        onChange={(e) => setServings(e.target.value)}
      />
      <PrimaryButton type="submit">Post Recipe</PrimaryButton>
    </form>
  );
};

export default RecipeSubmissionForm;
