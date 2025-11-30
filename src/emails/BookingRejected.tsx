import { Hr, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailButton } from "../components/EmailButton";
import { EmailHeader } from "../components/EmailHeader";
import { EmailLayout } from "../components/EmailLayout";

interface BookingRejectedEmailProps {
  userName: string;
  charterName: string;
  reason?: string;
  searchUrl: string;
  paymentFlow?: "TOKENIZED" | "DIRECT"; // NEW: payment flow type
  refundAmount?: string; // For DIRECT flow
}

export function BookingRejectedEmail({
  userName,
  charterName,
  reason,
  searchUrl,
  paymentFlow,
  refundAmount,
}: BookingRejectedEmailProps) {
  return (
    <EmailLayout preview={`Booking update for ${charterName}`}>
      <EmailHeader title="Booking Update" subtitle="We're here to help" />

      <Section style={content}>
        <Text style={greeting}>
          Hi {userName}, / Hai {userName},
        </Text>

        <Text style={paragraph}>
          We&apos;re sorry, but your booking request for{" "}
          <strong>{charterName}</strong> could not be accommodated at this time.
        </Text>
        <Text style={paragraphMy}>
          Maaf, permintaan tempahan anda untuk <strong>{charterName}</strong>{" "}
          tidak dapat dipenuhi pada masa ini.
        </Text>

        {reason && (
          <Section style={reasonBox}>
            <Text style={reasonLabel}>
              Reason from Captain / Sebab dari Kapten:
            </Text>
            <Text style={reasonText}>{reason}</Text>
          </Section>
        )}

        {paymentFlow === "TOKENIZED" && (
          <Section style={infoBox}>
            <Text style={infoText}>
              💳 <strong>Good news:</strong> Your card was only authorized, not
              charged. The authorization has been released and you will not see
              any charge on your statement.
              <br />
              <em style={{ color: "#166534" }}>
                Berita baik: Kad anda hanya diluluskan, tidak dicaj. Kelulusan
                telah dilepaskan dan anda tidak akan melihat sebarang caj pada
                penyata anda.
              </em>
            </Text>
          </Section>
        )}

        {paymentFlow === "DIRECT" && refundAmount && (
          <Section style={infoBox}>
            <Text style={infoText}>
              💰 <strong>Refund initiated:</strong> We&apos;ve started
              processing your refund of {refundAmount}. The funds should appear
              in your account within 3-5 business days.
              <br />
              <em style={{ color: "#166534" }}>
                Bayaran balik dimulakan: Kami telah memulakan pemprosesan
                bayaran balik sebanyak {refundAmount}. Dana akan muncul dalam
                akaun anda dalam 3-5 hari bekerja.
              </em>
            </Text>
          </Section>
        )}

        <Text style={paragraph}>
          Don&apos;t worry! We have many other amazing fishing charters
          available. Browse our selection to find your next adventure.
        </Text>
        <Text style={paragraphMy}>
          Jangan risau! Kami mempunyai banyak charter memancing lain yang
          menarik. Layari pilihan kami untuk mencari pengembaraan anda yang
          seterusnya.
        </Text>

        <EmailButton href={searchUrl}>
          Find Other Charters / Cari Charter Lain
        </EmailButton>

        <Hr style={divider} />

        <Text style={footerText}>
          Need help finding the perfect charter? Contact our support team and
          we&apos;ll be happy to assist you.
          <br />
          <em>
            Perlukan bantuan mencari charter yang sesuai? Hubungi pasukan
            sokongan kami dan kami akan gembira membantu anda.
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

const reasonBox = {
  backgroundColor: "#fef2f2",
  borderLeft: "4px solid #ef4444",
  padding: "16px",
  borderRadius: "6px",
  margin: "0 0 24px",
};

const reasonLabel = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#991b1b",
  margin: "0 0 8px",
};

const infoBox = {
  backgroundColor: "#f0fdf4",
  borderLeft: "4px solid #22c55e",
  padding: "16px",
  borderRadius: "6px",
  margin: "0 0 24px",
};

const infoText = {
  fontSize: "14px",
  color: "#166534",
  margin: "0",
  lineHeight: "1.6",
};

const reasonText = {
  fontSize: "14px",
  color: "#7f1d1d",
  margin: "0",
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

BookingRejectedEmail.PreviewProps = {
  userName: "Ahmad",
  charterName: "Full Day Deep Sea Adventure",
  reason:
    "Unfortunately, we are fully booked for this date. Please check our availability calendar for other dates.",
  searchUrl: "https://fishon.my/search",
} as BookingRejectedEmailProps;

export default BookingRejectedEmail;
