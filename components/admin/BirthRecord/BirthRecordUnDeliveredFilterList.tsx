'use client'

import React from 'react';
import {ColumnDef} from "@tanstack/react-table";
import {Button} from "@/components/ui/button";
import {ArrowUpDown} from "lucide-react";
import {
    DropdownMenuItem,
    DropdownMenuSeparator} from "@/components/ui/dropdown-menu";
import { DataTable } from '@/components/ui/data-table';
import ColumnActions from '@/components/ui/data-table/custom-columns/ColumnActions';
import html2pdf from 'html2pdf.js/dist/html2pdf.min';
import ReactDOMServer from 'react-dom/server';
import { IBirthRecord } from '@/types/birth-record';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';






export const  BirthRecordUnDeliveredFilterList = () => {
    // isOpen state
    const [isOpen, setIsOpen] = React.useState<boolean>(false)
    const { birthRecordsUnDeliveredFilters} = useSelector((state:RootState)=> state.birthRecords)
    const handleOpenForm =()=>{
        setIsOpen(!isOpen)
    }
    const pdfJSX = () => {
        return (
          <>
           <DataTable <ColumnDef<IBirthRecord>[], IBirthRecord[]> columns={columns} data={birthRecordsUnDeliveredFilters}  hideSearchBar={true}/>
          </>
        )
      }
      const options = {
        format: 'A4',
        orientation: 'portrait',
        border: '10mm',
        footer: {
          height: '10mm',
        },
        type: 'pdf',
        timeout: 30000,
      };

  const printHandler = () => {
    const printElement = ReactDOMServer.renderToString(pdfJSX());
    
    console.log(printElement);

    html2pdf().from(printElement).save();
  }

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
                        onClick={printHandler}
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
