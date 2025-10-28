import { Button } from "@react-email/components";
import * as React from "react";
export function EmailButton({ href, children }) {
    return (React.createElement(Button, { href: href, style: button }, children));
}
const button = {
    backgroundColor: "#ec2227",
    borderRadius: "6px",
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "600",
    textDecoration: "none",
    textAlign: "center",
    display: "block",
    padding: "12px 24px",
    margin: "24px 0",
};
