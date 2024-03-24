// src/components/templates/NotFoundTemplate.tsx
import { Link } from 'react-router-dom';

const NotFoundTemplate = () => {
  return (
    <div className="text-red-600 mb-4 text-sm">
      <h1>404 Not Found</h1>
      <p>お探しのページは見つかりませんでした。</p>
      <Link to="/">ホームに戻る</Link>
    </div>
  );
};

export default NotFoundTemplate;
