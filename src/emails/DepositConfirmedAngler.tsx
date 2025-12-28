import { Hr, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailButton } from "../components/EmailButton";
import { EmailHeader } from "../components/EmailHeader";
import { EmailLayout } from "../components/EmailLayout";
import { InfoBox } from "../components/InfoBox";

interface DepositConfirmedAnglerEmailProps {
  userName: string;
  charterName: string;
  captainName: string;
  captainEmail: string;
  captainPhone: string;
  tripName: string;
  tripDate: string;
  tripDays: number;
  durationHours: number;
  startTime?: string;
  totalPrice: string;
  depositAmount: string;
  balanceAmount: string;
  depositPercent: number;
  bookingUrl: string;
}

export function DepositConfirmedAnglerEmail({
  userName,
  charterName,
  captainName,
  captainEmail,
  captainPhone,
  tripName,
  tripDate,
  tripDays,
  durationHours,
  startTime,
  totalPrice,
  depositAmount,
  balanceAmount,
  depositPercent,
  bookingUrl,
}: DepositConfirmedAnglerEmailProps) {
  const tripDateDisplay = `${tripDate} • ${tripDays} ${tripDays > 1 ? "Days" : "Day"}`;
  const durationDisplay = `${durationHours} ${durationHours > 1 ? "hours" : "hour"}`;

  return (
    <EmailLayout preview={`Deposit confirmed - ${balanceAmount} balance due on trip day`}>
      <EmailHeader
        title="Deposit Confirmed ✅"
        subtitle={`Charter: ${charterName}`}
      />

      <Section style={content}>
        <Text style={greeting}>
          Hi {userName}, / Hai {userName},
        </Text>

        <Text style={paragraph}>
          Great news! Your deposit of {depositAmount} ({depositPercent}%) has been confirmed.
          Captain {captainName} has acknowledged your booking. Please prepare the balance
          payment of {balanceAmount} to pay the captain directly on the trip day.
        </Text>
        <Text style={paragraphMy}>
          Berita baik! Deposit anda sebanyak {depositAmount} ({depositPercent}%) telah disahkan.
          Kapten {captainName} telah menerima tempahan anda. Sila sediakan bayaran baki
          sebanyak {balanceAmount} untuk dibayar terus kepada kapten pada hari perjalanan.
        </Text>

        <Section style={highlightBox}>
          <Text style={highlightTitle}>⚠️ Balance Payment Due on Trip Day</Text>
          <Text style={highlightText}>
            Please bring {balanceAmount} to pay the captain directly. Accepted methods:
            Cash, Bank Transfer, or E-Wallet.
          </Text>
          <Text style={highlightTextMy}>
            Sila bawa {balanceAmount} untuk dibayar terus kepada kapten. Kaedah yang diterima:
            Tunai, Pindahan Bank, atau E-Wallet.
          </Text>
        </Section>

        <Section style={detailsSection}>
          <Text style={sectionTitle}>Payment Summary / Ringkasan Pembayaran</Text>

          <InfoBox label="Total Trip Price / Jumlah Harga" value={totalPrice} />
          <InfoBox label="Deposit Paid / Deposit Dibayar" value={`${depositAmount} (${depositPercent}%)`} />
          <InfoBox label="Balance Due / Baki Perlu Dibayar" value={balanceAmount} />
        </Section>

        <Section style={detailsSection}>
          <Text style={sectionTitle}>Booking Details / Butiran Tempahan</Text>

          <InfoBox label="Charter" value={charterName} />
          <InfoBox label="Trip / Perjalanan" value={tripName} />
          <InfoBox label="Date / Tarikh" value={tripDateDisplay} />
          <InfoBox label="Duration / Tempoh" value={durationDisplay} />
          {startTime && (
            <InfoBox label="Start Time / Masa Mula" value={startTime} />
          )}
        </Section>

        <Section style={detailsSection}>
          <Text style={sectionTitle}>
            Captain Contact Information / Maklumat Hubungan Kapten
          </Text>

          <InfoBox label="Name / Nama" value={captainName} />
          <InfoBox label="Email / Emel" value={captainEmail} />
          <InfoBox label="Phone / Telefon" value={captainPhone} />
        </Section>

        <EmailButton href={bookingUrl}>
          View Booking Details / Lihat Butiran Tempahan
        </EmailButton>

        <Hr style={divider} />

        <Text style={footerText}>
          Get ready for an amazing fishing adventure! Remember to bring the balance
          payment on the trip day. If you have any questions, feel free to contact
          your captain or our support team.
          <br />
          <em>
            Bersiap sedia untuk pengembaraan memancing yang menarik! Ingat untuk
            membawa bayaran baki pada hari perjalanan. Jika ada sebarang pertanyaan,
            sila hubungi kapten anda atau pasukan sokongan kami.
          </em>
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
  border: "1px solid #f59e0b",
  borderRadius: "8px",
  padding: "16px",
  margin: "24px 0",
};

const highlightTitle = {
  fontSize: "16px",
  fontWeight: "700",
  color: "#92400e",
  margin: "0 0 8px",
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
  margin: "0",
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

const footerText = {
  fontSize: "14px",
  color: "#6b7280",
  margin: "0",
  lineHeight: "1.6",
};

// Default props for preview
DepositConfirmedAnglerEmail.PreviewProps = {
  userName: "Ahmad",
  charterName: "Full Day Deep Sea Adventure",
  captainName: "Hassan",
  captainEmail: "hassan@example.com",
  captainPhone: "+60 12-987 6543",
  tripName: "Half Day Trip",
  tripDate: "24 October 2025",
  tripDays: 1,
  durationHours: 4,
  startTime: "6:00 AM",
  totalPrice: "RM 800",
  depositAmount: "RM 240",
  balanceAmount: "RM 560",
  depositPercent: 30,
  bookingUrl: "https://fishon.my/bookings/123",
} as DepositConfirmedAnglerEmailProps;

export default DepositConfirmedAnglerEmail;
