// Data types for SolarTrack platform

export interface SolarPanel {
  id: string
  name: string
  capacity: number // kW
  voltage: number // V
  current: number // A
  power: number // W
  efficiency: number // %
  temperature: number // °C
  status: string;
  location: string
  installDate: string
}

export interface EnergyData {
  timestamp: string
  generation: number // kWh
  consumption: number // kWh
  gridExport: number // kWh
  gridImport: number // kWh
  batteryCharge: number // %
  batteryPower: number // W (positive = charging, negative = discharging)
}

export interface IoTDevice {
  id: string
  name: string
  type: "sensor" | "actuator" | "smart_plug" | "battery" | "irrigation"
  status: "online" | "offline"
  power: number // W
  isActive: boolean
  lastUpdate: string
  location: string
}

export interface AutomationRule {
  id: string
  name: string
  enabled: boolean
  trigger: {
    type: "time" | "energy_threshold" | "device_status"
    value: string | number
  }
  action: {
    deviceId: string
    command: "turn_on" | "turn_off" | "set_value"
    value?: number
  }
}

export interface Alert {
  id: string
  type: "info" | "warning" | "error"
  message: string
  timestamp: string
  resolved: boolean
}

export interface DashboardStats {
  currentGeneration: number // kW
  currentConsumption: number // kW
  todayGeneration: number // kWh
  todayConsumption: number // kWh
  monthlyGeneration: number // kWh
  monthlyConsumption: number // kWh
  savings: number // currency
  co2Avoided: number // kg
  batteryLevel: number // %
  gridStatus: "exporting" | "importing" | "balanced"
}
