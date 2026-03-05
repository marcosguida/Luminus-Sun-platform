"use client"

import React from "react"
import * as S from "./style"
import { ArrowRight, Battery, Home, Zap } from "lucide-react"

interface EnergyFlowProps {
  generation: number
  consumption: number
  batteryLevel: number
  gridStatus: "exporting" | "importing" | "balanced"
}

export function EnergyFlow({ generation, consumption, batteryLevel }: EnergyFlowProps) {
  const netPower = generation - consumption
  const isExporting = netPower > 0

  return (
    <S.Card>
      <S.CardHeader>
        <S.CardTitle>Fluxo de Energia</S.CardTitle>
      </S.CardHeader>
      <S.CardContent>
        <S.FlowContainer>

          <S.EnergyItem>
            <S.IconCircle gradient="solar">
              <Zap size={32} color="#fff" />
            </S.IconCircle>
            <S.Label>Geração</S.Label>
            <S.Value>{generation.toFixed(1)} kW</S.Value>
          </S.EnergyItem>

          <S.FlowArrow $active={generation > 0} $color="#16a34a">
            <ArrowRight size={24} />
          </S.FlowArrow>

          <S.EnergyItem>
            <S.BatteryWrapper>
              <S.IconCircle gradient="battery">
                <Battery size={32} color="#fff" />
              </S.IconCircle>
              <S.BatteryBadge>{batteryLevel}%</S.BatteryBadge>
            </S.BatteryWrapper>
            <S.Label>Bateria</S.Label>
            <S.Value>{batteryLevel}%</S.Value>
          </S.EnergyItem>

          <S.FlowArrow $active={consumption > 0} color="#3b82f6">
            <ArrowRight size={24} />
          </S.FlowArrow>

          <S.EnergyItem>
            <S.IconCircle gradient="home">
              <Home size={32} color="#fff" />
            </S.IconCircle>
            <S.Label>Consumo</S.Label>
            <S.Value>{consumption.toFixed(1)} kW</S.Value>
          </S.EnergyItem>

          <S.FlowArrow $active={true} color={isExporting ? "#16a34a" : "#f97316"} $flip={!isExporting}>
            <ArrowRight size={24} />
          </S.FlowArrow>

          <S.EnergyItem>
            <S.IconCircle gradient={isExporting ? "export" : "import"}>
              <Zap size={32} color="#fff" />
            </S.IconCircle>
            <S.Label>Rede</S.Label>
            <S.Value>{isExporting ? "Exportando" : "Importando"}</S.Value>
          </S.EnergyItem>
        </S.FlowContainer>

        <S.BalanceBox $positive={netPower >= 0}>
          <p>Saldo Líquido</p>
          <h3>
            {netPower >= 0 ? "+" : ""}
            {netPower.toFixed(1)} kW
          </h3>
        </S.BalanceBox>
      </S.CardContent>
    </S.Card>
  )
}