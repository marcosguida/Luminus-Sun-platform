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
`;

export const EmptyMessage = styled.p`
  text-align: center;
  font-size: 0.875rem;
  color: #6b7280;
  padding: 1rem 0;
`;

export const AlertsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

interface AlertItemProps {
  resolved?: boolean;
}

export const AlertItem = styled.div<{ $resolved: boolean }>`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 0.75rem;
  border: 1px solid rgba(6,64,43,0.2);
  border-radius: 12px;
  padding: 0.75rem 1rem;
  opacity: ${({ $resolved }) => ($resolved ? 0.5 : 1)};
`;

export const AlertInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const AlertMessage = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
  color: #06402b;
`;

export const AlertTime = styled.p`
  font-size: 0.75rem;
  color: #6b7280;
  margin-top: 0.25rem;
`;

interface BadgeProps {
  status: "error" | "warning" | "info";
}

export const Badge = styled.span<BadgeProps>`
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 6px;
  text-transform: capitalize;

  ${props => props.status === "error" && css`
    background-color: rgba(239, 68, 68, 0.1);
    color: #991b1b;
  `}
  ${props => props.status === "warning" && css`
    background-color: rgba(250, 204, 21, 0.1);
    color: #b45309;
  `}
  ${props => props.status === "info" && css`
    background-color: rgba(59, 130, 246, 0.1);
    color: #1e40af;
  `}
`;
