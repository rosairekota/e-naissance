'use client'
import Breadcrumb from '@/components/ui/Breadcrumbs/Breadcrumb'
import { UsersList as UsersTable } from '@/components/admin/users/UsersList'
import TableTwo from '@/components/ui/Tables/TableTwo'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { UserForm } from './UserForm'

export const UsersList = () => {
    const [isOpen, setIsOpen]= useState<boolean>(false)
    const handleOpenDialog =()=>{ setIsOpen(!isOpen)}
    return (
        <div>
            <Breadcrumb pageName="Utilisateurs" />
            <div className="w-full flex justify-end py-3">
                <Button
                    onClick={handleOpenDialog}
                    className="inline-flex items-center justify-center px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-primary-800 dark:bg-boxdark border border-transparent rounded-lg focus:outline-none hover:bg-primary-900 focus:bg-primary-900 disabled:bg-primary-800/50"
                >
                    Créer un nouvel utilisateur
                </Button>
            </div>
            <UserForm  isOpen={isOpen} handleOpen={handleOpenDialog}/>
            <div className="flex flex-col gap-10">
                <UsersTable/>
            </div>

        </div>
    )
}

