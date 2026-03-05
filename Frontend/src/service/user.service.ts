import { api } from "./api";
import { IUserBase } from "@/lib/interfaces/IUser";

export const userService = {
    getAllUsers: async (): Promise<IUserBase[]> => {
        const { data } = await api.get("/users");
        return data;
    },

    getUserById: async (id: string): Promise<IUserBase> => {
        const { data } = await api.get(`/users/${id}`);
        return data;
    },

    createUser: async (payload: Partial<IUserBase>): Promise<IUserBase> => {
        const { data } = await api.post("/users", payload);
        return data;
    },

    updateUser: async (id: string, payload: Partial<IUserBase>): Promise<IUserBase> => {
        const { data } = await api.put(`/users/${id}`, payload);
        return data;
    },

    updateUserStatus: async (id: string, isActive: boolean): Promise<IUserBase> => {
        const { data } = await api.put(`/users/status/${id}`, { isActive });
        return data;
    },

    deleteUser: async (id: string): Promise<{ deletedCount: number }> => {
        const { data } = await api.delete(`/users/${id}`);
        return data;
    },
};
