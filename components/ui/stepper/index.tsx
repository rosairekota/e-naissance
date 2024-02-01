import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { SelectInput } from "../inputs/SelectInput";
import { IFormStep } from "@/types/form-step";
import { TextInput } from "../inputs/TextInput";
import { Button } from "../button";
import { LoginSpinner as  Spinner } from "../Spinner";

type FormStepperProps = {
  onSubmit: SubmitHandler<any>;
  defaultValues?: any;
  formSteps: IFormStep[];
  schema: any;
  formTitle: string;
  formDescription: string;
  formFieldClass?: string;
  isError?: boolean;
};

export const FormStepper: React.FC<FormStepperProps> = ({
  defaultValues,
  onSubmit,
  formSteps,
  formTitle,
  schema,
  formDescription,
  isError,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid , isLoading},
  } = useForm<any>({
    resolver: yupResolver(schema),
    defaultValues,
  });
  const [currentStep, setCurrentStep] = useState(0);
  

  const handleNextStep = (e:any) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentStep((prevStep) => prevStep + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const submitStep = () => {
    return currentStep === formSteps.length - 1;
  };
  const isDisabled = () => {
    return currentStep < 1;
  };
  const handlePrevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };
  const currentStepFormFields = formSteps[currentStep]?.formFields || [];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-1 overflow-hidden h-full max-w-full">
      <section className="flex flex-col px-6">
        <div className="flex flex-col gap-4 items-center">
          <h2 className="text-2xl font-semibold uppercase leading-tight text-primary-900/60 mt-10 lg:mt-0 text-center">
            {formTitle}
          </h2>
        <div className="flex flex-col gap-2 items-center">
        <h3 className="text-xl font-satoshi uppercase leading-tight text-primary-900/60 lg:mt-0 text-center mt-24">
            {formSteps[currentStep]?.title}
          </h3>
          <p>{formDescription}</p>
        </div>
        </div>
        <div className="pb-12"></div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
          <div className="space-y-4">
            <div className={formSteps[currentStep]?.formFieldClass}>
              {formSteps[currentStep]?.formFields?.map((formField, index) => {
                if (formField.type === "text" || formField.type === "date") {
                  return (
                      <TextInput
                        key={formField.id}
                        labelText={formField.labelText}
                        labelRequired={formField.labelRequired}
                        control={control}
                        name={formField.name}
                        errors={errors}
                        placeholder={formField.placeholder}
                        className="w-full"
                        type={formField.type}
                        isReadonly={formField.isReadonly}
                      />
                  );
                } else if (formField.type === "select") {
                  return (
                      <SelectInput
                        key={formField.id}
                        labelText={formField.labelText}
                        control={control}
                        name={formField.name}
                        errors={errors}
                        placeholder={formField.placeholder}
                        items={formField.values}
                      />
                  );
                }
              })}
            </div>

            <div className="flex justify-between items-center gap-90 pt-12">
              <Button
                onClick={handlePrevStep}
                disabled={isDisabled()}
                className="inline-flex items-center justify-center  text-base font-semibold  transition-all duration-200 bg-primary-900/90 text-white w-15 h-5 py-4 px-12 mb-3 hover:bg-primary-900  border border-transparent rounded-md focus:outline-none hover:bg-primary-900 focus:bg-primary-900 disabled:bg-primary-800/50"
              >
                Précédent
              </Button>
              {!submitStep() ? (
                <Button
                  onClick={handleNextStep}
                  className="w-15 h-5 py-4 px-12 mb-3 inline-flex items-center justify-center  text-base font-semibold text-white transition-all duration-200 bg-primary-800 border border-transparent rounded-md focus:outline-none hover:bg-primary-900 focus:bg-primary-900 disabled:bg-primary-800/50"
                >
                  Suivant
                </Button>
              ) : (
                <Button
                  type="submit"
                 
                  className="w-15 h-5 py-4 px-12 mb-3 inline-flex items-center justify-center  text-base font-semibold text-white transition-all duration-200 bg-primary-800 border border-transparent rounded-md focus:outline-none hover:bg-primary-900 focus:bg-primary-900 disabled:bg-primary-800/50"
                >    {isLoading ? <Spinner /> : "Valider"}
                </Button>
              )}
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};
