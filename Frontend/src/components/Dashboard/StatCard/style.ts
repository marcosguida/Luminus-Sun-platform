import styled, { css } from "styled-components";

interface TrendTextProps {
  $positive: boolean
}

export const Card = styled.div`
  border-radius: 12px;
  background-color: #fff;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const CardContent = styled.div`
  padding: 1.5rem;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
`;

export const CardInfo = styled.div`
  flex: 1;
`;

export const Title = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  color: #6b7280;
`;

export const ValueWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

export const Value = styled.h3`
  font-size: 1.875rem;
  font-weight: 700;
  color: #111827;
`;

export const Unit = styled.span`
  font-size: 0.875rem;
  color: #6b7280;
`;

export const TrendText = styled.p<TrendTextProps>`
  margin-top: 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: ${props => (props.$positive ? '#16a34a' : '#dc2626')};
`;

export const IconContainer = styled.div<{ $iconColor?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 3rem;
  border-radius: 0.5rem;
  ${({ $iconColor }) => {
    switch ($iconColor) {
      case "yellow":
        return css`background: linear-gradient(to bottom right, #facc15, #f97316);`
      case "blue":
        return css`background: linear-gradient(to bottom right, #3b82f6, #2563eb);`
      case "green":
        return css`background: linear-gradient(to bottom right, #22c55e, #15803d);`
      case "purple":
        return css`background: linear-gradient(to bottom right, #7c3aed, #4c1d95);`
      default:
        return css`background: #ccc;`
    }
  }}

  .icon {
    height: 1.5rem;
    width: 1.5rem;
    color: ${({ $iconColor }) => ($iconColor ? "#fff" : "#2563eb")};
  }
`;
