'use client'
import Breadcrumb from '@/components/ui/Breadcrumbs/Breadcrumb'
import { UsersList as UsersTable } from '@/components/admin/users/UsersList'
import TableTwo from '@/components/ui/Tables/TableTwo'
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { UserForm } from './UserForm'
import { fetchUsers } from '@/services/users'
import { useSession } from 'next-auth/react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState, setUsers } from '@/store'
import DataTable, { StatusPill } from '@/components/ui/data-table'
import { IUser } from '@/types/user'

export const UsersList = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const handleOpenDialog = () => { setIsOpen(!isOpen) }
    const { data: session } = useSession();
    const dispatch = useDispatch<AppDispatch>()
    const { users } = useSelector((state: RootState) => state.users)
    const columns = React.useMemo(
        () => [
            {
                Header: "Nom",
                accessor: "firstName"
            },
            {
                Header: "Type",
                accessor: "isMerchant",
                Cell: ({isMerchant}:IUser) => {
                    return (<>
                        {isMerchant ? 'Marchant' : 'User Support'}
                    </>)
                }
            },

            {
                Header: "Status",
                accessor: "isActive",
                Cell: ({isActive}:IUser) => {
                    return (<>
                        {isActive ? (<span className='bg-green-100 text-green-700'>Actif</span>) : <span className='bg-green-100 text-green-700'>Inactif</span>}
                    </>)
                }
            },

        ],
        []
    );

    const getUsers = async () => {
        setIsLoading(true)
        const data = await fetchUsers(session?.accessToken)
        dispatch(setUsers(data))
        setIsLoading(false)

    }

    useEffect(() => {
        getUsers()
    }, [session?.accessToken])
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
            <UserForm isOpen={isOpen} handleOpen={handleOpenDialog} />
            <div className="flex flex-col gap-10">
                {users && users?.length !== 0 ? (<DataTable columns={columns} data={users} />) : null}

            </div>

        </div>
    )
}

