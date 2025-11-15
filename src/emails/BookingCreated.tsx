import { Hr, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailButton } from "../components/EmailButton";
import { EmailHeader } from "../components/EmailHeader";
import { EmailLayout } from "../components/EmailLayout";
import { InfoBox } from "../components/InfoBox";

interface BookingCreatedEmailProps {
  userName: string;
  charterName: string;
  tripName: string;
  tripDate: string;
  tripDays: number;
  durationHours: number;
  startTime?: string;
  totalPrice: string;
  confirmationUrl: string;
  paymentFlow?: "TOKENIZED" | "DIRECT"; // NEW: payment flow type
}

export function BookingCreatedEmail({
  userName,
  charterName,
  tripName,
  tripDate,
  tripDays,
  durationHours,
  startTime,
  totalPrice,
  confirmationUrl,
  paymentFlow,
}: BookingCreatedEmailProps) {
  const tripDateDisplay = `${tripDate} • ${tripDays} ${tripDays > 1 ? "Days" : "Day"}`;
  const durationDisplay = `${durationHours} ${durationHours > 1 ? "hours" : "hour"}`;

  return (
    <EmailLayout
      preview={`Your booking request for ${charterName} has been sent for review`}
    >
      <EmailHeader
        title="Booking In Review 🎣"
        subtitle={`Charter: ${charterName}`}
      />

      <Section style={content}>
        <Text style={greeting}>Hi {userName},</Text>

        <Text style={paragraph}>
          Thank you for choosing Fishon! We&apos;ve received your booking
          request and the captain will review it shortly.
        </Text>

        {paymentFlow === "TOKENIZED" && (
          <Section style={infoBox}>
            <Text style={infoText}>
              💳 <strong>Your card has been authorized</strong> (not charged
              yet). We&apos;ll only charge your card if the captain approves
              your booking.
            </Text>
          </Section>
        )}

        {paymentFlow === "DIRECT" && (
          <Section style={infoBox}>
            <Text style={infoText}>
              ✅ <strong>Payment received!</strong> Your payment of {totalPrice}{" "}
              has been received and is being held securely. It will be released
              to the captain once they approve your booking.
            </Text>
          </Section>
        )}

        <Section style={detailsSection}>
          <Text style={sectionTitle}>Booking Details</Text>

          <InfoBox label="Charter" value={charterName} />
          <InfoBox label="Trip" value={tripName} />
          <InfoBox label="Date" value={tripDateDisplay} />
          <InfoBox label="Duration" value={durationDisplay} />
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

const infoBox = {
  backgroundColor: "#f0f9ff",
  borderLeft: "4px solid #3b82f6",
  padding: "16px",
  borderRadius: "6px",
  margin: "0 0 24px",
};

const infoText = {
  fontSize: "14px",
  color: "#1e40af",
  margin: "0",
  lineHeight: "1.6",
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
  tripName: "Half Day Trip",
  tripDate: "24 October 2025",
  tripDays: 1,
  durationHours: 4,
  startTime: "6:00 AM",
  totalPrice: "RM 800",
  confirmationUrl: "https://fishon.my/bookings/123",
} as BookingCreatedEmailProps;

export default BookingCreatedEmail;
