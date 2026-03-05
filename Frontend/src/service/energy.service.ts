import { api } from "./api";
import { IEnergyBase } from "@/lib/interfaces/IEnergy";

export const energyService = {
    // 🔹 Buscar todas as energias
    getAllEnergies: async (): Promise<IEnergyBase[]> => {
        const { data } = await api.get("/energy");
        return data;
    },

    // 🔹 Buscar energia por ID
    getEnergyById: async (id: string): Promise<IEnergyBase> => {
        const { data } = await api.get(`/energy/${id}`);
        return data;
    },

    // 🔹 Buscar energias por região
    getEnergiesByRegion: async (region: string): Promise<IEnergyBase[]> => {
        const { data } = await api.get(`/energy/region/${region}`);
        return data;
    },

    // 🔹 Buscar energias por tipo
    getEnergiesByType: async (energyType: string): Promise<IEnergyBase[]> => {
        const { data } = await api.get(`/energy/type/${energyType}`);
        return data;
    },

    // 🔹 Buscar energias por data
    getEnergiesByDate: async (date: string): Promise<IEnergyBase[]> => {
        const { data } = await api.get(`/energy/date/${date}`);
        return data;
    },

    // 🔹 Sincronizar dados com ONS
    syncONS: async (): Promise<{ success: boolean }> => {
        const { data } = await api.post("/energy/sync/ons");
        return data;
    },

    // 🔹 Relatório de performance
    getPerformanceReport: async (region: string, hours?: number) => {
        const { data } = await api.get(`/energy/report/${region}`, {
            params: { hours },
        });
        return data;
    },
};
