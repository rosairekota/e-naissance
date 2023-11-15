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
    <Dialog  open={isOpen} onOpenChange={handleOpen}>
    <DialogContent>
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
