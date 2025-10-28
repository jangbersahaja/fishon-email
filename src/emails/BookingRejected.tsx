import { Hr, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailButton } from "../components/EmailButton";
import { EmailHeader } from "../components/EmailHeader";
import { EmailLayout } from "../components/EmailLayout";

interface BookingRejectedEmailProps {
  userName: string;
  charterName: string;
  reason?: string;
  searchUrl: string;
}

export function BookingRejectedEmail({
  userName,
  charterName,
  reason,
  searchUrl,
}: BookingRejectedEmailProps) {
  return (
    <EmailLayout preview={`Booking update for ${charterName}`}>
      <EmailHeader title="Booking Update" subtitle="We're here to help" />

      <Section style={content}>
        <Text style={greeting}>Hi {userName},</Text>

        <Text style={paragraph}>
          We&apos;re sorry, but your booking request for{" "}
          <strong>{charterName}</strong> could not be accommodated at this time.
        </Text>

        {reason && (
          <Section style={reasonBox}>
            <Text style={reasonLabel}>Reason from Captain:</Text>
            <Text style={reasonText}>{reason}</Text>
          </Section>
        )}

        <Text style={paragraph}>
          Don&apos;t worry! We have many other amazing fishing charters
          available. Browse our selection to find your next adventure.
        </Text>

        <EmailButton href={searchUrl}>Find Other Charters</EmailButton>

        <Hr style={divider} />

        <Text style={footerText}>
          Need help finding the perfect charter? Contact our support team and
          we&apos;ll be happy to assist you.
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

const reasonBox = {
  backgroundColor: "#fef2f2",
  borderLeft: "4px solid #ef4444",
  padding: "16px",
  borderRadius: "6px",
  margin: "0 0 24px",
};

const reasonLabel = {
  fontSize: "12px",
  color: "#991b1b",
  margin: "0 0 8px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  fontWeight: "600",
};

const reasonText = {
  fontSize: "14px",
  color: "#7f1d1d",
  margin: "0",
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

BookingRejectedEmail.PreviewProps = {
  userName: "Ahmad",
  charterName: "Full Day Deep Sea Adventure",
  reason:
    "Unfortunately, we are fully booked for this date. Please check our availability calendar for other dates.",
  searchUrl: "https://fishon.my/charters",
} as BookingRejectedEmailProps;

export default BookingRejectedEmail;
