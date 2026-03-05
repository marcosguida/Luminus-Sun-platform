"use client";

import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import styled from "styled-components";

type Period = "day" | "week" | "month";

interface ComparisonChartProps {
  period: Period;
}

const comparisonData = [
  { month: "Jan", generation: 1650, consumption: 1200, savings: 450 },
  { month: "Fev", generation: 1580, consumption: 1150, savings: 430 },
  { month: "Mar", generation: 1720, consumption: 1180, savings: 540 },
  { month: "Abr", generation: 1690, consumption: 1220, savings: 470 },
  { month: "Mai", generation: 1750, consumption: 1190, savings: 560 },
  { month: "Jun", generation: 1680, consumption: 1210, savings: 470 },
];

export function ComparisonChart({ period }: ComparisonChartProps) {
  const filteredData = filterDataByPeriod(period);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Comparativo</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="month" tick={{ fill: "#6B7280", fontSize: 12 }} />
            <YAxis tick={{ fill: "#6B7280", fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #D1D5DB",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Bar dataKey="generation" fill="#F59E0B" name="Geração (kWh)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="consumption" fill="#3B82F6" name="Consumo (kWh)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="savings" fill="#10B981" name="Economia (kWh)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

function filterDataByPeriod(period: Period) {
  switch (period) {
    case "day":
      return comparisonData.slice(0, 1);
    case "week":
      return comparisonData.slice(0, 4);
    case "month":
      return comparisonData;
  }
}

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 0.75rem;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
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
