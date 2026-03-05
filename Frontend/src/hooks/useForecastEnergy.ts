"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { forecastEnergyService } from "@/service/forecastEnergy.service";
import { IForecastEnergyBase } from "@/lib/interfaces/IForestEnergy";

const FORECAST_QUERY_KEY = "forecastEnergy";

export function useForecastEnergy() {
  const queryClient = useQueryClient();

  // 🔹 Listar todas as previsões
  const useAllForecasts = () =>
    useQuery<IForecastEnergyBase[]>({
      queryKey: [FORECAST_QUERY_KEY, "all"],
      queryFn: () => forecastEnergyService.getAllForecasts(),
    });

  // 🔹 Buscar previsões de uma região
  const useForecastsByRegion = (regionId?: string) =>
    useQuery<IForecastEnergyBase[]>({
      queryKey: [FORECAST_QUERY_KEY, "region", regionId],
      queryFn: () => forecastEnergyService.getForecastsByRegion(regionId!),
      enabled: !!regionId,
    });

  // 🔹 Buscar previsões dos próximos 5 dias
  const useForecastNext5Days = (regionId?: string) =>
    useQuery<IForecastEnergyBase[]>({
      queryKey: [FORECAST_QUERY_KEY, "region", regionId, "next5days"],
      queryFn: () => forecastEnergyService.getForecastsNext5Days(regionId!),
      enabled: !!regionId,
    });

  // 🔹 Gerar previsões para uma região
  const useGenerateForecastForRegion = () =>
    useMutation({
      mutationFn: (regionId: string) =>
        forecastEnergyService.generateForecastForRegion(regionId),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [FORECAST_QUERY_KEY] });
      },
    });

  // 🔹 Gerar previsões para todas as regiões
  const useGenerateForecastsForAllRegions = () =>
    useMutation({
      mutationFn: () => forecastEnergyService.generateForecastsForAllRegions(),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: [FORECAST_QUERY_KEY] });
      },
    });

  return {
    useAllForecasts,
    useForecastsByRegion,
    useForecastNext5Days,
    useGenerateForecastForRegion,
    useGenerateForecastsForAllRegions,
  };
}
