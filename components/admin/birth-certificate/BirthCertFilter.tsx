"use client";
import { TextInput } from "@/components/ui/inputs/TextInput";
import { BirthRecordFilterSchemaValidation } from "@/validators/Birth-record-filter";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { MouseEventHandler, useState } from "react";
import { useForm } from "react-hook-form";
import { BirthCertUnDeliveredFilterList } from "./BirthCertUnDeliveredFilterList";
import { Button, buttonVariants } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, setBirthCertUnDeliveredFilters } from "@/store";
import { SearchIcon } from "lucide-react";
import ResetIcon from "@/components/icons/ResetIcon";
import SearchInput from "@/components/ui/inputs/SearchInput";
import jsonData from "@/data/birth-certificate.json"
import { IBirthCertificate } from "@/types/birth-certificate";
import Loader from "@/components/ui/Loader";

const jsonDataTest:IBirthCertificate[] = jsonData

interface IBirthCertFilter {
  filter: string;
}
export const BirthCertFilter = () => {
  const [isFiltered, setIsFiltered] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const { birthCertsUnDeliveredFilters } = useSelector(
    (state: RootState) => state.birthCert
  );
  const handleSearch = () => {
    if (searchValue.trim() === '') {
      // Afficher un message si l'input est vide
      alert('Veuillez entrer un numéro avant de lancer la recherche.');
      return;
    }
    const dataFromJson = jsonDataTest.filter((item)=>item.motherCode === searchValue);
    dispatch(setBirthCertUnDeliveredFilters(dataFromJson));

   
  };
  const onFilter = (e:any) => {
    e.stopPropagation();
    e.preventDefault()
    handleSearch();
    setIsFiltered(true);
  };
  const onResetFilter =() => {
    setIsFiltered(false);

  };
  return (
    <div className=" w-full flex justify-center flex-col rounded-xl">
      <div
        className="w-full px-44 py-24 bg-white  rounded-xl"
      >
        <h1 className="text-xl font-medium">
          Rechercher par numero de reference
        </h1>
        <label
          htmlFor="default-Rechercher"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Rechercher
        </label>
        <div className="relative flex  items-center gap-3">
          <div className="w-full">
            <SearchInput
              labelText="filter"
              name="filter"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Entrer un numéro de reference"
              className=" items-center justify-center w-full rounded-full border-3"
            />
          </div>
          <div>
          {isFiltered ? (<Button
            variant="default"
            size="sm"
            onClick={onResetFilter}
            className={buttonVariants({
              size: "lg",
              className:
                "px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-primary-800 border border-transparent rounded-md focus:outline-none hover:bg-primary-900 focus:bg-primary-900 disabled:bg-primary-800/50",
            })}
          >
            Réinitialiser<ResetIcon className="ml-2 h-5 w-5 text-white" />
          </Button>):(
            <Button
            variant="default"
            size="sm"
            onClick={onFilter}
            className={buttonVariants({
              size: "lg",
              className:
                "px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-primary-800 border border-transparent rounded-md focus:outline-none hover:bg-primary-900 focus:bg-primary-900 disabled:bg-primary-800/50",
            })}
          >
            Rechercher <SearchIcon className="ml-2 h-5 w-5 text-white" />
          </Button>
          )}
          </div>
          
        </div>
      </div>
        {isFiltered ? (
          <div className="pt-6">
            {birthCertsUnDeliveredFilters.length === 0?(
            <div className="p-24">
              <div className="bg-meta-6/80 p-6 rounded-xl text-2xl">
               <p className="text-white font-medium text-center">Aucune donnée disponible pour votre recherche</p>
            </div>
            </div>):
            ( <BirthCertUnDeliveredFilterList
              birthCertsUnDeliveredFilters={birthCertsUnDeliveredFilters}
            />)
            }
           
          </div>
        ) : (
          ""
        )}
      
      
    </div>
  );
};
