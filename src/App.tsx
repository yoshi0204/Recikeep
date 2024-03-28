import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 他のページコンポーネントをインポート
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AddRecipePage from './pages/AddRecipePage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import SearchResultsPage from './pages/SearchResultsPage';
import NotFoundPage from './pages/Page404';
import RegisterPage from './pages/RegisterPage'; // RegisterPageを追加

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/add-recipe" element={<AddRecipePage />} />
        <Route path="/recipe/:id" element={<RecipeDetailPage />} />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="/register" element={<RegisterPage />} /> {/* RegisterPageのルートを追加 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
