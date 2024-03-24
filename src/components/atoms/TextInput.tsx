// src/components/atoms/TextInput.tsx
interface TextInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
}

const TextInput: React.FC<TextInputProps> = ({ value, onChange, placeholder, type = "text" }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-2 text-base border border-gray-300 rounded mb-4"

    />
  );
};

export default TextInput;
