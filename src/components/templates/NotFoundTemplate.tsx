import { Link } from 'react-router-dom';

const NotFoundTemplate = () => {
  return (
    <div className="text-red-600 mb-4 text-sm">
      <h1>404 Not Found</h1>
      <p>The page you're looking for was not found.</p>
      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default NotFoundTemplate;
