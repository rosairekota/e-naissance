'use client'
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BirthCertFilter } from "./BirthCertFilter";
import { BirthCertDeliveredList } from "./BirthCertDeliveredList";

export const BirthCertificate = () => {
  const [newCertTab, setNewCertTab] = useState<string>('newCert')
  const [selected, setSelected] = useState<string|null>('newCert')
  const [listOfBirthCertsTab, setListOfBirthCertsTab] = useState<string>('listOfBirthCertsTab')

 
  return (
    <div>
      <Tabs defaultValue={newCertTab} className="w-full" onValueChange={(value:string)=>{setSelected(value)}}>
        <TabsList className="w-full flex justify-start overflow-x-scroll sm:overflow-hidden">
          <TabsTrigger value={newCertTab} className={ (selected === newCertTab) ?"text-primary-900 rounded-md mt-3 bg-white drop-shadow-2":""}>Rechercher un certificat de naissances</TabsTrigger>
          <TabsTrigger value={listOfBirthCertsTab} className={ (selected === listOfBirthCertsTab) ?"text-primary-900 rounded-md mt-3 bg-white drop-shadow-2":""}>Certificats delivrées</TabsTrigger>
        </TabsList>
        <TabsContent value={newCertTab}>
          <BirthCertFilter/>
        </TabsContent>
        <TabsContent value={listOfBirthCertsTab}>
          <BirthCertDeliveredList/>
          </TabsContent>
      </Tabs>
    </div>
  );
};
