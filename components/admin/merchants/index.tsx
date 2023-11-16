'use client'
import Breadcrumb from '@/components/ui/Breadcrumbs/Breadcrumb'
import { MerchantList as MerchantTable } from '@/components/admin/merchants/MerchantList'
import TableTwo from '@/components/ui/Tables/TableTwo'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { MerchantForm } from './MerchantForm'
import { IMerchant } from '@/types/merchant'
import DataTable from '@/components/ui/data-table'
const merchantData: IMerchant[] = [
    {
      name: "Merchant1",
      organisation:{
        name:'A'
      },
      usersCount: 0.0,
      status: "Active",
    },
    {
      name: "Merchant2",
      usersCount: 59.0,
      organisation:{
        name:'A'
      },
      status: "Active",
    },
    {
      name: "Merchant3",
      usersCount: 99.0,
      organisation:{
        name:'A'
      },
      status: "blocked",
    },
    {
      name: "Merchant4",
      usersCount: 59.0,
      status: "Pending",
    },
  ];
  
export const MerchantsList = () => {
    
    const [isOpen, setIsOpen]= useState<boolean>(false)
    const handleOpenDialog =()=>{ setIsOpen(!isOpen)}
    const columns = React.useMemo(
        () => [
          {
            Header: "Name",
            accessor: "name"
          },
          {
            Header: "Organisation",
            accessor: "organisation.name"
          },
          {
            Header: "Nombre",
            accessor: "usersCount",
           // Cell: LocateCell,
          },
          {
            Header: "Status",
            accessor: "status",
           // Cell: StatusPill
          },
          {
            Header: "Role",
            accessor: "role",
           // Filter: SelectColumnFilter,
            filter: "includes"
          }
        ],
        []
      );
    return (
        <div>
            <Breadcrumb pageName="Marchants" />
            <div className="w-full flex justify-end py-3">
                <Button
                    onClick={handleOpenDialog}
                    className="inline-flex items-center justify-center px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-primary-800 dark:bg-boxdark border border-transparent rounded-lg focus:outline-none hover:bg-primary-900 focus:bg-primary-900 disabled:bg-primary-800/50"
                >
                    Créer un nouveau marchant
                </Button>
            </div>
            <MerchantForm  isOpen={isOpen} handleOpen={handleOpenDialog}/>
            <div className="flex flex-col gap-10">
            <DataTable columns={columns} data={merchantData} />
            </div>

        </div>
    )
}

