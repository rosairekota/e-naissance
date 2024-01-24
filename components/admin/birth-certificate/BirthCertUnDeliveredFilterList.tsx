"use client";

import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { DataTable } from "@/components/ui/data-table";
import { IBirthCertificate } from "@/types/birth-certificate";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useLocalStorage from "@/hooks/useLocalStorage";


type Props = {
  birthCertsUnDeliveredFilters: IBirthCertificate[];
};

export const BirthCertUnDeliveredFilterList: React.FC<Props> = ({
  birthCertsUnDeliveredFilters,
}) => {
  const router = useRouter()
    
const handleRedirectToReporting = ()=>{
    localStorage.setItem('birthCertReporting', JSON.stringify(birthCertsUnDeliveredFilters[0]))
   router.push('/admin/birth-certificate/reporting')
}

  const columns: ColumnDef<IBirthCertificate>[] = [
    {
      accessorKey: "name",
      header: "NOMS",
      cell: ({ row }) => (
        <div className="capitalize">{`${row.getValue("name")} ${row.getValue(
          "firstName"
        )}`}</div>
      ),
    },
    {
      accessorKey: "montherName",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            NOM DE LA MERE
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="lowercase pl-4">{row.getValue("montherName")}</div>
      ),
    },
    {
      accessorKey: "dateBirth",
      header: "DATE DE NAISSANCE",
      cell: ({ row }) => {
        return <div className="">{row.getValue("dateBirth")}</div>;
      },
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        return (
            <Button
            variant="default"
            size="sm"
            onClick={handleRedirectToReporting}
            className="bg-primary-800 text-white w-15 h-5 py-3 px-10"
          >
            Generer pdf 
          </Button>
        );
      },
    },
  ];
  return (
    <div>
      <DataTable<ColumnDef<IBirthCertificate>[], IBirthCertificate[]>
        columns={columns}
        data={birthCertsUnDeliveredFilters}
        hideSearchBar={true}
      />
    </div>
  );
};


