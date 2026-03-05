export interface IWeatherBase {
  regionId?: string;
  temperature: number;              // Temperatura média do período
  feelsLike?: number;               // Sensação térmica (importante para análise térmica)
  minTemp?: number;                 // Temperatura mínima
  maxTemp?: number;                 // Temperatura máxima
  humidity: number;                 // Umidade relativa
  pressure?: number;                // Pressão atmosférica
  windSpeed?: number;               // Velocidade do vento (m/s)
  windDeg?: number;                 // Direção do vento (graus)
  clouds?: number;                  // Cobertura de nuvens (%)
  visibility?: number;              // Visibilidade em metros
  rainVolume?: number;              // Volume de chuva (mm)
  solarIrradiance?: number;         // Irradiância solar estimada (W/m²)
  description?: string;             // Descrição geral ("nublado", "céu limpo", etc.)
  source?: string;                  // Origem dos dados (OpenWeather, INMET, etc.)
  timestamp?: Date;                 // Momento da medição
  createdAt?: Date;
  updatedAt?: Date;
}