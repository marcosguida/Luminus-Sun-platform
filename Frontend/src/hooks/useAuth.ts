"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authService } from "@/service/auth.service";
import { IUserBase } from "@/lib/interfaces/IUser";

const AUTH_QUERY_KEY = "auth";

export function useAuth() {
    const queryClient = useQueryClient();

    // 🔹 Login
    const useLogin = () =>
        useMutation({
            mutationFn: authService.login,
            onSuccess: (data) => {
                queryClient.setQueryData([AUTH_QUERY_KEY, "user"], data.user);
            },
        });

    // 🔹 Registro
    const useRegister = () =>
        useMutation({
            mutationFn: authService.register,
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: [AUTH_QUERY_KEY, "user"] });
            },
        });

    // 🔹 Logout
    const useLogout = () =>
        useMutation({
            mutationFn: authService.logout,
            onSuccess: () => {
                queryClient.removeQueries({ queryKey: [AUTH_QUERY_KEY, "user"] });
            },
        });

    // 🔹 Recuperar usuário logado
    const getUser = (): IUserBase | null => {
        return authService.getStoredUser();
    };

    // 🔹 Recuperar token JWT
    const getToken = (): string | null => {
        return authService.getToken();
    };

    return {
        useLogin,
        useRegister,
        useLogout,
        getUser,
        getToken,
    };
}
