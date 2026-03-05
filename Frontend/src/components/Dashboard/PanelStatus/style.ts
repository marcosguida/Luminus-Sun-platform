import styled, { css } from "styled-components";

export const Card = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(6,64,43,0.15);
  border: 1px solid rgba(6,64,43,0.2);
  overflow: hidden;
`;

export const CardHeader = styled.div`
  padding: 1rem 1.5rem;
  font-weight: 700;
  font-size: 1.125rem;
  border-bottom: 1px solid rgba(6,64,43,0.2);
`;

export const CardContent = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const PanelItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(6,64,43,0.2);
  border-radius: 12px;
  padding: 0.75rem 1rem;
`;

export const PanelInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const PanelText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PanelName = styled.p`
  font-weight: 500;
  color: #06402b;
`;

export const PanelLocation = styled.p`
  font-size: 0.75rem;
  color: #6b7280;
`;

export const PanelStats = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-align: right;
`;

export const PanelPower = styled.p`
  font-weight: 700;
  color: #06402b;
`;

export const PanelEfficiency = styled.p`
  font-size: 0.75rem;
  color: #6b7280;
`;

interface BadgeProps {
  status: "online" | "warning" | "error" | "default";
}

export const Badge = styled.span<BadgeProps>`
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 6px;
  text-transform: capitalize;

  ${props => props.status === "online" && css`
    background-color: rgba(34, 197, 94, 0.1);
    color: #15803d;
  `}

  ${props => props.status === "warning" && css`
    background-color: rgba(250, 204, 21, 0.1);
    color: #b45309;
  `}

  ${props => props.status === "error" && css`
    background-color: rgba(239, 68, 68, 0.1);
    color: #991b1b;
  `}

  ${props => props.status === "default" && css`
    background-color: #f3f4f6;
    color: #6b7280;
  `}
`;
 