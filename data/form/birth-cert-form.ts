import { IFormStep, IFormStepValue } from "@/types/form-step";
export const childWeights:IFormStepValue[] =[
  {value :'100g', label: "100g"}
]
export const childGenders =[
  {value:'F', label: "F"},
  {value:'M', label: "M"}
]
 export const birthCertFormFields:IFormStep[]= [
  {
    id: 1,
    title: " 1. Informations sur l'enfant",
    formFieldClass: "grid grid-cols-2 w-full gap-6",
    formFields: [
      {
        name: 'name',
        labelText: 'Nom',
        labelRequired: false,
        type: 'text',
        isReadonly: true,
        placeholder: 'Saisissez le nom',
        id: 'name',

      },
      {
        name: 'lastName',
        labelText: 'Postnom',
        labelRequired: false,
        type: 'text',
        isReadonly: true,
        placeholder: 'Saisissez le postnom',
        id: 'lastName',
      },
      {
        name: 'firstName',
        labelText: 'Prénom',
        labelRequired: false,
        type: 'text',
        isReadonly: true,
        placeholder: 'Saisissez le prénom',
        id: 'firstName',
      },
      {
        name: 'dateBirth',
        labelText: 'Date de naissance',
        labelRequired: false,
        type: 'date',
        isReadonly: false,
        placeholder: 'Saisissez la date de naissance',
        id: 'dateBirth',
      },
      {
        name: 'genderChild',
        labelText: 'Sexe l\'enfant',
        labelRequired: false,
        type: 'select',
        isReadonly: true,
        placeholder: '',
        id: 'genderChild',
        values: childGenders
      },
      {
        name: 'weightChild',
        labelText: 'Poids de l\'enfant',
        labelRequired: false,
        type: 'select',
        isReadonly:false,
        placeholder: 'Sélectionnez le poids de l\'enfant',
        id: 'weightChild',
        values: childWeights
      },
      {
        name: 'sizeChild',
        labelText: 'Taille de l\'enfant',
        labelRequired: false,
        type: 'text',
        isReadonly: false,
        placeholder: 'Sélectionnez la taille de l\'enfant',
        id: 'sizeChild',
        values: childGenders
      },
     
    ],
  },
  {
    id: 2,
    title: " Informations sur le papa de l'enfant",
    formFieldClass: "grid grid-cols-1 w-full gap-6",
    formFields: [
      {
        name: 'fatherName',
        labelText: 'Nom du père',
        labelRequired: true,
        type: 'text',
        placeholder: 'Saisissez le nom du père',
        id: 'fatherName',
      },
      {
        name: 'fatherLastName',
        labelText: 'Postnom du père',
        labelRequired: true,
        type: 'text',
        placeholder: 'Saisissez le nom du père',
        id: 'fatherLastName',
      },
      {
        name: 'fatherProfession',
        labelText: 'Profession',
        labelRequired: true,
        type: 'text',
        placeholder: 'Saisissez la profession du père',
        id: 'fatherProfession',
      },
    ],
  },
  {
    id: 3,
    title: " Informations sur le Docteur ou Signateur",
    formFieldClass: "grid grid-cols-2 w-full gap-6",
    formFields: [
     
      {
        name: 'doctorName',
        labelText: 'Nom ',
        labelRequired: true,
        type: 'text',
        placeholder: 'Saisissez le nom ',
        id: 'doctorName',
      },
      
      {
        name: 'doctorLastName',
        labelText: 'Postnom ',
        labelRequired: true,
        type: 'text',
        placeholder: 'Saisissez le nom ',
        id: 'doctorLastName',
      },
      
      {
        name: 'doctorFirstName',
        labelText: 'Prénom ',
        labelRequired: true,
        type: 'text',
        placeholder: 'Saisissez le nom ',
        id: 'doctorFirstName',
      },
      {
        name: 'doctorTitle',
        labelText: 'Titre ',
        labelRequired: true,
        type: 'text',
        placeholder: 'Saisissez votre titre ',
        id: 'doctorTitle',
      },
     
      {
        name: 'doctorFunction',
        labelText: 'Fonction ',
        labelRequired: true,
        type: 'text',
        placeholder: 'Saisissez votre fonction ',
        id: 'doctorFunction',
      },
     
      {
        name: 'hospitalName',
        labelText: 'Nom de l\'hôpital',
        labelRequired: true,
        type: 'text',
        placeholder: 'Saisissez le nom de l\'hôpital',
        id: 'hospitalName',
      },
    ],
  },
   {
    id: 3,
    title: " Informations sur le Docteur ou Signateur",
    formFieldClass: "grid grid-cols-2 w-full gap-6",
    formFields: [
     
      {
        name: 'doctorName',
        labelText: 'Nom ',
        labelRequired: true,
        type: 'text',
        placeholder: 'Saisissez le nom ',
        id: 'doctorName',
      },
      
      {
        name: 'doctorLastName',
        labelText: 'Postnom ',
        labelRequired: true,
        type: 'text',
        placeholder: 'Saisissez le nom ',
        id: 'doctorLastName',
      },
      
      {
        name: 'doctorFirstName',
        labelText: 'Prénom ',
        labelRequired: true,
        type: 'text',
        placeholder: 'Saisissez le nom ',
        id: 'doctorFirstName',
      },
      {
        name: 'doctorTitle',
        labelText: 'Titre ',
        labelRequired: true,
        type: 'text',
        placeholder: 'Saisissez votre titre ',
        id: 'doctorTitle',
      },
     
      {
        name: 'doctorFunction',
        labelText: 'Fonction ',
        labelRequired: true,
        type: 'text',
        placeholder: 'Saisissez votre fonction ',
        id: 'doctorFunction',
      },
     
      {
        name: 'hospitalName',
        labelText: 'Nom de l\'hôpital',
        labelRequired: true,
        type: 'text',
        placeholder: 'Saisissez le nom de l\'hôpital',
        id: 'hospitalName',
      },
    ],
  },

];