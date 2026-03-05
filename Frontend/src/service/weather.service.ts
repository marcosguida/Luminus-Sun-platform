import { api } from "./api";
import { IWeatherBase } from "@/lib/interfaces/IWeather";

export const weatherService = {
    // 🔹 Buscar todos os registros climáticos
    getAllWeather: async (): Promise<IWeatherBase[]> => {
        const { data } = await api.get("/weather");
        return data;
    },

    // 🔹 Buscar registro por ID
    getWeatherById: async (id: string): Promise<IWeatherBase> => {
        const { data } = await api.get(`/weather/${id}`);
        return data;
    },

    // 🔹 Buscar clima por região
    getWeatherByRegion: async (regionId: string): Promise<IWeatherBase[]> => {
        const { data } = await api.get(`/weather/region/${regionId}`);
        return data;
    },

    // 🔹 Criar novo registro de clima
    createWeather: async (payload: Partial<IWeatherBase>): Promise<IWeatherBase> => {
        const { data } = await api.post("/weather", payload);
        return data;
    },

    // 🔹 Atualizar clima existente
    updateWeather: async (id: string, payload: Partial<IWeatherBase>): Promise<IWeatherBase> => {
        const { data } = await api.put(`/weather/${id}`, payload);
        return data;
    },

    // 🔹 Deletar registro
    deleteWeather: async (id: string): Promise<{ deletedCount: number }> => {
        const { data } = await api.delete(`/weather/${id}`);
        return data;
    },

};
