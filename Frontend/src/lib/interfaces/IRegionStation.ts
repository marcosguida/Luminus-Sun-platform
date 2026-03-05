export interface IRegionStationBase {
    name: string;
    uf: string;
    latitude?: number;
    longitude?: number;
    stationCode?: string;
    stationType?: string;
    status?: string;
    altitude?: number;
    location: {
        type: "Point";
        coordinates: number[];
    };
    createdAt?: Date;
    updatedAt?: Date;
}