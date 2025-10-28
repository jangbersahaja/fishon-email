import { Hr, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailHeader } from "../components/EmailHeader";
import { EmailLayout } from "../components/EmailLayout";

interface VerificationCodeEmailProps {
  userName?: string;
  code: string;
  purpose:
    | "registration"
    | "login"
    | "forgot_password"
    | "guest_booking"
    | "email_verification";
  expiryMinutes?: number;
}

export function VerificationCodeEmail({
  userName,
  code,
  purpose,
  expiryMinutes = 2,
}: VerificationCodeEmailProps) {
  const purposeText = {
    registration: "complete your registration",
    login: "sign in to your account",
    forgot_password: "reset your password",
    guest_booking: "verify your booking",
    email_verification: "verify your email address",
  };

  const title = {
    registration: "Welcome to Fishon! 🎣",
    login: "Sign In Verification",
    forgot_password: "Reset Your Password",
    guest_booking: "Verify Your Booking",
    email_verification: "Verify Your Email",
  };

  return (
    <EmailLayout preview={`Your Fishon verification code: ${code}`}>
      <EmailHeader title={title[purpose]} />

      <Section style={content}>
        <Text style={greeting}>Hi {userName || "there"},</Text>

        <Text style={paragraph}>
          To {purposeText[purpose]}, please use the verification code below:
        </Text>

        <Section style={codeBox}>
          <Text style={codeStyle}>{code}</Text>
        </Section>

        <Section style={infoBox}>
          <Text style={infoText}>
            <strong>Security Note:</strong>
            <br />• This code expires in {expiryMinutes} minutes
            <br />• Never share this code with anyone
            <br />• If you didn&apos;t request this code, please ignore this
            email
          </Text>
        </Section>

        <Hr style={divider} />

        <Text style={footerText}>
          Need help? Contact us at{" "}
          <a href="mailto:support@fishon.my" style={link}>
            support@fishon.my
          </a>
        </Text>
      </Section>
    </EmailLayout>
  );
}

const content = {
  padding: "30px",
};

const greeting = {
  fontSize: "16px",
  color: "#111827",
  margin: "0 0 16px",
};

const paragraph = {
  fontSize: "16px",
  color: "#374151",
  lineHeight: "1.6",
  margin: "0 0 24px",
};

const codeBox = {
  textAlign: "center" as const,
  margin: "30px 0",
  padding: "20px",
  backgroundColor: "#fef2f2",
  borderRadius: "8px",
  border: "2px dashed #ec2227",
};

const codeStyle = {
  fontSize: "36px",
  fontWeight: "700",
  letterSpacing: "8px",
  color: "#ec2227",
  fontFamily: "monospace",
  margin: "0",
};

const infoBox = {
  backgroundColor: "#f9fafb",
  padding: "16px",
  borderRadius: "6px",
  margin: "24px 0",
};

const infoText = {
  fontSize: "14px",
  color: "#374151",
  margin: "0",
  lineHeight: "1.6",
};

const divider = {
  borderColor: "#e5e7eb",
  margin: "24px 0",
};

const footerText = {
  fontSize: "14px",
  color: "#6b7280",
  margin: "0",
};

const link = {
  color: "#ec2227",
  textDecoration: "underline",
};

VerificationCodeEmail.PreviewProps = {
  userName: "Ahmad",
  code: "123456",
  purpose: "registration",
  expiryMinutes: 2,
} as VerificationCodeEmailProps;

export default VerificationCodeEmail;
