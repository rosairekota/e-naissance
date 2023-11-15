import { IOrganisation } from "./organisation";

export interface IMerchant{
    id?: string;
    name?: string;
    usersCount?: number;
    organisation?: IOrganisation
    status?: string
}