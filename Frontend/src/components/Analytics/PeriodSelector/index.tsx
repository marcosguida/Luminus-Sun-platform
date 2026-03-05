"use client";
import styled, { css } from "styled-components";

type Period = "day" | "week" | "month";

interface PeriodSelectorProps {
  onPeriodChange: (period: Period) => void;
  selectedPeriod: Period;
}

export function PeriodSelector({ onPeriodChange, selectedPeriod }: PeriodSelectorProps) {
  const periods: { value: Period; label: string }[] = [
    { value: "day", label: "Dia" },
    { value: "week", label: "Semana" },
    { value: "month", label: "Mês" }
  ];

  return (
    <Container>
      {periods.map((period) => (
        <PeriodButton
          key={period.value}
          selected={selectedPeriod === period.value}
          onClick={() => onPeriodChange(period.value)}
        >
          {period.label}
        </PeriodButton>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const PeriodButton = styled.button<{ selected: boolean }>`
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.4rem 0.9rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ selected }) => (selected ? "#6d28d9" : "#d1d5db")};
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: ${({ selected }) => (selected ? "#6d28d9" : "transparent")};
  color: ${({ selected }) => (selected ? "#ffffff" : "#111827")};

  &:hover {
    background-color: ${({ selected }) => (selected ? "#5b21b6" : "#f3f4f6")};
  }
`;
