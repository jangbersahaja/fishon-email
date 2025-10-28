import { Hr, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailButton } from "../components/EmailButton";
import { EmailHeader } from "../components/EmailHeader";
import { EmailLayout } from "../components/EmailLayout";
import { InfoBox } from "../components/InfoBox";

interface BookingCreatedEmailProps {
  userName: string;
  charterName: string;
  tripDate: string;
  tripDuration: string;
  startTime?: string;
  totalPrice: string;
  confirmationUrl: string;
}

export function BookingCreatedEmail({
  userName,
  charterName,
  tripDate,
  tripDuration,
  startTime,
  totalPrice,
  confirmationUrl,
}: BookingCreatedEmailProps) {
  return (
    <EmailLayout
      preview={`Your booking request for ${charterName} was received`}
    >
      <EmailHeader
        title="Booking Request Received! 🎣"
        subtitle={`Charter: ${charterName}`}
      />

      <Section style={content}>
        <Text style={greeting}>Hi {userName},</Text>

        <Text style={paragraph}>
          Thank you for choosing Fishon! We&apos;ve received your booking
          request and the captain will review it shortly.
        </Text>

        <Section style={detailsSection}>
          <Text style={sectionTitle}>Booking Details</Text>

          <InfoBox label="Charter" value={charterName} />
          <InfoBox label="Date" value={tripDate} />
          <InfoBox label="Duration" value={tripDuration} />
          {startTime && <InfoBox label="Start Time" value={startTime} />}
          <InfoBox label="Total Price" value={totalPrice} />
        </Section>

        <EmailButton href={confirmationUrl}>View Booking Details</EmailButton>

        <Hr style={divider} />

        <Text style={footerText}>
          You&apos;ll receive another email once the captain approves your
          booking. If you have any questions, feel free to contact us.
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

const detailsSection = {
  margin: "24px 0",
};

const sectionTitle = {
  fontSize: "18px",
  fontWeight: "600",
  color: "#111827",
  margin: "0 0 16px",
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

// Default props for preview
BookingCreatedEmail.PreviewProps = {
  userName: "Ahmad",
  charterName: "Full Day Deep Sea Adventure",
  tripDate: "Saturday, November 15, 2025",
  tripDuration: "1 Day",
  startTime: "6:00 AM",
  totalPrice: "RM 800",
  confirmationUrl: "https://fishon.my/book/confirm?id=123",
} as BookingCreatedEmailProps;

export default BookingCreatedEmail;
