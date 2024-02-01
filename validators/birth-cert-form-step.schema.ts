import * as yup from "yup"
import { customMessage } from "./message"

export const BirthCertFormStepSchemaValidation= yup
.object({
    name: yup.string().optional(),
    firstName: yup.string().optional(),
    lastName: yup.string().optional(),
    doctorName: yup.string().required(customMessage.required),
    motherName: yup.string().required(customMessage.required),
    motherCode: yup.string().required(customMessage.required),
    fatherName: yup.string().required(customMessage.required),
    hospitalName: yup.string().required(customMessage.required),
    dateBirth: yup.string().required(customMessage.required),
    genderChild: yup.string().required(customMessage.required),
    weightChild: yup.string().required(customMessage.required),
    sizeChild: yup.string().required(customMessage.required),
    address: yup.string().optional(),
    township: yup.string().required(customMessage.required),
    deliveryPlace: yup.string().optional(),
    dateOfIssue: yup.string().optional(),
    referenceNumber: yup.string().required(customMessage.required),
}).required()