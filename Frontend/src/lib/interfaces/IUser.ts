export enum UserRoles {
    USER = 'user',
    ADMIN = 'admin',
}

export interface IUserBase {
    name: string;
    email: string;
    passwordHash: string;
    regionId?: string;
    isActive: boolean;
    phone: string;
    role: UserRoles;
    createdAt?: Date;
    updatedAt?: Date;
}