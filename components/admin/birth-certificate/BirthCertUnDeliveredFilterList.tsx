"use client";

import React, { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { DataTable } from "@/components/ui/data-table";
import { IBirthCertificate } from "@/types/birth-certificate";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useLocalStorage from "@/hooks/useLocalStorage";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, setLoadingApp } from "@/store";
import { BirthCertFormStep } from "./BirthCertFormStep";
import MultiStepForm from "./MTstep";


type Props = {
  birthCertsUnDeliveredFilters: IBirthCertificate[];
};

export const BirthCertUnDeliveredFilterList: React.FC<Props> = ({
  birthCertsUnDeliveredFilters,
}) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [ showBirthCertForm, setShowBirthCertForm] = useState<boolean>(false)
  const {birthCertToReporting} = useSelector((state:RootState)=>state.birthCert)
  const  dispatch = useDispatch<AppDispatch>()
    
const handleRedirectToReporting = async ()=>{
    setShowBirthCertForm(!showBirthCertForm)
}


  const columns: ColumnDef<IBirthCertificate>[] = [
    {
      accessorKey: "referenceNumber",
      header: "NUMERO DE REFERENCE ENFANT",
      cell: ({ row }) => (
        <div>
        {row.original.referenceNumber}
        </div>
      ),
    },
    {
      accessorKey: "name",
      header: "NOMS",
      cell: ({ row }) => (
        <div className="capitalize">{`${row.original.firstName} - ${row.original.lastName} ${row.original.name}`}</div>
      ),
    },
    {
      accessorKey: "genderChild",
      header: "SEXE",
      cell: ({ row }) => (
        <div className="capitalize">{`${row.original.genderChild}`}</div>
      ),
    },
    {
      accessorKey: "deliveryPlace",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            LIEU DE NAISSANCE
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <div className="capitalize pl-4">{row.original.deliveryPlace}</div>
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
            className="bg-primary-800 text-white h-5 py-4 px-6"
          >
            Générer le certificat
          </Button>
        );
      },
    },
  ];
  return (
    <div>
      { isLoading?(<div>
        Traitement de l&apos;operation en cour.... Veuillez patienter SVP.
      </div>):(
      <div>
        <h2 className="font-bold uppercase mb-2">Informations sur la femme</h2>
        <ul>
          <li>Noms: {birthCertsUnDeliveredFilters && birthCertsUnDeliveredFilters[0].motherName}</li>
        </ul>
         <DataTable<ColumnDef<IBirthCertificate>[], IBirthCertificate[]>
        columns={columns}
        data={birthCertsUnDeliveredFilters}
        hideSearchBar={true}
      />
      </div>)}
      {/* <MultiStepForm isOpen={showBirthCertForm} handleOpen={handleRedirectToReporting} defaultValues={birthCertsUnDeliveredFilters[0]}/> */}
      <BirthCertFormStep isOpen={showBirthCertForm} handleOpen={handleRedirectToReporting} defaultValues={birthCertsUnDeliveredFilters[0]}/>
    </div>
  );
};


