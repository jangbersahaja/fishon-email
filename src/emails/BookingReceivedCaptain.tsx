import { Hr, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailButton } from "../components/EmailButton";
import { EmailHeader } from "../components/EmailHeader";
import { EmailLayout } from "../components/EmailLayout";
import { InfoBox } from "../components/InfoBox";

interface BookingReceivedCaptainEmailProps {
  captainName: string;
  charterName: string;
  anglerName: string;
  tripName: string;
  tripDate: string;
  tripDays: number;
  durationHours: number;
  startTime?: string;
  totalPrice: string;
  bookingUrl: string;
}

export function BookingReceivedCaptainEmail({
  captainName,
  charterName,
  anglerName,
  tripName,
  tripDate,
  tripDays,
  durationHours,
  startTime,
  totalPrice,
  bookingUrl,
}: BookingReceivedCaptainEmailProps) {
  const tripDateDisplay = `${tripDate} • ${tripDays} ${tripDays > 1 ? "Days" : "Day"}`;
  const durationDisplay = `${durationHours} ${durationHours > 1 ? "hours" : "hour"}`;

  return (
    <EmailLayout preview={`Your ${charterName} have received new booking`}>
      <EmailHeader
        title="Booking Request Received 🎣"
        subtitle={`Charter: ${charterName}`}
      />

      <Section style={content}>
        <Text style={greeting}>Hi Captain {captainName},</Text>

        <Text style={paragraph}>
          New booking received! Please proceed to accept or reject the booking.
        </Text>

        <Section style={detailsSection}>
          <Text style={sectionTitle}>Booking Details</Text>

          <InfoBox label="Angler" value={anglerName} />
          <InfoBox label="Charter" value={charterName} />
          <InfoBox label="Trip" value={tripName} />
          <InfoBox label="Date" value={tripDateDisplay} />
          <InfoBox label="Duration" value={durationDisplay} />
          {startTime && <InfoBox label="Start Time" value={startTime} />}
          <InfoBox label="Total Price" value={totalPrice} />
        </Section>

        <EmailButton href={bookingUrl}>Review Booking Request</EmailButton>

        <Hr style={divider} />

        <Text style={footerText}>
          Please review and respond to this booking request as soon as possible.
          The angler is waiting for your confirmation.
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
BookingReceivedCaptainEmail.PreviewProps = {
  captainName: "Hassan",
  charterName: "Full Day Deep Sea Adventure",
  anglerName: "Ahmad bin Abdullah",
  tripName: "Half Day Trip",
  tripDate: "24 October 2025",
  tripDays: 1,
  durationHours: 4,
  startTime: "6:00 AM",
  totalPrice: "RM 800",
  bookingUrl: "https://captain.fishon.my/captain/bookings/123",
} as BookingReceivedCaptainEmailProps;

export default BookingReceivedCaptainEmail;
