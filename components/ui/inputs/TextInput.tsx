'use client'
import { cn } from '@/lib/utils';
import clsx from 'clsx';
import React, { ReactNode, useEffect } from 'react'
import { Controller } from 'react-hook-form';

type TextInputProps = {
    className?: string;
    name: string;
    labelText: string;
    placeholder?: string;
    labelRequired?: boolean;
    rules?: string | number | any;
    type: string;
    isReadonly?: boolean,
    control?: any;
    children?: ReactNode;
    errors: any;
    onChange?: (e: any) => void;

}
export const TextInput: React.FC<TextInputProps> = ({ className, name, labelText, labelRequired, rules, control, errors, type, placeholder, children,  isReadonly }) => {
    
    const customClassName=()=>{
        return errors[name]?.message !== undefined ? 'block w-full p-3 text-black placeholder-gray-500 transition-all duration-200 border rounded-md bg-gray-50 focus:outline-none focus:border-meta-1 focus:bg-white caret-primary-800 mt-2.5 border-meta-1':' border-[1.5px] block w-full p-3 text-black placeholder-gray-500 transition-all duration-200 border border-primary-800/25 rounded-md bg-gray-50 focus:outline-none focus:border-primary-800 focus:bg-white caret-primary-800 mt-2.5'
    }
    useEffect(()=>{
        console.log("control:", control)
    }, [control])
    return (
        <div>
           <div className='flex items-center justify-between'>
           <label
                htmlFor={name}
                className="text-base font-medium text-gray-900"
            >
            {labelText}  {labelRequired && <span className='text-danger ml-2'>*</span>}
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
                        className={`${customClassName()}`}
                        readOnly={isReadonly}
                    />
                )} />
            <span className="text-danger mt-1.5">
                {errors[name]?.message}
            </span>
        </div>
    )
}
