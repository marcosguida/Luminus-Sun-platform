import type { SolarPanel, EnergyData, IoTDevice, AutomationRule, Alert, DashboardStats } from "./types"

export const mockPanels: SolarPanel[] = [
  {
    id: "1",
    name: "Painel Solar 1",
    capacity: 5.5,
    voltage: 48.2,
    current: 8.5,
    power: 4100,
    efficiency: 94.5,
    temperature: 42,
    status: "online",
    location: "Telhado Norte",
    installDate: "2023-06-15",
  },
  {
    id: "2",
    name: "Painel Solar 2",
    capacity: 5.5,
    voltage: 47.8,
    current: 8.2,
    power: 3920,
    efficiency: 93.2,
    temperature: 44,
    status: "online",
    location: "Telhado Sul",
    installDate: "2023-06-15",
  },
  {
    id: "3",
    name: "Painel Solar 3",
    capacity: 5.5,
    voltage: 48.5,
    current: 7.8,
    power: 3783,
    efficiency: 91.8,
    temperature: 46,
    status: "warning",
    location: "Telhado Leste",
    installDate: "2023-08-20",
  },
]

export const mockEnergyData: EnergyData[] = Array.from({ length: 24 }, (_, i) => ({
  timestamp: `${String(i).padStart(2, "0")}:00`,
  generation: Math.max(0, Math.sin(((i - 6) * Math.PI) / 12) * 8 + Math.random() * 2),
  consumption: 2 + Math.random() * 3 + (i >= 18 || i <= 6 ? 1 : 0),
  gridExport: Math.max(0, Math.random() * 2),
  gridImport: Math.max(0, Math.random() * 1.5),
  batteryCharge: 60 + Math.random() * 30,
  batteryPower: (Math.random() - 0.5) * 2000,
}))

export const mockDevices: IoTDevice[] = [
  {
    id: "d1",
    name: "Ar Condicionado Sala",
    type: "smart_plug",
    status: "online",
    power: 1200,
    isActive: true,
    lastUpdate: new Date().toISOString(),
    location: "Sala",
  },
  {
    id: "d2",
    name: "Bomba de Irrigação",
    type: "irrigation",
    status: "online",
    power: 750,
    isActive: false,
    lastUpdate: new Date().toISOString(),
    location: "Jardim",
  },
  {
    id: "d3",
    name: "Bateria Principal",
    type: "battery",
    status: "online",
    power: -500,
    isActive: true,
    lastUpdate: new Date().toISOString(),
    location: "Garagem",
  },
  {
    id: "d4",
    name: "Sensor Temperatura",
    type: "sensor",
    status: "online",
    power: 5,
    isActive: true,
    lastUpdate: new Date().toISOString(),
    location: "Telhado",
  },
]

export const mockRules: AutomationRule[] = [
  {
    id: "r1",
    name: "Irrigação Automática",
    enabled: true,
    trigger: { type: "time", value: "06:00" },
    action: { deviceId: "d2", command: "turn_on" },
  },
  {
    id: "r2",
    name: "Desligar AC à Noite",
    enabled: true,
    trigger: { type: "time", value: "22:00" },
    action: { deviceId: "d1", command: "turn_off" },
  },
]

export const mockAlerts: Alert[] = [
  {
    id: "a1",
    type: "warning",
    message: "Painel Solar 3 com eficiência abaixo do esperado",
    timestamp: new Date(Date.now() - 3600000).toISOString(),
    resolved: false,
  },
  {
    id: "a2",
    type: "info",
    message: "Geração de energia atingiu pico diário",
    timestamp: new Date(Date.now() - 7200000).toISOString(),
    resolved: true,
  },
]

export const mockDashboardStats: DashboardStats = {
  currentGeneration: 11.8,
  currentConsumption: 4.2,
  todayGeneration: 68.5,
  todayConsumption: 42.3,
  monthlyGeneration: 1847,
  monthlyConsumption: 1205,
  savings: 842.5,
  co2Avoided: 1234,
  batteryLevel: 78,
  gridStatus: "exporting",
}
