'use client'
import { TextInput } from "@/components/ui/inputs/TextInput";
import { BirthRecordFilterSchemaValidation } from "@/validators/Birth-record-filter";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { BirthRecordUnDeliveredFilterList } from "./BirthRecordUnDeliveredFilterList";
import { Button, buttonVariants } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";

interface IBithRecordFilter {
    filter: string;
}
export const BirthRecordFilter = () => {
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<IBithRecordFilter>({
        resolver: yupResolver(BirthRecordFilterSchemaValidation),
      })
  return (
    <div className=" w-full flex justify-center flex-col rounded-xl">
     
      <form className="w-full px-44 py-24 bg-white  rounded-xl">
      <h1 className="text-xl font-medium">Rechercher par numero de reference</h1>
        <label
          htmlFor="default-Rechercher"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Rechercher
        </label>
        <div className="relative flex  items-center gap-3">
          {/* <div className="absolute inset-y-0 end-0 flex items-center ps-3 pointer-events-none pr-3 pt-3">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div> */}
         <div className="w-full">
         <TextInput
                labelText=""
                control={control}
                name="filter"
                errors={errors}
                placeholder="Entrer un numéro de reference"
                type={"text"}
                className=" items-center justify-center w-full rounded-full border-3"
              />
         </div>
           
             <Button
                        variant="default"
                        size="sm"
                        onClick={() => null}
                        className={buttonVariants({
                            size:'lg',
                            className:'px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-primary-800 border border-transparent rounded-md focus:outline-none hover:bg-primary-900 focus:bg-primary-900 disabled:bg-primary-800/50'
                        })}
                    >
                         Rechercher <SearchIcon className="ml-2 h-5 w-5 text-white" />
                </Button>
                        
        </div>
      </form>
      <div className="pt-6">
          <BirthRecordUnDeliveredFilterList/>
       </div>
    </div>
  );
};
