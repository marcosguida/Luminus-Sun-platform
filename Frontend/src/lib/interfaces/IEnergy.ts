export enum BrazilianRegion {
    NORTE = "norte",
    NORDESTE = "nordeste",
    CENTRO_OESTE = "centro-oeste",
    SUDESTE = "sudeste",
    SUL = "sul",
}

export enum EnergyType {
    EOLICA = "eolica",
    SOLAR = "solar",
    NUCLEAR = "nuclear",
    HIDRAULICA = "hidraulica",
    TERMICA = "termica",
}

export interface IEnergyBase {
    regionName?: BrazilianRegion;   // Nome da região (enum)
    energyType: EnergyType;         // Tipo de fonte energética
    generationMW: number;           // Potência gerada (MW)
    source?: string;                // Fonte dos dados (ex: ONS API)
    timestamp?: Date;               // Momento da coleta
    createdAt?: Date;
    updatedAt?: Date;
}