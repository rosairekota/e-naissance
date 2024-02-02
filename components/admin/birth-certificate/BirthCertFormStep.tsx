"use client";
import { Modal } from "@/components/ui/modal";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { IBirthCertificate } from "@/types/birth-certificate";
import { BirthCertFormStepSchemaValidation } from "@/validators/birth-cert-form-step.schema";
import { IFormStep } from "@/types/form-step";
import { FormStepper } from "@/components/ui/stepper";
import { birthCertFormFields } from "@/data/form/birth-cert-form";
import { useDispatch } from "react-redux";
import { AppDispatch, setBirthCertToReporting, setLoadingApp } from "@/store";

type ModalProps = {
  handleOpen: (e: any) => void;
  isOpen: boolean;
  defaultValues?: FieldValues;
};

export const BirthCertFormStep: React.FC<ModalProps> = ({
  isOpen,
  handleOpen,
  defaultValues,
}) => {
  const router = useRouter();
 
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(isOpen)
  const [isError, setIsError] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const redirectToPath = "/admin/birth-certificate/reporting";

  const formSteps: IFormStep[] = birthCertFormFields as IFormStep[];

  const handleStoreBirthCert: SubmitHandler<IBirthCertificate> = async (
    data: IBirthCertificate
  ) => {
  
    try {
      setIsLoading(true);
      setIsError(false);
      processReporting(data)
      setIsError(true);
      setIsLoading(false);
      setShowModal(false)
    } catch (error) {}
  };
  const processReporting = async (data:IBirthCertificate) => {
    if (Object.keys(data).length !== 0) {
      dispatch(
        setLoadingApp({
          loading: true,
          content:
            "Traitement de l'operation en cours.... Veuillez patienter SVP",
        })
      );
      // updateBirthCertReporting(data)
      persistBirthCertReporting(data)
      redirectToReportingRoute();
      setTimeout(
        () =>
          dispatch(
            setLoadingApp({ loading: false, content: "Traitement terminé" })
          ),
        1000
      );
    }
  };
  const persistBirthCertReporting =(data:IBirthCertificate)=>{
    // localStorage.setItem('birthCertReporting', JSON.stringify(data))
    dispatch(setBirthCertToReporting(data))
  }
  const redirectToReportingRoute =()=>{
    router.push(redirectToPath);
    router.refresh();
  }
  const updateBirthCertReporting =(data:IBirthCertificate)=>{}


  useEffect(()=>{
    setShowModal(isOpen)
  },[isOpen])
  return (
    <Modal isOpen={showModal} handleOpen={handleOpen}>
      <FormStepper
        schema={BirthCertFormStepSchemaValidation}
        formSteps={formSteps}
        defaultValues={defaultValues}
        formTitle="Formulaire de certificat de naissance"
        formDescription="Veuillez remplir ce formulaire avant de générer le certificat"
        onSubmit={handleStoreBirthCert}
      />
    </Modal>
  );
};
