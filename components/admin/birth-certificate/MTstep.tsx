// MultiStepForm.tsx

import { TextInput } from '@/components/ui/inputs/TextInput';
import { Modal } from '@/components/ui/modal';
import { BirthCertFormStepSchemaValidation } from '@/validators/birth-cert-form-step.schema';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm, SubmitHandler, useFieldArray } from 'react-hook-form';

type StepFields = {
  name: string;
  lastName: string;
  firstName: string;
  genderChild: string;
  dateBirth: string;
  deliveryPlace: string;
};

type Step = {
  label: string;
  fields: keyof StepFields[]|any[];
};

type FormData = {
  steps: Step[]|any[];
} & StepFields;

type ModalProps = {
    handleOpen: (e: any) => void;
    isOpen: boolean;
    defaultValues?: any;
  };

const MultiStepForm: React.FC<ModalProps> = ({isOpen,
    handleOpen,
    defaultValues}) => {
const { control, handleSubmit, register, setValue, watch, formState:{errors, isValid} } = useForm<FormData>({resolver: yupResolver<any>(BirthCertFormStepSchemaValidation),defaultValues });
 
 
  const initialSteps: Step[]|any[] = [
    { label: 'Step 1', fields: [ {
        name: 'name',
        labelText: 'Nom',
        type: 'text',
        placeholder: 'Saisissez le nom',
        id: 'name',

      },
      {
        name: 'lastName',
        labelText: 'Postnom',
        type: 'text',
        placeholder: 'Saisissez le postnom',
        id: 'lastName',
      },
      {
        name: 'firstName',
        labelText: 'Prénom',
        type: 'text',
        placeholder: 'Saisissez le prénom',
        id: 'firstName',
      },
      {
        name: 'dateBirth',
        labelText: 'Date de naissance',
        type: 'date',
        placeholder: 'Saisissez la date de naissance',
        id: 'dateBirth',
      },
      {
        name: 'genderChild',
        labelText: 'Genre de l\'enfant',
        type: 'radio',
        placeholder: '',
        id: 'genderChild',
      },] },
    { label: 'Step 2', fields: [ {
        name: 'fatherName',
        labelText: 'Nom du père',
        type: 'text',
        placeholder: 'Saisissez le nom du père',
        id: 'fatherName',
      },
      {
        name: 'doctorName',
        labelText: 'Nom du médecin',
        type: 'text',
        placeholder: 'Saisissez le nom du médecin',
        id: 'doctorName',
      },
      {
        name: 'hospitalName',
        labelText: 'Nom de l\'hôpital',
        type: 'text',
        placeholder: 'Saisissez le nom de l\'hôpital',
        id: 'hospitalName',
      },] },
  ];

  const [currentStep, setCurrentStep] = useState(0);



  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    setCurrentStep(Math.min(currentStep + 1, initialSteps.length - 1));
  };

  const currentStepFields = initialSteps[currentStep]?.fields || [];


  return (
    <Modal isOpen={isOpen} handleOpen={handleOpen} >
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className={`mt-4`}>
        <h2 className="text-lg font-semibold">{initialSteps[currentStep]?.label}</h2>
        {currentStepFields.map((fieldName:any) => (
          <div key={fieldName.id} className="mt-2.5">
            <TextInput
                        labelText={fieldName.labelText}
                        control={control}
                        name={fieldName.name}
                        errors={errors}
                        placeholder={fieldName.placeholder}
                        className="w-full"
                        type={fieldName.type}
                      />
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between">
        {currentStep > 0 && (
          <button
            type="button"
            onClick={() => setCurrentStep(currentStep - 1)}
            className="w-15 h-5 py-4 px-12 mb-3 inline-flex items-center justify-center  text-base font-semibold text-white transition-all duration-200 bg-primary-800 border border-transparent rounded-md focus:outline-none hover:bg-primary-900 focus:bg-primary-900 disabled:bg-primary-800/50"
          >
            Previous
          </button>
        )}
        {currentStep < initialSteps.length - 1 && (
          <button
            type="button"
            onClick={() => setCurrentStep(currentStep + 1)}
            className="w-15 h-5 py-4 px-12 mb-3 inline-flex items-center justify-center  text-base font-semibold text-white transition-all duration-200 bg-primary-800 border border-transparent rounded-md focus:outline-none hover:bg-primary-900 focus:bg-primary-900 disabled:bg-primary-800/50"
          >
            Next
          </button>
        )}
        {currentStep === initialSteps.length - 1 && (
          <button type="submit" className="w-15 h-5 py-4 px-12 mb-3 inline-flex items-center justify-center  text-base font-semibold text-white transition-all duration-200 bg-primary-800 border border-transparent rounded-md focus:outline-none hover:bg-primary-900 focus:bg-primary-900 disabled:bg-primary-800/50">
            Save
          </button>
        )}
       
      </div>
     
    </form>
    </Modal>
  );
};

export default MultiStepForm;
