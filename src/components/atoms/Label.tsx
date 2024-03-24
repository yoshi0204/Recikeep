// src/components/atoms/Label.tsx
interface LabelProps {
  text: string;
  htmlFor?: string;
}

const Label: React.FC<LabelProps> = ({ text, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className="block text-base mb-1"
    >
      {text}
    </label>
  );
};

export default Label;
