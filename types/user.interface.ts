export interface IUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string
    password: string
    salt: string;
    birthDate: string;
    address: string;
    city: string;
    state: string;
    country: string;
    imageUrl: string;
    accessToken: string;
    refreshToken: string;
    isActive: boolean;
    isMerchant: boolean;
    roles: IUserRole[],
    lastLogin: string;
    phone: string;
    NbFailedAttempts: number;
    temporaryLockedAt: string;
    merchantId: string;
    userSupportId: string;
    organizationId: string;
}

export interface IUserRole{
    id: string;
    role: Role;
  
}
export interface Role{
    id:string;
    name: string; 
    slug: string
}