export interface IForecastEnergyBase {
  regionId?: string;
  weatherId?: string;
  forecastDate: Date;
  irradiance: number;        // Irradiância solar estimada (W/m²)
  predictedEnergy: number;   // Energia gerada estimada (kWh)
  efficiencyRate?: number;   // Eficiência do sistema fotovoltaico (%)
  savingsEstimate?: number;  // Economia estimada (R$)
  co2Reduction?: number;     // Redução de CO₂ (kg)
  confidenceLevel?: number;  // Nível de confiança do modelo (%)
  recommendation?: string;   // Ex: “Limpar painéis”, “Alta geração esperada”
  createdAt?: Date;
  updatedAt?: Date;
}