// src/components/atoms/Dropdown.tsx
interface DropdownProps {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, selected, onChange }) => {
  return (
    <select 
      value={selected} 
      onChange={(e) => onChange(e.target.value)}
      className="border-gray-300 rounded shadow p-2 bg-white"

    >
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  );
};

export default Dropdown;
