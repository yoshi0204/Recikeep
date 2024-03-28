// src/components/atoms/Divider.tsx
interface DividerProps {
  className?: string;
}
const Divider: React.FC<DividerProps> = ({ className }) => {
  return <hr className={className || 'my-4'} />;
};
export default Divider;
