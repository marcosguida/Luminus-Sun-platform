import React from "react";
import type { LucideIcon } from "lucide-react";
import * as S from './style'

interface Trend {
  value: number;
  label: string;
}

interface StatCardProps {
  title: string;
  value: string | number;
  unit?: string;
  icon: LucideIcon;
  trend?: Trend;
  iconColor?: string;
}

export function StatCard({ title, value, unit, icon: Icon, trend, iconColor }: StatCardProps) {
  const isPositive = trend ? trend.value >= 0 : false;

  return (
    <S.Card>
      <S.CardContent>
        <S.CardHeader>
          <S.CardInfo>
            <S.Title>{title}</S.Title>
            <S.ValueWrapper>
              <S.Value>{value}</S.Value>
              {unit && <S.Unit>{unit}</S.Unit>}
            </S.ValueWrapper>

            {trend && (
              <S.TrendText $positive={isPositive}>
                {isPositive ? "+" : ""}
                {trend.value}% {trend.label}
              </S.TrendText>
            )}
          </S.CardInfo>

          <S.IconContainer $iconColor={iconColor}>
            <Icon className="icon" />
          </S.IconContainer>
        </S.CardHeader>
      </S.CardContent>
    </S.Card>
  );
}