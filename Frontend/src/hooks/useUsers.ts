"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { userService } from "@/service/user.service";
import { IUserBase } from "@/lib/interfaces/IUser";

const USER_QUERY_KEY = "users";

export function useUsers() {
    const queryClient = useQueryClient();

    // 🔹 Buscar todos os usuários
    const useListUsers = () =>
        useQuery<IUserBase[]>({
            queryKey: [USER_QUERY_KEY, "list"],
            queryFn: () => userService.getAllUsers(),
        });

    // 🔹 Buscar usuário por ID
    const useGetUserById = (id?: string) =>
        useQuery<IUserBase>({
            queryKey: [USER_QUERY_KEY, id],
            queryFn: () => userService.getUserById(id!),
            enabled: !!id,
        });

    // 🔹 Criar usuário
    const useCreateUser = () =>
        useMutation({
            mutationFn: (payload: Partial<IUserBase>) => userService.createUser(payload),
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: [USER_QUERY_KEY, "list"] });
            },
        });

    // 🔹 Atualizar usuário
    const useUpdateUser = () =>
        useMutation({
            mutationFn: ({ id, payload }: { id: string; payload: Partial<IUserBase> }) =>
                userService.updateUser(id, payload),
            onSuccess: (_, { id }) => {
                queryClient.invalidateQueries({ queryKey: [USER_QUERY_KEY, "list"] });
                queryClient.invalidateQueries({ queryKey: [USER_QUERY_KEY, id] });
            },
        });

    // 🔹 Atualizar status (isActive)
    const useUpdateUserStatus = () =>
        useMutation({
            mutationFn: ({ id, isActive }: { id: string; isActive: boolean }) =>
                userService.updateUserStatus(id, isActive),
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: [USER_QUERY_KEY, "list"] });
            },
        });

    // 🔹 Deletar usuário
    const useDeleteUser = () =>
        useMutation({
            mutationFn: (id: string) => userService.deleteUser(id),
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: [USER_QUERY_KEY, "list"] });
            },
        });

    return {
        useListUsers,
        useGetUserById,
        useCreateUser,
        useUpdateUser,
        useUpdateUserStatus,
        useDeleteUser,
    };
}
