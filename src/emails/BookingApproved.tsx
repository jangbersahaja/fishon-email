import { Hr, Link, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailButton } from "../components/EmailButton";
import { EmailHeader } from "../components/EmailHeader";
import { EmailLayout } from "../components/EmailLayout";
import { InfoBox } from "../components/InfoBox";

interface BookingApprovedEmailProps {
  userName: string;
  charterName: string;
  tripDate: string;
  paymentUrl: string;
  confirmationUrl: string;
}

export function BookingApprovedEmail({
  userName,
  charterName,
  tripDate,
  paymentUrl,
  confirmationUrl,
}: BookingApprovedEmailProps) {
  return (
    <EmailLayout preview={`Your booking for ${charterName} was approved!`}>
      <EmailHeader title="Booking Approved! 🎉" subtitle="Time to secure your spot" />

      <Section style={content}>
        <Text style={greeting}>Hi {userName},</Text>

        <Section style={successBox}>
          <Text style={successText}>
            ✅ Great news! Your booking has been approved by the captain.
          </Text>
        </Section>

        <Text style={paragraph}>
          Complete your payment to confirm your booking and secure your spot.
        </Text>

        <Section style={detailsSection}>
          <InfoBox label="Charter" value={charterName} />
          <InfoBox label="Date" value={tripDate} />
        </Section>

        <EmailButton href={paymentUrl}>Complete Payment</EmailButton>

        <Hr style={divider} />

        <Text style={footerText}>
          Questions? View your full booking details{" "}
          <Link href={confirmationUrl} style={link}>
            here
          </Link>
          .
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

const successBox = {
  backgroundColor: "#f0fdf4",
  borderLeft: "4px solid #22c55e",
  padding: "16px",
  borderRadius: "6px",
  margin: "0 0 24px",
};

const successText = {
  fontSize: "16px",
  color: "#166534",
  margin: "0",
  fontWeight: "600",
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

BookingApprovedEmail.PreviewProps = {
  userName: "Ahmad",
  charterName: "Full Day Deep Sea Adventure",
  tripDate: "Saturday, November 15, 2025",
  paymentUrl: "https://fishon.my/book/payment?id=123",
  confirmationUrl: "https://fishon.my/book/confirm?id=123",
} as BookingApprovedEmailProps;

export default BookingApprovedEmail;
