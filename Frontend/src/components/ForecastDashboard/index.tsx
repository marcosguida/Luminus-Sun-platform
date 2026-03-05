/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useMemo } from "react";
import styled from "styled-components";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  AreaChart,
  Area,
  BarChart,
  Bar,
} from "recharts";

import { useForecastEnergy } from "@/hooks/useForecastEnergy";
import { useUser } from "@/hooks/UserContext";
import { IForecastEnergyBase } from "@/lib/interfaces/IForestEnergy";

export function ForecastDashboard() {
  const { userInfo } = useUser();
  const regionId = userInfo?.regionId;

  const { useForecastNext5Days } = useForecastEnergy();
  const {
    data: forecasts,
    isLoading,
    isError,
  } = useForecastNext5Days(regionId);

  const todayForecasts = useMemo(() => {
    if (!forecasts) return [];
    const today = new Date();
    const todayStr = today.toISOString().split("T")[0]; // YYYY-MM-DD
    return forecasts.filter((f: any) => f.forecastDate.startsWith(todayStr));
  }, [forecasts]);


  const summary = useMemo(() => {
    if (!todayForecasts || todayForecasts.length === 0) {
      return { totalEnergy: 0, avgEfficiency: 0, totalSavings: 0, totalCO2: 0 };
    }

    const total = todayForecasts.length;
    const totalEnergy = todayForecasts.reduce((acc, f: any) => acc + f.predictedEnergy, 0);
    const avgEfficiency =
      todayForecasts.reduce((acc, f: any) => acc + f.efficiencyRate, 0) / total;
    const totalSavings = todayForecasts.reduce((acc, f: any) => acc + f.savingsEstimate, 0);
    const totalCO2 = todayForecasts.reduce((acc, f: any) => acc + f.co2Reduction, 0);

    return {
      totalEnergy,
      avgEfficiency: avgEfficiency * 100,
      totalSavings,
      totalCO2,
    };
  }, [todayForecasts]);

  // ✅ Agora podemos retornar condicionalmente, sem problema
  if (isLoading) return <Message>🔄 Carregando previsões energéticas...</Message>;
  if (isError) return <Message>⚠️ Erro ao carregar as previsões.</Message>;
  if (!forecasts || forecasts.length === 0)
    return <Message>⚙️ Nenhuma previsão disponível para esta região.</Message>;

  const chartData = forecasts.map((f) => {
    const date = new Date(f.forecastDate);
    const time = date.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return {
      time,
      predictedEnergy: f.predictedEnergy,
      irradiance: f.irradiance,
      co2Reduction: f.co2Reduction,
    };
  });

  return (
    <Container>
      <Header>
        <Title>🔆 Previsões Energéticas</Title>
        <SummaryCards>
          <SummaryCard>
            <SummaryLabel>Total Energia Prevista</SummaryLabel>
            <SummaryValue>{summary.totalEnergy.toFixed(2)} kWh</SummaryValue>
          </SummaryCard>
          <SummaryCard>
            <SummaryLabel>Eficiência Média</SummaryLabel>
            <SummaryValue>{summary.avgEfficiency.toFixed(1)}%</SummaryValue>
          </SummaryCard>
          <SummaryCard>
            <SummaryLabel>CO₂ Evitado</SummaryLabel>
            <SummaryValue>{summary.totalCO2.toFixed(2)} kg</SummaryValue>
          </SummaryCard>
          <SummaryCard>
            <SummaryLabel>Economia Estimada</SummaryLabel>
            <SummaryValue>R$ {summary.totalSavings.toFixed(2)}</SummaryValue>
          </SummaryCard>
        </SummaryCards>
      </Header>

      <CardsContainer>
        {forecasts.map((f: any) => (
          <Card key={f._id}>
            <CardHeader>
              {new Date(f.forecastDate).toLocaleTimeString("pt-BR", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </CardHeader>
            <CardContent>
              <Stat>
                <Label>Energia Prevista:</Label>
                <Value>{f.predictedEnergy.toFixed(2)} kWh</Value>
              </Stat>
              <Stat>
                <Label>Irradiância:</Label>
                <Value>{f.irradiance} W/m²</Value>
              </Stat>
              <Stat>
                <Label>Eficiência:</Label>
                <Value>{(f.efficiencyRate * 100).toFixed(1)}%</Value>
              </Stat>
              {f.recommendation && (
                <Recommendation>💡 {f.recommendation}</Recommendation>
              )}
            </CardContent>
          </Card>
        ))}
      </CardsContainer>

      <ChartsContainer>
        <ChartCard>
          <ChartTitle>Energia Prevista (kWh)</ChartTitle>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="predictedEnergy"
                stroke="#8b5cf6"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard>
          <ChartTitle>Irradiância (W/m²)</ChartTitle>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorIrradiance" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="#facc15"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="#facc15"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="irradiance"
                stroke="#f59e0b"
                fill="url(#colorIrradiance)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard>
          <ChartTitle>CO₂ Evitado (kg)</ChartTitle>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="co2Reduction" fill="#22c55e" />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>
      </ChartsContainer>
    </Container>
  );
}

// --- estilos mantidos (iguais ao anterior) ---
const Container = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 1.4rem;
  color: #111827;
`;

const Message = styled.p`
  text-align: center;
  margin-top: 2rem;
  font-weight: 500;
  color: #6b7280;
`;

const SummaryCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SummaryCard = styled.div`
  flex: 1 1 200px;
  background: #fff;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
`;

const SummaryLabel = styled.div`
  font-weight: 500;
  color: #6b7280;
`;

const SummaryValue = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
  color: #111827;
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  flex: 1 1 300px;
`;

const CardHeader = styled.div`
  font-weight: 700;
  font-size: 1.1rem;
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const Stat = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const Label = styled.span`
  font-weight: 500;
  color: #6b7280;
`;

const Value = styled.span`
  font-weight: 600;
  color: #111827;
`;

const Recommendation = styled.div`
  margin-top: 0.5rem;
  font-style: italic;
  color: #f59e0b;
`;

const ChartsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ChartCard = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
`;

const ChartTitle = styled.div`
  font-weight: 700;
  margin-bottom: 0.5rem;
`;
