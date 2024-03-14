// src/components/molecules/FormField.tsx
import React from 'react';
import Label from '../atoms/Label';
import TextInput from '../atoms/TextInput';

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  id: string;
  name: string;
  placeholder?: string;
}

const FormField: React.FC<FormFieldProps> = ({ label, value, onChange, type, id, placeholder }) => {
  return (
    <div className="mb-4">
      <Label text={label} htmlFor={id} />
      <TextInput
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormField;
