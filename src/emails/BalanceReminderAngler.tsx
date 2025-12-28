import { Hr, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailButton } from "../components/EmailButton";
import { EmailHeader } from "../components/EmailHeader";
import { EmailLayout } from "../components/EmailLayout";
import { InfoBox } from "../components/InfoBox";

interface BalanceReminderAnglerEmailProps {
  userName: string;
  charterName: string;
  captainName: string;
  captainPhone: string;
  tripName: string;
  tripDate: string;
  tripDays: number;
  startTime?: string;
  balanceAmount: string;
  meetingPoint?: string;
  bookingUrl: string;
}

export function BalanceReminderAnglerEmail({
  userName,
  charterName,
  captainName,
  captainPhone,
  tripName,
  tripDate,
  tripDays,
  startTime,
  balanceAmount,
  meetingPoint,
  bookingUrl,
}: BalanceReminderAnglerEmailProps) {
  const tripDateDisplay = `${tripDate} • ${tripDays} ${tripDays > 1 ? "Days" : "Day"}`;

  return (
    <EmailLayout preview={`Reminder: Bring ${balanceAmount} for your trip tomorrow!`}>
      <EmailHeader
        title="Trip Tomorrow! 🎣"
        subtitle={`Don't forget your balance payment`}
      />

      <Section style={content}>
        <Text style={greeting}>
          Hi {userName}, / Hai {userName},
        </Text>

        <Text style={paragraph}>
          Your fishing trip with {charterName} is tomorrow! This is a friendly
          reminder to prepare your balance payment.
        </Text>
        <Text style={paragraphMy}>
          Perjalanan memancing anda dengan {charterName} adalah esok! Ini adalah
          peringatan mesra untuk menyediakan bayaran baki anda.
        </Text>

        <Section style={highlightBox}>
          <Text style={highlightTitle}>💵 Balance Payment Required</Text>
          <Text style={highlightAmount}>{balanceAmount}</Text>
          <Text style={highlightText}>
            Please bring this amount to pay Captain {captainName} directly.
            <br />
            Accepted: Cash, Bank Transfer, or E-Wallet.
          </Text>
          <Text style={highlightTextMy}>
            Sila bawa jumlah ini untuk dibayar terus kepada Kapten {captainName}.
            <br />
            Kaedah diterima: Tunai, Pindahan Bank, atau E-Wallet.
          </Text>
        </Section>

        <Section style={detailsSection}>
          <Text style={sectionTitle}>Trip Details / Butiran Perjalanan</Text>

          <InfoBox label="Charter" value={charterName} />
          <InfoBox label="Trip / Perjalanan" value={tripName} />
          <InfoBox label="Date / Tarikh" value={tripDateDisplay} />
          {startTime && (
            <InfoBox label="Start Time / Masa Mula" value={startTime} />
          )}
          {meetingPoint && (
            <InfoBox label="Meeting Point / Titik Pertemuan" value={meetingPoint} />
          )}
        </Section>

        <Section style={detailsSection}>
          <Text style={sectionTitle}>Captain Contact / Hubungi Kapten</Text>

          <InfoBox label="Captain / Kapten" value={captainName} />
          <InfoBox label="Phone / Telefon" value={captainPhone} />
        </Section>

        <EmailButton href={bookingUrl}>
          View Booking Details / Lihat Butiran Tempahan
        </EmailButton>

        <Hr style={divider} />

        <Section style={checklistSection}>
          <Text style={checklistTitle}>Pre-Trip Checklist / Senarai Semak:</Text>
          <Text style={checklistItem}>✅ Balance payment ready / Bayaran baki sedia</Text>
          <Text style={checklistItem}>✅ Sunscreen & hat / Pelindung matahari & topi</Text>
          <Text style={checklistItem}>✅ Light snacks & drinks / Snek ringan & minuman</Text>
          <Text style={checklistItem}>✅ Camera for your catch! / Kamera untuk tangkapan anda!</Text>
        </Section>

        <Text style={footerText}>
          Have a great trip and tight lines! 🎣
          <br />
          <em>Selamat memancing dan semoga berjaya!</em>
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
  margin: "0 0 8px",
};

const paragraphMy = {
  fontSize: "14px",
  color: "#6b7280",
  lineHeight: "1.6",
  margin: "0 0 24px",
  fontStyle: "italic" as const,
};

const highlightBox = {
  backgroundColor: "#fef3c7",
  border: "2px solid #f59e0b",
  borderRadius: "8px",
  padding: "20px",
  margin: "24px 0",
  textAlign: "center" as const,
};

const highlightTitle = {
  fontSize: "16px",
  fontWeight: "700",
  color: "#92400e",
  margin: "0 0 8px",
};

const highlightAmount = {
  fontSize: "32px",
  fontWeight: "800",
  color: "#78350f",
  margin: "8px 0 16px",
};

const highlightText = {
  fontSize: "14px",
  color: "#78350f",
  lineHeight: "1.5",
  margin: "0 0 4px",
};

const highlightTextMy = {
  fontSize: "13px",
  color: "#92400e",
  lineHeight: "1.5",
  margin: "8px 0 0",
  fontStyle: "italic" as const,
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

const checklistSection = {
  backgroundColor: "#f0fdf4",
  borderRadius: "8px",
  padding: "16px",
  margin: "24px 0",
};

const checklistTitle = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#166534",
  margin: "0 0 12px",
};

const checklistItem = {
  fontSize: "14px",
  color: "#15803d",
  margin: "0 0 8px",
  lineHeight: "1.4",
};

const footerText = {
  fontSize: "14px",
  color: "#6b7280",
  margin: "0",
  lineHeight: "1.6",
  textAlign: "center" as const,
};

// Default props for preview
BalanceReminderAnglerEmail.PreviewProps = {
  userName: "Ahmad",
  charterName: "Full Day Deep Sea Adventure",
  captainName: "Hassan",
  captainPhone: "+60 12-987 6543",
  tripName: "Half Day Trip",
  tripDate: "24 October 2025",
  tripDays: 1,
  startTime: "6:00 AM",
  balanceAmount: "RM 560",
  meetingPoint: "Kuala Terengganu Jetty",
  bookingUrl: "https://fishon.my/bookings/123",
} as BalanceReminderAnglerEmailProps;

export default BalanceReminderAnglerEmail;
