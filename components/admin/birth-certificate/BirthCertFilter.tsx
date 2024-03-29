"use client";
import React, { useEffect, useState } from "react";
import { BirthCertUnDeliveredFilterList } from "./BirthCertUnDeliveredFilterList";
import { Button, buttonVariants } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import {
  AppDispatch,
  RootState,
  setBirthCertUnDeliveredFilters,
  setSearchUnDeliveredCert,
} from "@/store";
import ResetIcon from "@/components/icons/ResetIcon";
import SearchInput from "@/components/ui/inputs/SearchInput";
import jsonData from "@/data/birth-certificate.json";
import { IBirthCertificate } from "@/types/birth-certificate";
import { setIsCertSearched } from "@/store/birth-certificate/birth-certSlice";
import { Spinner } from "@/components/ui/admin-spinner";
import { Alert } from "@/components/ui/Alerts";
import { toast } from "sonner";
import { SearchIcon } from "lucide-react";

const jsonDataTest: IBirthCertificate[] = jsonData as IBirthCertificate[];

interface IBirthCertFilter {
  filter: string;
}
export const BirthCertFilter = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const {
    birthCertsUnDeliveredFilters,
    searchUnDeliveredCert,
    isCertSearched,
  } = useSelector((state: RootState) => state.birthCert);
  const handleSearch = () => {
    if (searchUnDeliveredCert.trim() === "") {
      toast.error(`Veuillez entrer un numéro avant de lancer la recherche.`)
      return;
    }
    setIsLoading(true);
    const dataFromJson = jsonDataTest.filter(
      (item) => item.motherCode === searchUnDeliveredCert
    );
    dispatch(setBirthCertUnDeliveredFilters(dataFromJson));
    dispatch(setIsCertSearched(true));
    setTimeout(() => setIsLoading(false), 1000);
  };
  const onFilter = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    handleSearch();
  };
  const onResetFilter = () => {
    dispatch(setIsCertSearched(false));
    dispatch(setSearchUnDeliveredCert(''))
  };

  return (
    <div className=" w-full flex justify-center flex-col rounded-xl">
      <div className="w-full px-6 sm:px-12 md:px-12 lg:px-24 xl:px-44 py-24 bg-white  rounded-xl">
        <h1 className="md:text-xl font-medium">
          Rechercher par numero de reference
        </h1>
        <div className="relative flex  flex-col sm:flex-row sm:items-center gap-3">
          <div className="w-full">
            <SearchInput
              labelText="filter"
              name="filter"
              value={searchUnDeliveredCert}
              onChange={(e) =>
                dispatch(setSearchUnDeliveredCert(e.target.value))
              }
              placeholder="Entrer un numéro de reference"
              className=" items-center justify-center w-full rounded-full border-3"
            />
          </div>
          <div>
            {isCertSearched ? (
              <Button
                variant="default"
                size="sm"
                onClick={onResetFilter}
                className={buttonVariants({
                  size: "lg",
                  className:
                    "px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-danger/90 border border-transparent rounded-md focus:outline-none hover:bg-danger/90 focus:bg-danger/90 disabled:bg-danger/50",
                })}
              >
                Réinitialiser
                <ResetIcon className="ml-2 h-5 w-5 text-white" />
              </Button>
            ) : (
              <Button
                variant="default"
                size="sm"
                onClick={onFilter}
                className={buttonVariants({
                  size: "lg",
                  className:
                    "px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-primary-900/90 border border-transparent rounded-md focus:outline-none hover:bg-primary-900 focus:bg-primary-900 disabled:bg-primary-800/50",
                })}
              >
                Rechercher <SearchIcon className="ml-2 h-5 w-5 text-white" />
              </Button>
            )}
          </div>
        </div>
      </div>

      {isCertSearched && (
        <div className="pt-6">
          {isLoading ? (
            <div className="flex flex-col gap-4 items-center">
               <Spinner /> <p className="text-2xl">Veuillez patienter pendant le chargement des données...</p>
            </div>
          ) : birthCertsUnDeliveredFilters.length === 0 ? (
           <div className="px-6 sm:px-12 lg:px-24 xl:px-48">
             <Alert  description="  Aucune donnée disponible pour votre recherche" type="warning"/>
           </div>
          ) : (
            <BirthCertUnDeliveredFilterList
              birthCertsUnDeliveredFilters={birthCertsUnDeliveredFilters}
            />
          )}
        </div>
      )}
    </div>
  );
};


