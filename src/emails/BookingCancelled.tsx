import { Hr, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailButton } from "../components/EmailButton";
import { EmailHeader } from "../components/EmailHeader";
import { EmailLayout } from "../components/EmailLayout";
import { InfoBox } from "../components/InfoBox";

interface BookingCancelledEmailProps {
  captainName: string;
  charterName: string;
  anglerName: string;
  tripName: string;
  tripDate: string;
  cancellationReason?: string;
  bookingUrl: string;
}

export function BookingCancelledEmail({
  captainName,
  charterName,
  anglerName,
  tripName,
  tripDate,
  cancellationReason,
  bookingUrl,
}: BookingCancelledEmailProps) {
  return (
    <EmailLayout preview={`Booking cancelled by ${anglerName}`}>
      <EmailHeader
        title="Booking Cancelled By Angler"
        subtitle={`Charter: ${charterName}`}
      />

      <Section style={content}>
        <Text style={greeting}>Hi Captain {captainName},</Text>

        <Text style={paragraph}>
          A booking for your charter has been cancelled by the angler.
        </Text>

        <Section style={detailsSection}>
          <Text style={sectionTitle}>Booking Details</Text>

          <InfoBox label="Angler" value={anglerName} />
          <InfoBox label="Charter" value={charterName} />
          <InfoBox label="Trip" value={tripName} />
          <InfoBox label="Date" value={tripDate} />
        </Section>

        {cancellationReason && (
          <Section style={reasonSection}>
            <Text style={reasonTitle}>Cancellation Reason</Text>
            <Text style={reasonText}>{cancellationReason}</Text>
          </Section>
        )}

        <EmailButton href={bookingUrl}>View Booking Details</EmailButton>

        <Hr style={divider} />

        <Text style={footerText}>
          If you have any questions about this cancellation, please contact our
          support team.
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

const reasonSection = {
  margin: "24px 0",
  padding: "16px",
  backgroundColor: "#fef2f2",
  borderLeft: "4px solid #ef4444",
  borderRadius: "4px",
};

const reasonTitle = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#991b1b",
  margin: "0 0 8px",
};

const reasonText = {
  fontSize: "14px",
  color: "#991b1b",
  margin: "0",
  lineHeight: "1.5",
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
BookingCancelledEmail.PreviewProps = {
  captainName: "Hassan",
  charterName: "Full Day Deep Sea Adventure",
  anglerName: "Ahmad bin Abdullah",
  tripName: "Half Day Trip",
  tripDate: "24 October 2025",
  cancellationReason:
    "Family emergency - unable to make the trip. Sorry for the inconvenience.",
  bookingUrl: "https://captain.fishon.my/captain/bookings/123",
} as BookingCancelledEmailProps;

export default BookingCancelledEmail;
