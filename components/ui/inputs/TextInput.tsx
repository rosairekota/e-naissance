'use client'
import clsx from 'clsx';
import React, { ReactNode } from 'react'
import { Controller } from 'react-hook-form';

type TextInputProps = {
    className?: string;
    name: string;
    labelText: string;
    placeholder?: string;
    rules?: string | number | any;
    type: string;
    control?: any;
    children?: ReactNode;
    errors: any;
    onChange?: (e: any) => void;

}
export const TextInput: React.FC<TextInputProps> = ({ className, name, labelText, rules, control, errors, type, placeholder, children }) => {
    const renderError=()=>{
        return errors[name]?.message !== undefined ? 'border-danger':''
    }
    
    return (
        <div>
           <div className='flex items-center justify-between'>
           <label
                htmlFor={name}
                className="text-base font-medium text-gray-900"
            >
                {labelText}
            </label>
            {children}
           </div>
            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({ field: { onChange, value, onBlur } }) => (
                    <input
                        type={type}
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        placeholder={placeholder}
                        className={`${clsx(className, 'block w-full p-3 text-black placeholder-gray-500 transition-all duration-200 border border-text-primary/5 rounded-md bg-gray-50 focus:outline-none focus:border-primary-800 focus:bg-white caret-primary-800 mt-2.5')} ${renderError()}`}
                    />
                )} />
            <span className="text-danger mt-1.5">
                {errors[name]?.message}
            </span>
        </div>
    )
}
