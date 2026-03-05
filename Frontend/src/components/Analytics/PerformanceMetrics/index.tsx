"use client";

import { TrendingUp, TrendingDown, DollarSign, Zap, Leaf, Clock } from "lucide-react";
import styled, { css } from "styled-components";

type Period = "day" | "week" | "month" | "year";

interface PerformanceMetricsProps {
  period: Period;
}

const allMetrics = [
  {
    label: "Geração Total",
    value: 10847,
    unit: "kWh",
    change: 12.5,
    trend: "up",
    icon: Zap,
    color: "#FACC15",
  },
  {
    label: "Economia Total",
    value: 4892,
    unit: "R$",
    change: 15.2,
    trend: "up",
    icon: DollarSign,
    color: "#10B981",
  },
  {
    label: "CO₂ Evitado",
    value: 7234,
    unit: "kg",
    change: 11.8,
    trend: "up",
    icon: Leaf,
    color: "#059669",
  },
  {
    label: "Tempo de Operação",
    value: 8760,
    unit: "horas",
    change: 100,
    trend: "neutral",
    icon: Clock,
    color: "#3B82F6",
  },
];

export function PerformanceMetrics({ period }: PerformanceMetricsProps) {
  const metrics = filterMetricsByPeriod(period);

  return (
    <GridContainer>
      {metrics.map((metric) => {
        const Icon = metric.icon;
        return (
          <Card key={metric.label}>
            <CardContent>
              <ContentWrapper>
                <MetricInfo>
                  <MetricLabel>{metric.label}</MetricLabel>
                  <MetricValueWrapper>
                    <MetricValue>{metric.value.toLocaleString()}</MetricValue>
                    {metric.unit && <MetricUnit>{metric.unit}</MetricUnit>}
                  </MetricValueWrapper>
                  <TrendWrapper>
                    {metric.trend === "up" && <TrendingUp size={12} color="#10B981" />}
                    {metric.trend === "down" && <TrendingDown size={12} color="#EF4444" />}
                    <TrendText trend={metric.trend}>
                      {metric.trend === "neutral" ? "-" : `${metric.change}%`}
                    </TrendText>
                  </TrendWrapper>
                </MetricInfo>
                <IconWrapper>
                  <Icon size={20} color={metric.color} />
                </IconWrapper>
              </ContentWrapper>
            </CardContent>
          </Card>
        );
      })}
    </GridContainer>
  );
}

function filterMetricsByPeriod(period: Period) {
  switch (period) {
    case "day":
      return allMetrics.map(m => ({ ...m, value: Math.round(m.value / 30), change: parseFloat((m.change / 30).toFixed(1)) }));
    case "week":
      return allMetrics.map(m => ({ ...m, value: Math.round(m.value / 4), change: parseFloat((m.change / 4).toFixed(1)) }));
    case "month":
      return allMetrics.map(m => ({ ...m, value: Math.round(m.value / 1), change: parseFloat((m.change / 1).toFixed(1)) }));
    case "year":
      return allMetrics;
  }
}

const GridContainer = styled.div`
  display: grid;
  gap: 1rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 0.75rem;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

const MetricInfo = styled.div`
  flex: 1;
`;

const MetricLabel = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  color: #6B7280;
`;

const MetricValueWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const MetricValue = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
`;

const MetricUnit = styled.span`
  font-size: 0.875rem;
  color: #6B7280;
`;

const TrendWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-top: 0.5rem;
`;

const TrendText = styled.span<{ trend: string }>`
  font-size: 0.75rem;
  font-weight: 500;
  ${({ trend }) =>
    trend === "up"
      ? css`color: #10B981;`
      : trend === "down"
      ? css`color: #EF4444;`
      : css`color: #6B7280;`}
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 0.5rem;
  background-color: #F3F4F6;
`;
