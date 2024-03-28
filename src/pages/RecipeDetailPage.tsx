import RecipeDetailTemplate from '@/components/templates/RecipeDetailTemplate';

const demoData = {
  imageUrl: "public/images/yos0034-054.jpg", 
  title: "デモレシピ",
  description: "",
  cookingTime: 45,
  servings: 4,
  ingredients: [
    { name: "小麦粉", amount: "200g" },
    { name: "砂糖", amount: "100g" },
    { name: "卵", amount: "2個" },
    { name: "バター", amount: "50g" },
    // 他のデモ食材
  ],
  steps: [
    { stepNumber: 1, instruction: "オーブンを180度に予熱します。" },
    { stepNumber: 2, instruction: "小麦粉と砂糖を混ぜ合わせます。" },
    // 他のデモ手順
  ],
};

const RecipeDetailPage: React.FC = () => {
  return (
    <div className="bg-gray-800">
      <RecipeDetailTemplate recipeData={demoData} />
    </div>
  );
};

export default RecipeDetailPage;
