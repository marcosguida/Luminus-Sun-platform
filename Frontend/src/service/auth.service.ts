import { AuthResponse, LoginRequest, RegisterRequest } from "@/lib/interfaces/IAuth";
import { api } from "./api";
import { IUserBase } from "@/lib/interfaces/IUser";

export const authService = {
    // 🔹 Login (gera token + salva no backend)
    login: async (payload: LoginRequest): Promise<AuthResponse> => {
        const { data } = await api.post("/auth/login", payload);
        localStorage.setItem("userData", JSON.stringify(data)); // salva token + usuário
        api.defaults.headers.common.Authorization = `Bearer ${data.token}`;
        return data;
    },

    // 🔹 Registro de novo usuário
    register: async (payload: RegisterRequest): Promise<IUserBase> => {
        const { data } = await api.post("/auth/register", payload);
        return data;
    },

    // 🔹 Logout (remove cookie e localStorage)
    logout: async (): Promise<{ message: string }> => {
        const { data } = await api.post("/auth/logout");
        localStorage.removeItem("userData");
        delete api.defaults.headers.common.Authorization;
        return data;
    },

    // 🔹 Recuperar usuário logado do localStorage
    getStoredUser: (): IUserBase | null => {
        const userData = localStorage.getItem("userData");
        if (!userData) return null;
        try {
            const parsed = JSON.parse(userData);
            return parsed.user || null;
        } catch {
            return null;
        }
    },

    // 🔹 Recuperar token do localStorage
    getToken: (): string | null => {
        const userData = localStorage.getItem("userData");
        if (!userData) return null;
        try {
            const parsed = JSON.parse(userData);
            return parsed.token || null;
        } catch {
            return null;
        }
    },
};
