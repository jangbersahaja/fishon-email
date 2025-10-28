import { Heading, Img, Section } from "@react-email/components";
import * as React from "react";

interface EmailHeaderProps {
  title: string;
  subtitle?: string;
}

export function EmailHeader({ title, subtitle }: EmailHeaderProps) {
  return (
    <Section style={header}>
      <Img
        src="https://fishon.my/images/logo-white.png"
        alt="Fishon"
        width="120"
        height="40"
        style={logo}
      />
      <Heading style={heading}>{title}</Heading>
      {subtitle && <p style={subheading}>{subtitle}</p>}
    </Section>
  );
}

const header = {
  background: "linear-gradient(135deg, #ec2227 0%, #c81e23 100%)",
  padding: "40px 30px",
  textAlign: "center" as const,
};

const logo = {
  margin: "0 auto 20px",
};

const heading = {
  color: "#ffffff",
  fontSize: "28px",
  fontWeight: "700",
  margin: "0",
  lineHeight: "1.2",
};

const subheading = {
  color: "rgba(255, 255, 255, 0.9)",
  fontSize: "16px",
  margin: "8px 0 0",
};
