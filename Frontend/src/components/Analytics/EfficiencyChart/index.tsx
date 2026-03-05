/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";
import { useMemo } from "react";
import { useUser } from "@/hooks/UserContext";
import { useForecastEnergy } from "../../../hooks/useForecastEnergy";
import { format, isSameDay, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { IForecastEnergyBase } from "@/lib/interfaces/IForestEnergy";

type Period = "day" | "week" | "month";

interface EfficiencyChartProps {
  period: Period;
}

export function EfficiencyChart({ period }: EfficiencyChartProps) {
  const { userInfo } = useUser();
  const regionId = userInfo?.regionId;

  const { useForecastNext5Days } = useForecastEnergy();
  const {
    data: forecasts,
    isLoading,
    isError,
  } = useForecastNext5Days(regionId);

  // 🔍 Log para depuração
  console.log("Forecasts recebidos:", forecasts);

  const chartData = useMemo(() => {
    if (!forecasts) return [];

    const today = new Date();

    // 🔹 Filtra apenas previsões do dia atual
    const todayForecasts = forecasts.filter((forecast: any) => {
      const forecastDate = new Date(forecast.forecastDate);
      return isSameDay(forecastDate, today);
    });

    // 🔹 Mapeia e formata os dados para o gráfico
    return todayForecasts
      .map((forecast: IForecastEnergyBase) => ({
        time: format(parseISO(forecast.forecastDate.toString()), "HH:mm", {
          locale: ptBR,
        }),
        efficiency: Math.round((forecast.efficiencyRate ?? 0) * 100),
        irradiance: forecast.irradiance,
        predictedEnergy: forecast.predictedEnergy,
        confidence: Math.round((forecast.confidenceLevel ?? 0) * 100),
      }))
      .sort((a: any, b: any) => a.time.localeCompare(b.time));
  }, [forecasts, period]);

  if (!regionId)
    return (
      <Card>
        <CardHeader>
          <CardTitle>Eficiência Energética</CardTitle>
        </CardHeader>
        <CardContent>
          <p>⚠️ Seu usuário não possui uma região associada.</p>
        </CardContent>
      </Card>
    );

  if (isLoading)
    return (
      <Card>
        <CardHeader>
          <CardTitle>Eficiência Energética</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Carregando dados de previsão...</p>
        </CardContent>
      </Card>
    );

  if (isError)
    return (
      <Card>
        <CardHeader>
          <CardTitle>Eficiência Energética</CardTitle>
        </CardHeader>
        <CardContent>
          <p>❌ Erro ao carregar dados de previsão.</p>
        </CardContent>
      </Card>
    );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Eficiência Energética do Dia</CardTitle>
      </CardHeader>
      <CardContent>
        {chartData.length === 0 ? (
          <p>Nenhum dado de previsão para hoje.</p>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="efficiencyGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="time" tick={{ fill: "#6B7280", fontSize: 12 }} />
              <YAxis
                tick={{ fill: "#6B7280", fontSize: 12 }}
                label={{
                  value: "%",
                  angle: -90,
                  position: "insideLeft",
                }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #D1D5DB",
                  borderRadius: "8px",
                }}
                formatter={(value, name) => {
                  if (name === "efficiency") return [`${value}%`, "Eficiência"];
                  if (name === "irradiance") return [`${value} W/m²`, "Irradiância"];
                  if (name === "predictedEnergy")
                    return [`${Number(value).toFixed(2)} kWh`, "Energia Prevista"];
                  if (name === "confidence")
                    return [`${value}%`, "Confiança"];
                  return [value, name];
                }}
              />
              <Area
                type="monotone"
                dataKey="efficiency"
                stroke="#10b981"
                strokeWidth={2}
                fill="url(#efficiencyGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
}

/* --------------------- Styled Components --------------------- */
const Card = styled.div`
  background-color: #ffffff;
  border-radius: 0.75rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
`;

const CardHeader = styled.div`
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #E5E7EB;
`;

const CardTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;
