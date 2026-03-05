import styled, { css, keyframes } from "styled-components";

interface FlowArrowProps {
  $active: boolean;
  $color?: string;
  $flip?: boolean;
}

interface BalanceBoxProps {
  $positive: boolean
}
interface AlertItemProps {
  $resolved: boolean
}

const pulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.1); }
`

export const Card = styled.div`
  border-radius: 16px;
  border: 1px solid #e5e7eb;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: 0.3s;
  padding: 1rem;
`

export const CardHeader = styled.div`
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 0.75rem;
  margin-bottom: 1rem;
`

export const CardTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 700;
  color: #06402b;
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FlowContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0 20px ;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
`

export const EnergyItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.25rem;
`

export const Label = styled.p`
  font-size: 0.75rem;
  color: #6b7280;
`

export const Value = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: #111827;
`

export const BatteryWrapper = styled.div`
  position: relative;
`

export const BatteryBadge = styled.div`
  position: absolute;
  bottom: -4px;
  right: -4px;
  background: #fff;
  color: #111;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 4px 6px;
  border-radius: 50%;
  border: 1px solid #ddd;
`

export const IconCircle = styled.div<{ gradient?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  width: 64px;
  border-radius: 50%;
  ${({ gradient }) => {
    switch (gradient) {
      case "solar":
        return css`background: linear-gradient(to bottom right, #facc15, #f97316);`
      case "battery":
        return css`background: linear-gradient(to bottom right, #3b82f6, #2563eb);`
      case "home":
        return css`background: linear-gradient(to bottom right, #22c55e, #15803d);`
      case "export":
        return css`background: linear-gradient(to bottom right, #16a34a, #166534);`
      case "import":
        return css`background: linear-gradient(to bottom right, #f97316, #ea580c);`
      default:
        return css`background: #ccc;`
    }
  }}
`

export const FlowArrow = styled.div<FlowArrowProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $color }) => $color || 'inherit'};
  opacity: ${({ $active }) => ($active ? 1 : 0.3)};
  transition: opacity 0.3s ease;
  transform: ${({ $flip }) => ($flip ? 'rotate(180deg)' : 'none')};

  svg {
    color: ${({ $color }) => $color || '#9ca3af'};
  }
`

export const BalanceBox = styled.div<BalanceBoxProps>`
  margin-top: 1.5rem;
  background: #f9fafb;
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  width: 100%;

  p {
    font-size: 0.875rem;
    color: #6b7280;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ $positive }) => ($positive ? "#16a34a" : "#f97316")};
  }
`