"use client"

import React from "react";
import * as S from "./style";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import type { EnergyData } from "@/lib/types"

interface EnergyChartProps {
  data: EnergyData[]
}

export function EnergyChart({ data }: EnergyChartProps) {
  return (
    <S.Card>
      <S.CardHeader>
        <S.CardTitle>Geração vs Consumo (24h)</S.CardTitle>
      </S.CardHeader>
      <S.CardContent>
        <S.ChartWrapper>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="timestamp"
                tick={{ fill: "#6b7280", fontSize: 12 }}
              />
              <YAxis
                tick={{ fill: "#6b7280", fontSize: 12 }}
                label={{ value: "kWh", angle: -90, position: "insideLeft", fill: "#6b7280", fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #d1d5db",
                  borderRadius: "8px",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="generation"
                stroke="#facc15"
                strokeWidth={2}
                name="Geração"
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="consumption"
                stroke="#3b82f6"
                strokeWidth={2}
                name="Consumo"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </S.ChartWrapper>
      </S.CardContent>
    </S.Card>
  )
}