export interface IFormStepValue {
    label: string;
    value?: string;
  }
  export interface IFormField {
    name: string;
    labelText: string;
    labelRequired?: boolean,
    isReadonly?: boolean;
    type: 'text'|'select'|'radio'|'check'|'date';
    placeholder: string;
    id: string;
    values?: IFormStepValue[];
  }
  
  export interface IFormStep {
    id: number;
    formFields: IFormField[];
    title?: string;
    formFieldClass?:string
  }
  