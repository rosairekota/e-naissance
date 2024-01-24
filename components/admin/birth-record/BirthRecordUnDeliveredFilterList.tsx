'use client'

import React from 'react';
import {ColumnDef} from "@tanstack/react-table";
import {Button} from "@/components/ui/button";
import {ArrowUpDown} from "lucide-react";
import { DataTable } from '@/components/ui/data-table';
import { IBirthRecord } from '@/types/birth-record';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';





export const  BirthRecordUnDeliveredFilterList = () => {

    const { birthRecordsUnDeliveredFilters} = useSelector((state:RootState)=> state.birthRecord)
  

    const columns: ColumnDef<IBirthRecord>[] = ([
        {
            accessorKey: "id",
            header: "ID",
            cell: ({ row }) => (
                <div className="capitalize">{row.getValue("id")}</div>
            ),
        },
        {
            accessorKey: "name",
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
    
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        NOMS
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                )
            },
            cell: ({ row }) => <div className="lowercase pl-4">{row.getValue("name")}</div>,
        },
        {
            accessorKey: "subCatCount",
            header: "NUMERO REF",
            cell: ({ row }) => {
                return <div className="">{row.getValue("subCatCount")}</div>
            },
        },
        {
            id: "actions",
            enableHiding: false,
            cell: ({ row }) => {
                return (
                    <div>
                        <Button
                        variant="default"
                        size="sm"
                        onClick={()=>''}
                        className='bg-primary-800 text-white w-15 h-5 py-3 px-10'
                    >
                         Imprimer
                    </Button>
                        
                    </div>
                )
            },
        },
    ])
    return (
        <div>
            <DataTable <ColumnDef<IBirthRecord>[], IBirthRecord[]> columns={columns} data={birthRecordsUnDeliveredFilters}  hideSearchBar={true}/>
           
        </div>
    );
};
