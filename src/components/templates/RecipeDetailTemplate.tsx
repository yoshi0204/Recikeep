import RecipeTabs from '../organisms/RecipeTabs';
import FooterMenu from '../molecules/FooterMenu';
import BackButton from '../atoms/BackButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import ImageDisplay from '../atoms/ImageDisplay'; 

interface Ingredient {
  name: string;
  amount: string;
}

interface Step {
  stepNumber: number;
  instruction: string;
}

interface RecipeDetailTemplateProps {
  recipeData: {
    imageUrl: string;
    title: string;
    description: string;
    cookingTime: number;
    servings: number;
    ingredients: Ingredient[];
    steps: Step[];
  };
}

const RecipeDetailTemplate: React.FC<RecipeDetailTemplateProps> = ({ recipeData }) => {
  const { imageUrl, title, description, cookingTime, servings, ingredients, steps } = recipeData;

  return (
    <div className="bg-gray-800 shadow-lg overflow-hidden">
      {/* ヘッダーセクション */}
      <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
        <BackButton />
        <h1 className="text-white text-xl font-bold text-center flex-1">{title}</h1>
        <div className="w-12"></div>
      </div>

      {/* レシピ画像 */}
      <div className="relative px-4 py-8"> 
        <div className="rounded-2xl overflow-hidden"> {/* 角丸と画像のはみ出し防止 */}
          <ImageDisplay src={imageUrl} alt={title} className="w-full h-64 object-cover" />
        </div>
      </div>

      {/* 説明と調理時間のセクション */}
      <div className="flex justify-between items-start">
        {/* レシピの詳細説明 */}
        <div className="text-white">
          <h2 className="text-lg font-bold">Description</h2>
          <p>{description}</p>
          <p>Servings: {servings}</p>
        </div>

        {/* 時計アイコンと調理時間 */}
        <div className="inline-flex items-center bg-gray-800 rounded-full px-3 py-1 shadow">
          <FontAwesomeIcon icon={faClock} className="h-4 w-4 text-white mr-2" />
          <span className="text-xs font-semibold text-white">{cookingTime} minutes</span>
        </div>
      </div>

      {/* タブで食材リストと調理手順を表示 */}
      <RecipeTabs ingredients={ingredients} steps={steps} />

      {/* フッターメニュー */}
      <FooterMenu />
    </div>
  );
};

export default RecipeDetailTemplate;
