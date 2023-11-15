'use client'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import Drawer from '@/components/ui/drawer'
import { Modal } from '@/components/ui/modal'
import React, { useState } from 'react'

type UserFormProps ={
    handleOpen: (e:any)=> void;
    isOpen: boolean
}
export const UserForm:React.FC<UserFormProps> = ({isOpen, handleOpen}) => {
  return (
//    <Modal isOpen={isOpen} handleOpen={handleOpen}>
//        formulaite
//    </Modal>
   <Drawer  isOpen={isOpen} handleOpen={handleOpen}>
       formulaite
   </Drawer>
  )
}
