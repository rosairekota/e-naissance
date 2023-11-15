
import React, { ReactNode } from 'react'
import { Button } from '../button';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

type DrawerProps = {
    drawerTitle?: string;
    handleOpen?: (e: any) => void;
    isOpen?: boolean
    children?: ReactNode
    direction?: "top" | "bottom" | "left" | "right" | null | undefined
}
const Drawer: React.FC<DrawerProps> = ({ drawerTitle, children, isOpen, handleOpen, direction }) => {
    return (
        <Sheet open={isOpen} onOpenChange={handleOpen}>
            <SheetContent className="z-50 bg-white w-[900px] border-0" side={direction}>
                <SheetHeader>
                    <SheetTitle>{drawerTitle}</SheetTitle>
                    <SheetDescription>
                        {children}
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>

    )
}

export default Drawer