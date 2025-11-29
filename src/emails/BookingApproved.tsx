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
      <EmailHeader
        title="Booking Approved! 🎉"
        subtitle="Time to secure your spot"
      />

      <Section style={content}>
        <Text style={greeting}>
          Hi {userName}, / Hai {userName},
        </Text>

        <Section style={successBox}>
          <Text style={successText}>
            ✅ Great news! Your booking has been approved by the captain.
            <br />
            <span style={{ fontWeight: "normal" }}>
              Berita baik! Tempahan anda telah diluluskan oleh kapten.
            </span>
          </Text>
        </Section>

        <Text style={paragraph}>
          Complete your payment within <strong>48 hours</strong> to confirm your
          booking and secure your spot.
        </Text>
        <Text style={paragraphMy}>
          Lengkapkan bayaran anda dalam masa <strong>48 jam</strong> untuk
          mengesahkan tempahan dan memastikan tempat anda.
        </Text>

        <Section style={warningBox}>
          <Text style={warningText}>
            ⏰ <strong>Payment Deadline / Tarikh Akhir Bayaran:</strong> Your
            booking will expire if payment is not received within 48 hours.
            Don't miss out!
            <br />
            <em>
              Tempahan anda akan tamat tempoh jika bayaran tidak diterima dalam
              48 jam. Jangan lepaskan!
            </em>
          </Text>
        </Section>

        <Section style={detailsSection}>
          <InfoBox label="Charter" value={charterName} />
          <InfoBox label="Date / Tarikh" value={tripDate} />
        </Section>

        <EmailButton href={paymentUrl}>
          Complete Payment Now / Lengkapkan Bayaran Sekarang
        </EmailButton>

        <Hr style={divider} />

        <Text style={footerText}>
          Questions? View your full booking details{" "}
          <Link href={confirmationUrl} style={link}>
            here
          </Link>
          .
          <br />
          <em>
            Ada soalan? Lihat butiran penuh tempahan anda{" "}
            <Link href={confirmationUrl} style={link}>
              di sini
            </Link>
            .
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
  lineHeight: "1.6",
};

const warningBox = {
  backgroundColor: "#fef3c7",
  borderLeft: "4px solid #f59e0b",
  padding: "16px",
  borderRadius: "6px",
  margin: "0 0 24px",
};

const warningText = {
  fontSize: "14px",
  color: "#92400e",
  margin: "0",
  lineHeight: "1.6",
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
  lineHeight: "1.6",
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
