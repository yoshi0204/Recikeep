import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface LoginInputProps {
    error: string | undefined;
    label?: string;
    id: string;
    icon: IconDefinition;
    placeholder?: string;
    className?: string;
    register: any; 
    type: string;
}

const LoginInput: React.FC<LoginInputProps> = ({ register, error, label, id, icon, placeholder, className }) => {
    return (
        <div className={`${className}`}>
            <label htmlFor={id} className="text-white block text-base mb-1">{label}</label>
            <div className="flex items-center border-b-2 border-gray-500">
                <FontAwesomeIcon icon={icon} className="m-2 text-white" />
                <input {...register} id={id} placeholder={placeholder} className="bg-transparent w-full p-2 text-base text-white" />
            </div>
            {error && <p className="text-red-600 text-sm">{error}</p>}
        </div>
    );
};

export default LoginInput;
