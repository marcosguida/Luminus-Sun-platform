import styled from "styled-components";

export const Card = styled.div`
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: 0.3s;
`

export const CardHeader = styled.div`
  border-bottom: 1px solid #e5e7eb;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
`

export const CardTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 700;
  color: #06402b;
`

export const CardContent = styled.div`
  padding: 1rem;
`

export const ChartWrapper = styled.div`
  width: 100%;
  height: 300px;

  .recharts-cartesian-grid line {
    stroke: #e5e7eb;
  }

  .recharts-tooltip-wrapper {
    font-size: 0.875rem;
    color: #111827;
  }

  .recharts-legend-item text {
    fill: #111827;
    font-size: 0.875rem;
  }
`
