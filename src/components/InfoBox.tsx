import { Section, Text } from "@react-email/components";
import * as React from "react";

interface InfoBoxProps {
  label: string;
  value: string;
}

export function InfoBox({ label, value }: InfoBoxProps) {
  return (
    <Section style={box}>
      <Text style={labelStyle}>{label}</Text>
      <Text style={valueStyle}>{value}</Text>
    </Section>
  );
}

const box = {
  backgroundColor: "#f9fafb",
  padding: "16px",
  borderRadius: "6px",
  marginBottom: "12px",
};

const labelStyle = {
  fontSize: "12px",
  color: "#6b7280",
  margin: "0 0 4px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  fontWeight: "600",
};

const valueStyle = {
  fontSize: "16px",
  color: "#111827",
  margin: "0",
  fontWeight: "600",
};
