"use client";

import { useState } from "react";
import { Download, FileText, FileSpreadsheet } from "lucide-react";
import styled from "styled-components";

export function ExportReport() {
  const [open, setOpen] = useState(false);

  const handleExport = (format: string) => {
    console.log(`[v0] Exporting report as ${format}`);
    alert(`Relatório exportado como ${format}`);
    setOpen(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Exportar Relatório</CardTitle>
      </CardHeader>
      <CardContent>
        <Description>
          Gere relatórios detalhados sobre o desempenho do seu sistema solar
        </Description>

        <Dropdown>
          <DropdownButton onClick={() => setOpen(!open)}>
            <Download size={16} style={{ marginRight: "0.5rem" }} />
            Exportar Relatório
          </DropdownButton>

          {open && (
            <DropdownMenu>
              <DropdownItem onClick={() => handleExport("PDF")}>
                <FileText size={16} style={{ marginRight: "0.5rem" }} />
                Exportar como PDF
              </DropdownItem>
              <DropdownItem onClick={() => handleExport("Excel")}>
                <FileSpreadsheet size={16} style={{ marginRight: "0.5rem" }} />
                Exportar como Excel
              </DropdownItem>
              <DropdownItem onClick={() => handleExport("CSV")}>
                <FileSpreadsheet size={16} style={{ marginRight: "0.5rem" }} />
                Exportar como CSV
              </DropdownItem>
            </DropdownMenu>
          )}
        </Dropdown>
      </CardContent>
    </Card>
  );
}

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 0.75rem;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
`;

const CardHeader = styled.div`
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #E5E7EB;
`;

const CardTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
`;

const CardContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const Description = styled.p`
  font-size: 0.875rem;
  color: #6B7280;
  margin-bottom: 1rem;
`;

const Dropdown = styled.div`
  position: relative;
  width: 100%;
`;

const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: #111827;
  color: #ffffff;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #1f2937;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  right: 0;
  top: calc(100% + 0.25rem);
  background-color: #ffffff;
  border: 1px solid #D1D5DB;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  width: 200px;
  z-index: 10;
`;

const DropdownItem = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.5rem 0.75rem;
  background: transparent;
  border: none;
  font-size: 0.875rem;
  color: #111827;
  cursor: pointer;

  &:hover {
    background-color: #F3F4F6;
  }
`;
