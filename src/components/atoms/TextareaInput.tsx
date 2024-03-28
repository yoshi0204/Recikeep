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
      className="border-gray-300 rounded shadow p-2 bg-white"

      rows={4}
    />
  );
};

export default TextareaInput;
