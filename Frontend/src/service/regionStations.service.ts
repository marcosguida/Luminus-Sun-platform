import { api } from "./api";

export const regionStationService = {
    // Buscar todas as region stations
    getAllRegionStations: async () => {
        const { data } = await api.get("/regionStations");
        return data;
    },

    // Buscar uma region station por ID
    getRegionStationById: async (id: string) => {
        const { data } = await api.get(`/regionStations/${id}`);
        return data;
    },

    // Buscar region stations por UF
    getRegionStationsByUf: async (uf: string) => {
        const { data } = await api.get(`/regionStations/uf/${uf}`);
        return data;
    },

    // Buscar region stations por nome
    getRegionStationsByName: async (name: string) => {
        const { data } = await api.get(`/regionStations/name/${name}`);
        return data;
    },
};
