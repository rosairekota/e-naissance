'use client'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import Drawer from '@/components/ui/drawer'
import { Modal } from '@/components/ui/modal'
import React, { useState } from 'react'

type MerchantFormProps ={
    handleOpen: (e:any)=> void;
    isOpen: boolean
}
export const MerchantForm:React.FC<MerchantFormProps> = ({isOpen, handleOpen}) => {
  return (
//    <Modal isOpen={isOpen} handleOpen={handleOpen}>
//        formulaite
//    </Modal>
   <Drawer  isOpen={isOpen} handleOpen={handleOpen}>
       formulaite
   </Drawer>
  )
}
