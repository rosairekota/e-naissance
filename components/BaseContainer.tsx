import React, {ReactNode} from "react";
import {cn as twMergeCn} from "@/lib/utils";

export type ContainerProps ={
    className?:string,
    children: ReactNode
}
export const BaseContainer:React.FC<ContainerProps> = ({className, children}) => {
    return (
        <div className={twMergeCn("mx-auto w-full max-w-screen-xl px-2.5 md:px-20", className)}>
            {children}
        </div>
    );
};