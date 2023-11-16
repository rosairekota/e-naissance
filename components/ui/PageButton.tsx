import clsx from "clsx";
import { ReactNode } from "react";

type Props = {
    children?: ReactNode; 
    className?: string;
    onClick?: () => any;
    disabled?: boolean;
}

export function PageButton({ children, className, ...rest }: Props) {
    return (
        <button
            type="button"
            className={clsx(
                "relative inline-flex items-center px-2 py-2 border border-black/10 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",
                className
            )}
            {...rest}
        >
            {children}
        </button>
    );
}