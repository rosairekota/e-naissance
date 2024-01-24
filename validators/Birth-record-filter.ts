import * as yup from "yup"
import { customMessage } from "./message"

export const BirthRecordFilterSchemaValidation= yup
  .object({
    filter: yup.string().required(customMessage.required),
  }).required()