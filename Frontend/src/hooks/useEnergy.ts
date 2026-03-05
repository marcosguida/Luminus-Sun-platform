"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { energyService } from "@/service/energy.service";
import { IEnergyBase } from "@/lib/interfaces/IEnergy";

const ENERGY_QUERY_KEY = "energy";

export function useEnergy() {
    const queryClient = useQueryClient();

    // 🔹 Listar todas as energias
    const useListEnergies = () =>
        useQuery<IEnergyBase[]>({
            queryKey: [ENERGY_QUERY_KEY, "list"],
            queryFn: () => energyService.getAllEnergies(),
        });

    // 🔹 Buscar energia por ID
    const useGetEnergyById = (id?: string) =>
        useQuery<IEnergyBase>({
            queryKey: [ENERGY_QUERY_KEY, id],
            queryFn: () => energyService.getEnergyById(id!),
            enabled: !!id,
        });

    // 🔹 Buscar energias por região
    const useGetEnergiesByRegion = (region?: string) =>
        useQuery<IEnergyBase[]>({
            queryKey: [ENERGY_QUERY_KEY, "region", region],
            queryFn: () => energyService.getEnergiesByRegion(region!),
            enabled: !!region,
        });

    // 🔹 Buscar energias por tipo
    const useGetEnergiesByType = (type?: string) =>
        useQuery<IEnergyBase[]>({
            queryKey: [ENERGY_QUERY_KEY, "type", type],
            queryFn: () => energyService.getEnergiesByType(type!),
            enabled: !!type,
        });

    // 🔹 Buscar energias por data
    const useGetEnergiesByDate = (date?: string) =>
        useQuery<IEnergyBase[]>({
            queryKey: [ENERGY_QUERY_KEY, "date", date],
            queryFn: () => energyService.getEnergiesByDate(date!),
            enabled: !!date,
        });

    // 🔹 Sincronizar dados com ONS
    const useSyncONS = () =>
        useMutation({
            mutationFn: () => energyService.syncONS(),
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: [ENERGY_QUERY_KEY, "list"] });
            },
        });

    // 🔹 Relatório de performance energética
    const useGetPerformanceReport = (region?: string, hours?: number) =>
        useQuery({
            queryKey: [ENERGY_QUERY_KEY, "report", region, hours],
            queryFn: () => energyService.getPerformanceReport(region!, hours),
            enabled: !!region,
        });

    return {
        useListEnergies,
        useGetEnergyById,
        useGetEnergiesByRegion,
        useGetEnergiesByType,
        useGetEnergiesByDate,
        useSyncONS,
        useGetPerformanceReport,
    };
}
