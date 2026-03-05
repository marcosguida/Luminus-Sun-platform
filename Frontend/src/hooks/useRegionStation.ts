import { useQuery } from "@tanstack/react-query";
import { regionStationService } from "@/service/regionStations.service";
import { IRegionStationBase } from "@/lib/interfaces/IRegionStation";

const REGION_STATION_QUERY_KEY = "regionStations";

export function useRegionStations() {
    const useGetRegionStations = () =>
        useQuery<IRegionStationBase[]>({
            queryKey: [REGION_STATION_QUERY_KEY, "list"],
            queryFn: () => regionStationService.getAllRegionStations(),
        });

    const useGetRegionStationById = (id?: string) =>
        useQuery<IRegionStationBase>({
            queryKey: [REGION_STATION_QUERY_KEY, id],
            queryFn: () => regionStationService.getRegionStationById(id!),
            enabled: !!id,
        });

    const useGetRegionStationsByUf = (uf: string) =>
        useQuery<IRegionStationBase[]>({
            queryKey: [REGION_STATION_QUERY_KEY, "uf", uf],
            queryFn: () => regionStationService.getRegionStationsByUf(uf),
            enabled: !!uf,
        });

    const useGetRegionStationsByName = (name: string) =>
        useQuery<IRegionStationBase[]>({
            queryKey: [REGION_STATION_QUERY_KEY, "name", name],
            queryFn: () => regionStationService.getRegionStationsByName(name),
            enabled: !!name,
        });

    return {
        useGetRegionStations,
        useGetRegionStationById,
        useGetRegionStationsByUf,
        useGetRegionStationsByName,
    };
}
