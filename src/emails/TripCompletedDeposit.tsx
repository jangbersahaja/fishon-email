import { Hr, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailButton } from "../components/EmailButton";
import { EmailHeader } from "../components/EmailHeader";
import { EmailLayout } from "../components/EmailLayout";
import { InfoBox } from "../components/InfoBox";

interface TripCompletedDepositEmailProps {
  userName: string;
  charterName: string;
  captainName: string;
  tripName: string;
  tripDate: string;
  tripDays: number;
  totalPrice: string;
  depositAmount: string;
  balanceAmount: string;
  balancePaidMethod: string;
  reviewUrl: string;
  bookingUrl: string;
}

export function TripCompletedDepositEmail({
  userName,
  charterName,
  captainName,
  tripName,
  tripDate,
  tripDays,
  totalPrice,
  depositAmount,
  balanceAmount,
  balancePaidMethod,
  reviewUrl,
  bookingUrl,
}: TripCompletedDepositEmailProps) {
  const tripDateDisplay = `${tripDate} • ${tripDays} ${tripDays > 1 ? "Days" : "Day"}`;
  
  const getPaymentMethodDisplay = (method: string) => {
    switch (method) {
      case "CASH": return "Cash / Tunai";
      case "BANK_TRANSFER": return "Bank Transfer / Pindahan Bank";
      case "EWALLET": return "E-Wallet";
      default: return method;
    }
  };

  return (
    <EmailLayout preview={`Trip completed - How was your fishing adventure?`}>
      <EmailHeader
        title="Trip Completed! 🎣"
        subtitle={`Thank you for fishing with ${charterName}`}
      />

      <Section style={content}>
        <Text style={greeting}>
          Hi {userName}, / Hai {userName},
        </Text>

        <Text style={paragraph}>
          We hope you had an amazing fishing adventure with Captain {captainName}!
          Your trip is now complete and all payments have been confirmed.
        </Text>
        <Text style={paragraphMy}>
          Kami harap anda mempunyai pengembaraan memancing yang mengagumkan dengan
          Kapten {captainName}! Perjalanan anda kini selesai dan semua bayaran telah disahkan.
        </Text>

        <Section style={successBox}>
          <Text style={successTitle}>✅ All Payments Confirmed</Text>
          <Text style={successText}>
            Your booking is complete. Thank you for choosing Fishon!
          </Text>
        </Section>

        <Section style={detailsSection}>
          <Text style={sectionTitle}>Payment Summary / Ringkasan Pembayaran</Text>

          <InfoBox label="Total Trip Price / Jumlah Harga" value={totalPrice} />
          <InfoBox label="Deposit Paid (Online) / Deposit Dibayar" value={depositAmount} />
          <InfoBox label="Balance Paid (Direct) / Baki Dibayar" value={balanceAmount} />
          <InfoBox label="Balance Method / Kaedah Baki" value={getPaymentMethodDisplay(balancePaidMethod)} />
        </Section>

        <Section style={detailsSection}>
          <Text style={sectionTitle}>Trip Details / Butiran Perjalanan</Text>

          <InfoBox label="Charter" value={charterName} />
          <InfoBox label="Trip / Perjalanan" value={tripName} />
          <InfoBox label="Date / Tarikh" value={tripDateDisplay} />
          <InfoBox label="Captain / Kapten" value={captainName} />
        </Section>

        <Section style={reviewSection}>
          <Text style={reviewTitle}>⭐ Share Your Experience!</Text>
          <Text style={reviewText}>
            Your review helps other anglers discover great fishing charters.
            Take a moment to share your experience with Captain {captainName}.
          </Text>
          <Text style={reviewTextMy}>
            Ulasan anda membantu pemancing lain menemui charter memancing yang hebat.
            Luangkan masa untuk berkongsi pengalaman anda dengan Kapten {captainName}.
          </Text>
          <EmailButton href={reviewUrl}>
            Write a Review / Tulis Ulasan
          </EmailButton>
        </Section>

        <Hr style={divider} />

        <Text style={viewBookingText}>
          <a href={bookingUrl} style={linkStyle}>
            View Booking Details / Lihat Butiran Tempahan →
          </a>
        </Text>

        <Text style={footerText}>
          Thank you for choosing Fishon! We hope to see you on the water again soon. 🎣
          <br />
          <em>
            Terima kasih kerana memilih Fishon! Kami berharap dapat berjumpa anda
            di perairan lagi tidak lama lagi.
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

const successBox = {
  backgroundColor: "#dcfce7",
  border: "1px solid #22c55e",
  borderRadius: "8px",
  padding: "16px",
  margin: "24px 0",
  textAlign: "center" as const,
};

const successTitle = {
  fontSize: "18px",
  fontWeight: "700",
  color: "#166534",
  margin: "0 0 8px",
};

const successText = {
  fontSize: "14px",
  color: "#15803d",
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

const reviewSection = {
  backgroundColor: "#fef3c7",
  borderRadius: "8px",
  padding: "20px",
  margin: "24px 0",
  textAlign: "center" as const,
};

const reviewTitle = {
  fontSize: "18px",
  fontWeight: "700",
  color: "#92400e",
  margin: "0 0 12px",
};

const reviewText = {
  fontSize: "14px",
  color: "#78350f",
  lineHeight: "1.5",
  margin: "0 0 4px",
};

const reviewTextMy = {
  fontSize: "13px",
  color: "#92400e",
  lineHeight: "1.5",
  margin: "0 0 16px",
  fontStyle: "italic" as const,
};

const divider = {
  borderColor: "#e5e7eb",
  margin: "24px 0",
};

const viewBookingText = {
  textAlign: "center" as const,
  margin: "16px 0",
};

const linkStyle = {
  color: "#6b7280",
  fontSize: "14px",
  textDecoration: "underline",
};

const footerText = {
  fontSize: "14px",
  color: "#6b7280",
  margin: "24px 0 0",
  lineHeight: "1.6",
  textAlign: "center" as const,
};

// Default props for preview
TripCompletedDepositEmail.PreviewProps = {
  userName: "Ahmad",
  charterName: "Full Day Deep Sea Adventure",
  captainName: "Hassan",
  tripName: "Half Day Trip",
  tripDate: "24 October 2025",
  tripDays: 1,
  totalPrice: "RM 800",
  depositAmount: "RM 240",
  balanceAmount: "RM 560",
  balancePaidMethod: "CASH",
  reviewUrl: "https://fishon.my/review/123",
  bookingUrl: "https://fishon.my/bookings/123",
} as TripCompletedDepositEmailProps;

export default TripCompletedDepositEmail;
