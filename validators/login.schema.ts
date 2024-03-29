
import { IsNotEmpty } from 'class-validator';
import * as yup from "yup"
import { customMessage } from "./message"

export const loginSchemaValidation = yup
  .object({
    username: yup.string().required(customMessage.required),
    password: yup.string().required(customMessage.required),
    // firstName: yup.string().required(),
    // age: yup.number().positive().integer().required(),
  }).required()


  export class LoginDto{
    @IsNotEmpty({message:customMessage.required})
    username: string

    @IsNotEmpty({message:customMessage.required})
    password:string
  }