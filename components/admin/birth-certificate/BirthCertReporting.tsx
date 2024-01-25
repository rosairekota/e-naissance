'use client'
import { MouseEventHandler, useRef,useEffect} from "react";
import { Button } from "@/components/ui/button";
import { Margin, usePDF } from "react-to-pdf";
import ReactToPrint from "react-to-print";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, setBirthCertToReporting } from "@/store";
import { redirect } from "next/navigation";
import Breadcrumb from "@/components/ui/Breadcrumbs/Breadcrumb";

export const BirthCertReporting = () => {
 const {birthCertToReporting: data} = useSelector((state:RootState)=>state.birthCert)
 const dispatch = useDispatch<AppDispatch>()
 const ref = useRef<any>();
  

 useEffect(()=>{
    const data1 = localStorage.getItem('birthCertReporting')
    dispatch(setBirthCertToReporting(data1))
 },[dispatch])
  const { toPDF, targetRef } = usePDF({
    filename: "certificat-de-naissance.pdf",
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
          className="bg-primary-900/90 text-white w-15 h-5 py-4 px-12 mb-3 hover:bg-primary-900">
        Imprimer
      </Button>
         )}
       />
      
      <Button
        variant="default"
        size="sm"
        onClick={toPDF as MouseEventHandler<HTMLButtonElement>}
        className="bg-black-2/70 text-white w-15 h-5 py-4 px-12 mb-3 hover:bg-primary-900"
      >
        Télécharger
      </Button>
      </div>
     
      </div>
     
      {data === null ? redirect('/admin/birth-certificate'):(
       <div ref={targetRef}>
         <div className="shadow-2 p-4 mb-4 w-full bg-white shadow-none rounded-md pb-48" ref={ref}>
        <div className="flex">
          <Image
            height={50}
            width={50}
            src={"/images/logo/drc.png"}
            alt="logo"
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-medium">
            REPUBLIQUE DEMOCRATIQUE DU CONGO
          </h1>
          <h2 className="text-xl font-semibold ">CLINIQUE BONNHEUR A VIE</h2>
        </div>
        <h1 className="text-2xl font-bold my-4 text-center underline uppercase text-primary-300">
          Certificat de Naissance
        </h1>
        <div className=" pt-1">
         <p> Je soussigné, Docteur:<span className="font-bold"> {data.doctorName} </span>, certifie que Madame:
         <span className="font-bold">{data.motherName} </span>, Epouse de Monsieur: <span className="font-bold pr-2">{data.fatherName}</span>
          a accouché
          à: <span className="font-bold">{data.deliveryPlace}</span>
         </p>
          <p>,  le <span className="font-bold"> {data.dateOfIssue}</span>
         ; un enfant de sexe: <span  className="font-bold">{data.genderChild}, </span> Poids: <span  className="font-bold">{data.weightChild}g, </span>
         Adresse: <span  className="font-bold">{data.address}</span> Commune de:  <span className="font-bold">{data.township}</span>
          </p>
        
          <p>
          Nom,Post-nom et Prénom de 
          l&apos;enfant: <span className="font-bold">  {data.lastName} {data.firstName} {data.name}   </span>
          </p>
          <p className="flex justify-end  p-6">
          Fait à Kinshasa,le { new Date().getFullYear()}
          </p>
        </div>
      </div>
       </div>
      )}
    </div>
  );
};
