"use client";

import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { DataTable } from "@/components/ui/data-table";
import html2pdf from "html2pdf.js/dist/html2pdf.min";
import ReactDOMServer from "react-dom/server";
import { IBirthCertificate } from "@/types/birth-certificate";
import Image from "next/image";

type Props = {
  birthCertsUnDeliveredFilters: IBirthCertificate[];
};

export const BirthCertUnDeliveredFilterList: React.FC<Props> = ({
  birthCertsUnDeliveredFilters,
}) => {
  const pdfJSX = () => {
    return (
      <>
        <BirthCertReport data={birthCertsUnDeliveredFilters[0]} />
      </>
    );
  };
  const options = {
    format: "A4",
    orientation: "portrait",
    border: "10mm",
    footer: {
      height: "10mm",
    },
    type: "pdf",
    timeout: 30000,
  };

  const printHandler = () => {
    const printElement = ReactDOMServer.renderToString(pdfJSX());

    console.log(printElement);

    html2pdf().from(printElement).save();
  };

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
          <div>
            <Button
              variant="default"
              size="sm"
              onClick={printHandler}
              className="bg-primary-800 text-white w-15 h-5 py-3 px-10"
            >
              Imprimer
            </Button>
          </div>
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

export type BirthProps = {
  data: IBirthCertificate;
};

export const BirthCertReport: React.FC<BirthProps> = ({ data }) => {
  return (
    <div className="border p-4 mb-4 w-full bg-white shadow-none">
      <div className="flex">
        <Image height={20} width={50} src={"/images/logo/drc.png"} alt="logo" />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-xl font-semibold">
          REPUBLIQUE DEMOCRATIQUE DU CONGO
        </h1>
        <h2 className="text-xl font-semibold">CLINIQUE BONNHEUR A VIE</h2>
      </div>
      <h1 className="text-2xl font-bold my-4 text-center underline uppercase ">
        Certificat de Naissance
      </h1>
      <div className="flex justify-between mt-4">
        Je soussigné, Docteur:.{data.doctorName} certifie que
        Madame:{data.motherName}Epouse de Monsieur:{data.fatherName}A
        accouché à:.....{data.deliveryPlace}................................,
        le:...............................d&apos;un enfant de
        sexe:...........{data.genderChild}...................Poids:...{data.weightChild}.........Kgs. Nom,Post-nom
        et Prénom de {data.firstName}
        l&apos;enfant:...........................................Adresse:.{data.address}..................................................Commune
        de:... {data.township}................................. Fait à Kinshasa,le {data.dateOfIssue}
         <p>Le Médecin:..{data.doctorName} ...........................</p>
</div>
    </div>
  );
};
