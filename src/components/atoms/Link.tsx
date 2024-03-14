// src/components/atoms/LinkAtom.tsx
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ to, children }) => {
  return (
    <RouterLink to={to} className="link">
      {children}
    </RouterLink>
  );
};

export default Link;
