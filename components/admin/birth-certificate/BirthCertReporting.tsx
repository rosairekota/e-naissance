'use client'
import { MouseEventHandler, useRef } from "react";
import { Button } from "@/components/ui/button";
import { IBirthCertificate } from "@/types/birth-certificate";
import { Margin, usePDF } from "react-to-pdf";
import ReactToPrint from "react-to-print";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, setBirthCertToReporting } from "@/store";
import { redirect } from "next/navigation";
import Breadcrumb from "@/components/ui/Breadcrumbs/Breadcrumb";
export type BirthProps = {
  data: IBirthCertificate;
};

export const BirthCertReporting: React.FC<BirthProps> = () => {
 const {birthCertToReporting: data} = useSelector((state:RootState)=>state.birthCert)
 const dispatch = useDispatch<AppDispatch>()
 const ref = useRef<any>();
  

 useEffect(()=>{
    const data1 = localStorage.getItem('birthCertReporting')
    dispatch(setBirthCertToReporting(data1))
 },[dispatch])
  const { toPDF, targetRef } = usePDF({
    filename: "usepdf-example.pdf",
    page: { margin: Margin.MEDIUM }
  });
  return (
    <div className="p-24">
      <div className="flex gap-3 justify-between items-center">
      <Breadcrumb pageName="/ Page Impression" backToPageName='Révenir en arriere' backToPagePath='/admin/birth-certificate'/>
      <div className="flex gap-3">
      <ReactToPrint
        bodyClass="print-agreement"
        content={() => ref.current}
        trigger={() => (
          <Button  
          variant="default"
          size="sm"
          className="bg-primary-800 text-white w-15 h-5 py-3 px-10 mb-3">
        Print
      </Button>
         )}
       />
      
      <Button
        variant="default"
        size="sm"
        onClick={toPDF as MouseEventHandler<HTMLButtonElement>}
        className="bg-primary-800 text-white w-15 h-5 py-3 px-10 mb-3"
      >
        Telecharger
      </Button>
      </div>
     
      </div>
     
      {data === null ? redirect('/admin/birth-certificate'):(
       <div ref={targetRef}>
         <div className="shadow-2 p-4 mb-4 w-full bg-white shadow-none rounded-md pb-48" ref={ref}>
        <div className="flex">
          <Image
            height={20}
            width={50}
            src={"/images/logo/drc.png"}
            alt="logo"
          />
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
          Je soussigné, Docteur:.{data.doctorName} certifie que Madame:
          {data.motherName}Epouse de Monsieur:{data.fatherName}A accouché
          à:.....
          {data.deliveryPlace}................................,
          le:...............................d&apos;un enfant de sexe:...........
          {data.genderChild}...................Poids:...{data.weightChild}
          .........Kgs. Nom,Post-nom et Prénom de {data.firstName}
          l&apos;enfant:...........................................Adresse:.
          {data.address}
          ..................................................Commune de:...{" "}
          {data.township}................................. Fait à Kinshasa,le{" "}
          {data.dateOfIssue}
          <p></p>
        </div>
      </div>
       </div>
      )}
    </div>
  );
};
