// src/components/templates/NotFoundTemplate.tsx
import { Link } from 'react-router-dom';
import './NotFoundTemplate.css';

const NotFoundTemplate = () => {
  return (
    <div className="not-found-container">
      <h1>404 Not Found</h1>
      <p>お探しのページは見つかりませんでした。</p>
      <Link to="/">ホームに戻る</Link>
    </div>
  );
};

export default NotFoundTemplate;
