// src/components/atoms/TextareaInput.tsx
interface TextareaInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

const TextareaInput: React.FC<TextareaInputProps> = ({ value, onChange, placeholder }) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="textarea-input"
      rows={4}
    />
  );
};

export default TextareaInput;
