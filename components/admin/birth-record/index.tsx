'use client'
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BirthRecordFilter } from "./BirthRecordFilter";
import { BirthRecordDeliveredList } from "./BirthRecordDeliveredList";

export const BirthRecord = () => {
  const [newRecordTab, setNewRecordTab] = useState<string>('newRecord')
  const [selected, setSelected] = useState<string|null>('newRecord')
  const [listOfBirthRecordsTab, setListOfBirthRecordsTab] = useState<string>('listOfBirthRecordsTab')

 
  return (
    <div>
      <Tabs defaultValue={newRecordTab} className="w-full " onValueChange={(value:string)=>{setSelected(value)}}>
        <TabsList>
          <TabsTrigger value={newRecordTab} className={ (selected === newRecordTab) ?"text-primary-900 rounded-md mt-3 bg-white drop-shadow-2":""}>Rechercher un acte de naissances</TabsTrigger>
          <TabsTrigger value={listOfBirthRecordsTab} className={ (selected === listOfBirthRecordsTab) ?"text-primary-900 rounded-md mt-3 bg-white drop-shadow-2":""}>Actes delivrées</TabsTrigger>
        </TabsList>
        <TabsContent value={newRecordTab}>
          <BirthRecordFilter/>
        </TabsContent>
        <TabsContent value={listOfBirthRecordsTab}>
          <BirthRecordDeliveredList/>
          </TabsContent>
      </Tabs>
    </div>
  );
};
