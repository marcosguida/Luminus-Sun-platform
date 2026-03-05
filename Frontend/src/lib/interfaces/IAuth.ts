import { IUserBase } from "./IUser";

export interface LoginRequest {
    email: string;
    password: string;
}

export interface RegisterRequest {
    email: string;
    password: string;
    name: string;
    phone?: string;
    regionId?: string;
}

export interface AuthResponse {
    token: string;
    user: IUserBase;
}
