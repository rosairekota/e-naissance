import { cn } from "@/lib/utils";
import React from "react";

type Props = {
    className?: string;
    name: string;
    labelText: string;
    placeholder?: string;
    value:any
    onChange?: (e: any) => void;

}
const SearchInput:React.FC<Props> = ({className, value, onChange,...props}) => {
  return (
    <input
     type="text"
      onChange={onChange}
      value={value}
     {...props}
      className={`${cn(
        className,
        "block w-full py-2 px-3 text-black placeholder-gray-500 transition-all duration-200 border-2 border-primary-800/25 rounded-md bg-gray-50 focus:outline-none focus:border-primary-800 focus:bg-white caret-primary-800 mt-2.5"
      )}`}
    />
  );
};

export default SearchInput;
