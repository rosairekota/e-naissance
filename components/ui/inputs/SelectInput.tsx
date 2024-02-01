
'use client'
import { cn } from '@/lib/utils';
import { IFormStepValue } from '@/types/form-step';
import React, { ReactNode } from 'react'
import { Controller ,useForm} from 'react-hook-form';

type TextInputProps = {
    className?: string;
    name: string;
    labelText: string;
    labelRequired?: boolean;
    placeholder?: string;
    rules?: string | number | any;
    control?: any;
    children?: ReactNode;
    errors: any;
    isReadonly?: true,
    items?: IFormStepValue[];

}
export const SelectInput: React.FC<TextInputProps> = ({ className, name, labelText, labelRequired, rules, control, errors, placeholder, children ,items}) => {
    const { setValue } = useForm();
    const customClassName=()=>{
        return errors[name]?.message !== undefined ? 'block w-full p-3 text-black placeholder-gray-500 transition-all duration-200 border rounded-md bg-gray-50 focus:outline-none focus:border-meta-1 focus:bg-white caret-primary-800 mt-2.5 border-meta-1':' rounded-md border-[1.5px] relative z-20 w-full appearance-none rounded border border-primary-800/25 rounded-md bg-gray-50 focus:outline-none focus:border-primary-800 bg-transparent py-3 px-6 outline-none transition focus:border-primary active:border-primary dark:border-form-stroke dark dark:bg-form-input'
    }
    console.log(control)
    
    return (
        <div>
           <div className='flex items-center justify-between'>
           <label
                htmlFor={name}
                className="text-base font-medium text-gray-900"
            >
                {labelRequired && <span className='text-danger'>*</span>} {labelText}
            </label>
            {children}
           </div>
            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({ field }) => (
                    <div className="relative z-20 bg-transparent dark:bg-form-input">
                    <select 
                    {...field} 
                      placeholder={placeholder}
                      className={`${customClassName()}`}
                    >
                      { items?.map((item, index:number)=>(
                           <option value={item.value} key={item.value}>{item.label}</option>
                      ))}
                   
                    </select>
                    <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                      <svg
                        className="fill-current"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.8">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                            fill=""
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                )} />
            <span className="text-danger mt-1.5">
                {errors[name]?.message}
            </span>
        </div>
    )
}
