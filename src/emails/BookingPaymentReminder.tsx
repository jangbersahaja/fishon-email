import { Hr, Link, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailButton } from "../components/EmailButton";
import { EmailHeader } from "../components/EmailHeader";
import { EmailLayout } from "../components/EmailLayout";
import { InfoBox } from "../components/InfoBox";

interface BookingPaymentReminderEmailProps {
  userName: string;
  charterName: string;
  tripDate: string;
  hoursRemaining: number;
  paymentUrl: string;
  confirmationUrl: string;
}

export function BookingPaymentReminderEmail({
  userName,
  charterName,
  tripDate,
  hoursRemaining,
  paymentUrl,
  confirmationUrl,
}: BookingPaymentReminderEmailProps) {
  const isUrgent = hoursRemaining <= 6;

  return (
    <EmailLayout
      preview={`Payment reminder: ${hoursRemaining} hours left for ${charterName}`}
    >
      <EmailHeader
        title={isUrgent ? "⚠️ Payment Required Soon!" : "Payment Reminder"}
        subtitle={`${hoursRemaining} hours remaining`}
      />

      <Section style={content}>
        <Text style={greeting}>Hi {userName},</Text>

        <Section style={isUrgent ? urgentBox : reminderBox}>
          <Text style={isUrgent ? urgentText : reminderText}>
            {isUrgent ? (
              <>
                <strong>Urgent:</strong> You have only {hoursRemaining} hours
                left to complete payment for your approved booking!
              </>
            ) : (
              <>
                You have {hoursRemaining} hours remaining to complete payment
                for your approved booking.
              </>
            )}
          </Text>
        </Section>

        <Text style={paragraph}>
          Your booking for <strong>{charterName}</strong> on {tripDate} has been
          approved by the captain. Complete your payment now to secure your spot
          before it expires.
        </Text>

        <Section style={detailsSection}>
          <InfoBox label="Charter" value={charterName} />
          <InfoBox label="Date" value={tripDate} />
          <InfoBox label="Time Remaining" value={`${hoursRemaining} hours`} />
        </Section>

        <EmailButton href={paymentUrl}>
          {isUrgent ? "Pay Now - Don't Miss Out!" : "Complete Payment"}
        </EmailButton>

        <Hr style={divider} />

        <Text style={footerText}>
          If you no longer wish to proceed with this booking, you can cancel it{" "}
          <Link href={confirmationUrl} style={link}>
            here
          </Link>
          . Otherwise, your booking will automatically expire after 48 hours.
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

const reminderBox = {
  backgroundColor: "#fef3c7",
  borderLeft: "4px solid #f59e0b",
  padding: "16px",
  borderRadius: "6px",
  margin: "0 0 24px",
};

const reminderText = {
  fontSize: "16px",
  color: "#92400e",
  margin: "0",
};

const urgentBox = {
  backgroundColor: "#fee2e2",
  borderLeft: "4px solid #ef4444",
  padding: "16px",
  borderRadius: "6px",
  margin: "0 0 24px",
};

const urgentText = {
  fontSize: "16px",
  color: "#991b1b",
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

BookingPaymentReminderEmail.PreviewProps = {
  userName: "Ahmad",
  charterName: "Full Day Deep Sea Adventure",
  tripDate: "Saturday, November 15, 2025",
  hoursRemaining: 6,
  paymentUrl: "https://fishon.my/book/payment?id=123",
  confirmationUrl: "https://fishon.my/book/confirm?id=123",
} as BookingPaymentReminderEmailProps;

export default BookingPaymentReminderEmail;
