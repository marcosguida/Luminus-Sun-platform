"use client";
import { useState } from "react";
import { PeriodSelector } from "@/components/Analytics/PeriodSelector";
import { PerformanceMetrics } from "@/components/Analytics/PerformanceMetrics";
import { ComparisonChart } from "@/components/Analytics/ComparisonChart";
import { EfficiencyChart } from "@/components/Analytics/EfficiencyChart";
import { SavingsBreakdown } from "@/components/Analytics/SavingsBreakdown";
import { ExportReport } from "@/components/Analytics/ExportReport";
import SideBar from "@/components/SideBar";
import styled from "styled-components";
import { ForecastDashboard } from "@/components/ForecastDashboard";

type Period = "day" | "week" | "month";

export default function AnalyticsPage() {
  const [period, setPeriod] = useState<Period>("day");

  return (
    <>
      <SideBar/>
      <PageContainer>
        <Main>
          <HeaderSection>
            <div>
              <Title>Análises e Relatórios</Title>
              <Subtitle>
                Visualize o desempenho e economia do sistema solar na sua cidade
              </Subtitle>
            </div>
            <PeriodSelector onPeriodChange={setPeriod} selectedPeriod={period} />
          </HeaderSection>

          <Section>
            {/* <PerformanceMetrics period={period} /> */}
            <ForecastDashboard/>
          </Section>

          <ChartsGrid>
            {/* <ComparisonChart period={period} /> */}
            <EfficiencyChart period={period} />
          </ChartsGrid>

          <FinalGrid>
            <div>
              <SavingsBreakdown period={period} />
            </div>
            <ExportReport />
          </FinalGrid>
        </Main>
      </PageContainer>
    </>
  );
}

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #f9fafb;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const Main = styled.main`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 1.5rem 1rem;
  flex: 1;
`;

const HeaderSection = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Title = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  color: #6b7280;
  font-size: 0.95rem;
`;

const Section = styled.div`
  margin-bottom: 1.5rem;
`;

const ChartsGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FinalGrid = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
`;
