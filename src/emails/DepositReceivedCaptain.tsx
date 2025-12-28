import { Hr, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailButton } from "../components/EmailButton";
import { EmailHeader } from "../components/EmailHeader";
import { EmailLayout } from "../components/EmailLayout";
import { InfoBox } from "../components/InfoBox";

interface DepositReceivedCaptainEmailProps {
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
  totalPrice: string;
  depositAmount: string;
  balanceAmount: string;
  depositPercent: number;
  platformFee: string;
  captainEarnings: string;
  bookingUrl: string;
}

export function DepositReceivedCaptainEmail({
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
  totalPrice,
  depositAmount,
  balanceAmount,
  depositPercent,
  platformFee,
  captainEarnings,
  bookingUrl,
}: DepositReceivedCaptainEmailProps) {
  const tripDateDisplay = `${tripDate} • ${tripDays} ${tripDays > 1 ? "Days" : "Day"}`;
  const durationDisplay = `${durationHours} ${durationHours > 1 ? "hours" : "hour"}`;

  return (
    <EmailLayout preview={`Deposit received - Collect ${balanceAmount} on trip day`}>
      <EmailHeader
        title="Deposit Payment Received 💰"
        subtitle={`Charter: ${charterName}`}
      />

      <Section style={content}>
        <Text style={greeting}>
          Hi Captain {captainName},
        </Text>

        <Text style={paragraph}>
          Great news! {anglerName} has paid a deposit of {depositAmount} ({depositPercent}%)
          for their booking. Please acknowledge this booking and prepare for their trip.
        </Text>

        <Section style={highlightBox}>
          <Text style={highlightTitle}>💵 Balance to Collect on Trip Day</Text>
          <Text style={highlightText}>
            You will collect {balanceAmount} directly from the angler on the trip day.
            This balance is paid directly to you (no platform commission on balance).
          </Text>
        </Section>

        <Section style={detailsSection}>
          <Text style={sectionTitle}>Payment Breakdown</Text>

          <InfoBox label="Total Trip Price" value={totalPrice} />
          <InfoBox label="Deposit Received (via Platform)" value={`${depositAmount} (${depositPercent}%)`} />
          <InfoBox label="Balance to Collect (Direct)" value={balanceAmount} />
        </Section>

        <Section style={detailsSection}>
          <Text style={sectionTitle}>Your Earnings (from Deposit)</Text>

          <InfoBox label="Deposit Amount" value={depositAmount} />
          <InfoBox label="Platform Fee (10%)" value={platformFee} />
          <InfoBox label="Your Deposit Payout" value={captainEarnings} />
          <Text style={noteText}>
            * Platform fee is calculated on total trip price, deducted from deposit payout.
            Balance payment goes directly to you with no additional fees.
          </Text>
        </Section>

        <Section style={detailsSection}>
          <Text style={sectionTitle}>Booking Details</Text>

          <InfoBox label="Charter" value={charterName} />
          <InfoBox label="Trip" value={tripName} />
          <InfoBox label="Date" value={tripDateDisplay} />
          <InfoBox label="Duration" value={durationDisplay} />
          {startTime && <InfoBox label="Start Time" value={startTime} />}
        </Section>

        <Section style={detailsSection}>
          <Text style={sectionTitle}>Angler Information</Text>

          <InfoBox label="Name" value={anglerName} />
          <InfoBox label="Email" value={anglerEmail} />
          <InfoBox label="Phone" value={anglerPhone} />
        </Section>

        <EmailButton href={bookingUrl}>
          View Booking & Acknowledge
        </EmailButton>

        <Hr style={divider} />

        <Text style={footerText}>
          Please acknowledge this booking within 12 hours. The angler has been notified
          about the balance payment they need to bring on the trip day.
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

const highlightBox = {
  backgroundColor: "#dcfce7",
  border: "1px solid #22c55e",
  borderRadius: "8px",
  padding: "16px",
  margin: "24px 0",
};

const highlightTitle = {
  fontSize: "16px",
  fontWeight: "700",
  color: "#166534",
  margin: "0 0 8px",
};

const highlightText = {
  fontSize: "14px",
  color: "#15803d",
  lineHeight: "1.5",
  margin: "0",
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

const noteText = {
  fontSize: "12px",
  color: "#6b7280",
  margin: "8px 0 0",
  fontStyle: "italic" as const,
};

const divider = {
  borderColor: "#e5e7eb",
  margin: "24px 0",
};

const footerText = {
  fontSize: "14px",
  color: "#6b7280",
  margin: "0",
  lineHeight: "1.6",
};

// Default props for preview
DepositReceivedCaptainEmail.PreviewProps = {
  captainName: "Hassan",
  charterName: "Full Day Deep Sea Adventure",
  anglerName: "Ahmad",
  anglerEmail: "ahmad@example.com",
  anglerPhone: "+60 12-345 6789",
  tripName: "Half Day Trip",
  tripDate: "24 October 2025",
  tripDays: 1,
  durationHours: 4,
  startTime: "6:00 AM",
  totalPrice: "RM 800",
  depositAmount: "RM 240",
  balanceAmount: "RM 560",
  depositPercent: 30,
  platformFee: "RM 80",
  captainEarnings: "RM 160",
  bookingUrl: "https://captain.fishon.my/bookings/123",
} as DepositReceivedCaptainEmailProps;

export default DepositReceivedCaptainEmail;
