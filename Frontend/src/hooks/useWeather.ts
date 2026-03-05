"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { weatherService } from "@/service/weather.service";
import { IWeatherBase } from "@/lib/interfaces/IWeather";

const WEATHER_QUERY_KEY = "weather";

export function useWeather() {
    const queryClient = useQueryClient();

    // 🔹 Listar todos os registros
    const useListWeather = () =>
        useQuery<IWeatherBase[]>({
            queryKey: [WEATHER_QUERY_KEY, "list"],
            queryFn: () => weatherService.getAllWeather(),
        });

    // 🔹 Buscar clima por ID
    const useGetWeatherById = (id?: string) =>
        useQuery<IWeatherBase>({
            queryKey: [WEATHER_QUERY_KEY, id],
            queryFn: () => weatherService.getWeatherById(id!),
            enabled: !!id,
        });

    // 🔹 Buscar clima por região
    const useGetWeatherByRegion = (regionId?: string) =>
        useQuery<IWeatherBase[]>({
            queryKey: [WEATHER_QUERY_KEY, "region", regionId],
            queryFn: () => weatherService.getWeatherByRegion(regionId!),
            enabled: !!regionId,
        });

    // 🔹 Criar novo clima
    const useCreateWeather = () =>
        useMutation({
            mutationFn: (payload: Partial<IWeatherBase>) =>
                weatherService.createWeather(payload),
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: [WEATHER_QUERY_KEY, "list"] });
            },
        });

    // 🔹 Atualizar clima
    const useUpdateWeather = () =>
        useMutation({
            mutationFn: ({ id, payload }: { id: string; payload: Partial<IWeatherBase> }) =>
                weatherService.updateWeather(id, payload),
            onSuccess: (_, { id }) => {
                queryClient.invalidateQueries({ queryKey: [WEATHER_QUERY_KEY, "list"] });
                queryClient.invalidateQueries({ queryKey: [WEATHER_QUERY_KEY, id] });
            },
        });

    // 🔹 Deletar clima
    const useDeleteWeather = () =>
        useMutation({
            mutationFn: (id: string) => weatherService.deleteWeather(id),
            onSuccess: () => {
                queryClient.invalidateQueries({ queryKey: [WEATHER_QUERY_KEY, "list"] });
            },
        });

    return {
        useListWeather,
        useGetWeatherById,
        useGetWeatherByRegion,
        useCreateWeather,
        useUpdateWeather,
        useDeleteWeather,
    };
}
