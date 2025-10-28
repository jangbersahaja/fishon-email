import { Section, Text } from "@react-email/components";
import * as React from "react";
export function InfoBox({ label, value }) {
    return (React.createElement(Section, { style: box },
        React.createElement(Text, { style: labelStyle }, label),
        React.createElement(Text, { style: valueStyle }, value)));
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
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    fontWeight: "600",
};
const valueStyle = {
    fontSize: "16px",
    color: "#111827",
    margin: "0",
    fontWeight: "600",
};
