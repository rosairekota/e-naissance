import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import React, { ReactNode } from 'react'
type ModalProps ={
    modalTitle?: string;
    handleOpen: (e:any)=> void;
    isOpen: boolean
    children: ReactNode
}
export const Modal:React.FC<ModalProps> = ({modalTitle, children, isOpen, handleOpen}) => {
  return (
    <Dialog  open={isOpen} onOpenChange={handleOpen} >
    <DialogContent className='border-0 max-w-[800px] bg-white z-[99999] -transform   transition-transform scale-90 duration-700'>
      <DialogHeader>
        <DialogTitle>{modalTitle}</DialogTitle>
        <DialogDescription>
        {children}
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
  )
}
