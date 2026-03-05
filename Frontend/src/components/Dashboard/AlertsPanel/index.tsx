'use client'

import * as S from "./style";
import type { Alert } from "@/lib/types";
import { AlertCircle, Info, AlertTriangle } from "lucide-react";

interface AlertsPanelProps {
  alerts: Alert[];
}

export function AlertsPanel({ alerts }: AlertsPanelProps) {

  const getAlertIcon = (type: Alert["type"]) => {
    switch (type) {
      case "error":
        return <AlertCircle size={16} color="#ef4444" />;
      case "warning":
        return <AlertTriangle size={16} color="#facc15" />;
      case "info":
        return <Info size={16} color="#3b82f6" />;
    }
  }

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = Math.floor((now.getTime() - date.getTime()) / 1000 / 60);

    if (diff < 60) return `${diff}m atrás`;
    if (diff < 1440) return `${Math.floor(diff / 60)}h atrás`;
    return `${Math.floor(diff / 1440)}d atrás`;
  }

  const getAlertStyle = (type: Alert["type"]) => {
    switch (type) {
      case "error": return "error";
      case "warning": return "warning";
      case "info": return "info";
    }
  }

  return (
    <S.Card>
      <S.CardHeader>Alertas Recentes</S.CardHeader>
      <S.CardContent>
        {alerts.length === 0 ? (
          <S.EmptyMessage>Nenhum alerta no momento</S.EmptyMessage>
        ) : (
          <S.AlertsList>
            {alerts.map(alert => (
              <S.AlertItem key={alert.id} $resolved={alert.resolved}>
                {getAlertIcon(alert.type)}
                <S.AlertInfo>
                  <S.AlertMessage>{alert.message}</S.AlertMessage>
                  <S.AlertTime>{formatTime(alert.timestamp)}</S.AlertTime>
                </S.AlertInfo>
                <S.Badge status={getAlertStyle(alert.type)}>{alert.type}</S.Badge>
              </S.AlertItem>
            ))}
          </S.AlertsList>
        )}
      </S.CardContent>
    </S.Card>
  )
}