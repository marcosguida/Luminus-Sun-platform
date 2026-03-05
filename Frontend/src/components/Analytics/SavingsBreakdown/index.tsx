"use client";

import { Pie, PieChart, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import styled from "styled-components";

type Period = "day" | "week" | "month" | "year";

interface SavingsBreakdownProps {
  period: Period;
}

const allSavingsData = [
  { name: "Autoconsumo", value: 65, color: "#10b981" },
  { name: "Exportação", value: 25, color: "#f59e0b" },
  { name: "Bateria", value: 10, color: "#3b82f6" },
];

export function SavingsBreakdown({ period }: SavingsBreakdownProps) {
  const data = filterSavingsByPeriod(period);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Distribuição de Economia</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name} ${value}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #D1D5DB",
                borderRadius: "8px",
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

// Ajusta os valores de acordo com o período
function filterSavingsByPeriod(period: Period) {
  switch (period) {
    case "day":
      return allSavingsData.map(s => ({ ...s, value: Math.round(s.value / 30) }));
    case "week":
      return allSavingsData.map(s => ({ ...s, value: Math.round(s.value / 4) }));
    case "month":
      return allSavingsData.map(s => ({ ...s, value: s.value })); // valores mensais
    case "year":
      return allSavingsData; // valores totais
  }
}

/* ====================== */
/*     Styled Components  */
/* ====================== */

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
