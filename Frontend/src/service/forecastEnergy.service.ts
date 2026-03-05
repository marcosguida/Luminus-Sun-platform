import { api } from "./api";
import { IForecastEnergyBase } from "@/lib/interfaces/IForestEnergy";

export const forecastEnergyService = {
    // 🔹 Buscar todas as previsões (Admin)
    getAllForecasts: async (): Promise<IForecastEnergyBase[]> => {
        const { data } = await api.get("/forecast-energy");
        return data;
    },

    // 🔹 Buscar previsões por região
    getForecastsByRegion: async (regionId: string): Promise<IForecastEnergyBase[]> => {
        const { data } = await api.get(`/forecast-energy/region/${regionId}`);
        return data;
    },

    // 🔹 Buscar previsões dos próximos 5 dias por região
    getForecastsNext5Days: async (regionId: string): Promise<IForecastEnergyBase[]> => {
        const { data } = await api.get(`/forecast-energy/region/${regionId}/next5days`);
        console.log(regionId)
        return data;
    },

    // 🔹 Gerar previsões para uma região específica
    generateForecastForRegion: async (regionId: string): Promise<{ count: number }> => {
        const { data } = await api.post(`/forecast-energy/generate/${regionId}`);
        return data;
    },

    // 🔹 Gerar previsões para todas as regiões
    generateForecastsForAllRegions: async (): Promise<{ count: number }> => {
        const { data } = await api.post(`/forecast-energy/generate-all`);
        return data;
    },
};
