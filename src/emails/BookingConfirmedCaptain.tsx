import { Hr, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailButton } from "../components/EmailButton";
import { EmailHeader } from "../components/EmailHeader";
import { EmailLayout } from "../components/EmailLayout";
import { InfoBox } from "../components/InfoBox";

interface BookingConfirmedCaptainEmailProps {
  captainName: string;
  charterName: string;
  anglerName: string;
  anglerEmail: string;
  anglerPhone: string;
  tripName: string;
  tripDate: string;
  tripDays: number;
  durationHours: number;
  startTime?: string;
  finalPrice: string;
  bookingUrl: string;
}

export function BookingConfirmedCaptainEmail({
  captainName,
  charterName,
  anglerName,
  anglerEmail,
  anglerPhone,
  tripName,
  tripDate,
  tripDays,
  durationHours,
  startTime,
  finalPrice,
  bookingUrl,
}: BookingConfirmedCaptainEmailProps) {
  const tripDateDisplay = `${tripDate} • ${tripDays} ${tripDays > 1 ? "Days" : "Day"}`;
  const durationDisplay = `${durationHours} ${durationHours > 1 ? "hours" : "hour"}`;

  return (
    <EmailLayout preview={`Booking confirmed - Payment received ${finalPrice}`}>
      <EmailHeader
        title="Booking Confirmed ✅"
        subtitle={`Charter: ${charterName}`}
      />

      <Section style={content}>
        <Text style={greeting}>Hi Captain {captainName},</Text>

        <Text style={paragraph}>
          Great news! The booking has been confirmed. We have received{" "}
          {finalPrice}. You may contact the angler to prepare for the trip.
        </Text>

        <Section style={detailsSection}>
          <Text style={sectionTitle}>Booking Details</Text>

          <InfoBox label="Charter" value={charterName} />
          <InfoBox label="Trip" value={tripName} />
          <InfoBox label="Date" value={tripDateDisplay} />
          <InfoBox label="Duration" value={durationDisplay} />
          {startTime && <InfoBox label="Start Time" value={startTime} />}
          <InfoBox label="Payment Received" value={finalPrice} />
        </Section>

        <Section style={detailsSection}>
          <Text style={sectionTitle}>Angler Contact Information</Text>

          <InfoBox label="Name" value={anglerName} />
          <InfoBox label="Email" value={anglerEmail} />
          <InfoBox label="Phone" value={anglerPhone} />
        </Section>

        <EmailButton href={bookingUrl}>View Booking Details</EmailButton>

        <Hr style={divider} />

        <Text style={footerText}>
          Please ensure everything is ready for the trip. Have a great fishing
          adventure!
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
BookingConfirmedCaptainEmail.PreviewProps = {
  captainName: "Hassan",
  charterName: "Full Day Deep Sea Adventure",
  anglerName: "Ahmad bin Abdullah",
  anglerEmail: "ahmad@example.com",
  anglerPhone: "+60 12-345 6789",
  tripName: "Half Day Trip",
  tripDate: "24 October 2025",
  tripDays: 1,
  durationHours: 4,
  startTime: "6:00 AM",
  finalPrice: "RM 800",
  bookingUrl: "https://captain.fishon.my/captain/bookings/123",
} as BookingConfirmedCaptainEmailProps;

export default BookingConfirmedCaptainEmail;
