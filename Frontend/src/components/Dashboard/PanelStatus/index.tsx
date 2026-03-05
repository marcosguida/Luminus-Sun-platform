'use client'

import type { SolarPanel } from "@/lib/types";
import { Activity, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import * as S from "./style";

interface PanelStatusProps {
  panels: SolarPanel[];
}

export function PanelStatus({ panels }: PanelStatusProps) {

  const getStatusIcon = (status: SolarPanel["status"]) => {
    switch (status) {
      case "online":
        return <CheckCircle2 size={16} color="#22c55e" />;
      case "warning":
        return <AlertTriangle size={16} color="#facc15" />;
      case "error":
        return <XCircle size={16} color="#ef4444" />;
      default:
        return <Activity size={16} color="#6b7280" />;
    }
  };

  const getStatusStyle = (status: SolarPanel["status"]) => {
    switch (status) {
      case "online":
        return "online";
      case "warning":
        return "warning";
      case "error":
        return "error";
      default:
        return "default";
    }
  };

  return (
    <S.Card>
      <S.CardHeader>Status dos Painéis</S.CardHeader>
      <S.CardContent>
        {panels.map(panel => (
          <S.PanelItem key={panel.id}>
            <S.PanelInfo>
              {getStatusIcon(panel.status)}
              <S.PanelText>
                <S.PanelName>{panel.name}</S.PanelName>
                <S.PanelLocation>{panel.location}</S.PanelLocation>
              </S.PanelText>
            </S.PanelInfo>
            <S.PanelStats>
              <S.PanelPower>{panel.power}W</S.PanelPower>
              <S.PanelEfficiency>{panel.efficiency}% efic.</S.PanelEfficiency>
              <S.Badge status={getStatusStyle(panel.status)}>{panel.status}</S.Badge>
            </S.PanelStats>
          </S.PanelItem>
        ))}
      </S.CardContent>
    </S.Card>
  )
}