import { Hr, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailButton } from "../components/EmailButton";
import { EmailHeader } from "../components/EmailHeader";
import { EmailLayout } from "../components/EmailLayout";
import { InfoBox } from "../components/InfoBox";

interface ReferralCommissionPaidEmailProps {
  invitorName: string;
  commissionAmount: string;
  bankAccountLast4: string;
  bankName: string;
  payoutDate: string;
  payoutReference: string;
  totalPaidToDate: string;
  dashboardUrl: string;
}

export function ReferralCommissionPaidEmail({
  invitorName,
  commissionAmount,
  bankAccountLast4,
  bankName,
  payoutDate,
  payoutReference,
  totalPaidToDate,
  dashboardUrl,
}: ReferralCommissionPaidEmailProps) {
  return (
    <EmailLayout preview={`💵 Referral commission paid - ${commissionAmount}`}>
      <EmailHeader
        title="💵 Commission Paid!"
        subtitle="Captain Affiliate Programme"
      />

      <Section style={content}>
        <Text style={greeting}>
          Hi Captain {invitorName}, / Hai Kapten {invitorName},
        </Text>

        <Text style={paragraph}>
          Your referral commission has been successfully transferred to your
          bank account!
        </Text>
        <Text style={paragraphMy}>
          Komisen rujukan anda telah berjaya dipindahkan ke akaun bank anda!
        </Text>

        <Section style={paidBox}>
          <Text style={paidLabel}>Amount Paid / Jumlah Dibayar</Text>
          <Text style={paidValue}>{commissionAmount}</Text>
          <Text style={paidCheck}>✓ Payment Successful</Text>
        </Section>

        <Section style={detailsSection}>
          <Text style={sectionTitle}>Payment Details / Butiran Pembayaran</Text>
          <InfoBox label="Amount / Jumlah" value={commissionAmount} />
          <InfoBox label="Bank / Bank" value={bankName} />
          <InfoBox label="Account / Akaun" value={`****${bankAccountLast4}`} />
          <InfoBox label="Date / Tarikh" value={payoutDate} />
          <InfoBox label="Reference / Rujukan" value={payoutReference} />
        </Section>

        <Section style={summarySection}>
          <Text style={sectionTitle}>
            Lifetime Earnings / Pendapatan Sepanjang Masa
          </Text>
          <Section style={summaryBox}>
            <Text style={summaryLabel}>Total Referral Commissions Paid</Text>
            <Text style={summaryValue}>{totalPaidToDate}</Text>
            <Text style={summarySubtext}>
              <em>Jumlah komisen rujukan dibayar</em>
            </Text>
          </Section>
        </Section>

        <EmailButton href={dashboardUrl}>
          View Referral Dashboard / Lihat Papan Pemuka Rujukan
        </EmailButton>

        <Hr style={divider} />

        <Text style={footerText}>
          Thank you for being a valued member of our affiliate programme! Keep
          sharing your referral link to earn more.
          <br />
          <em>
            Terima kasih kerana menjadi ahli berharga program affiliate kami!
            Terus kongsi pautan rujukan anda untuk memperoleh lebih banyak.
          </em>
        </Text>

        <Text style={supportText}>
          If you have any questions about this payment, please contact our
          support team.
          <br />
          <em>
            Jika anda mempunyai sebarang soalan mengenai pembayaran ini, sila
            hubungi pasukan sokongan kami.
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

const paidBox = {
  backgroundColor: "#f0fdf4",
  borderLeft: "4px solid #22c55e",
  padding: "20px",
  borderRadius: "6px",
  margin: "24px 0",
  textAlign: "center" as const,
};

const paidLabel = {
  fontSize: "14px",
  color: "#166534",
  margin: "0 0 8px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  fontWeight: "700",
};

const paidValue = {
  fontSize: "32px",
  fontWeight: "700",
  color: "#166534",
  margin: "0 0 8px",
};

const paidCheck = {
  fontSize: "14px",
  color: "#15803d",
  margin: "0",
  fontWeight: "600",
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

const summarySection = {
  margin: "24px 0",
};

const summaryBox = {
  backgroundColor: "#f9fafb",
  padding: "20px",
  borderRadius: "8px",
  textAlign: "center" as const,
};

const summaryLabel = {
  fontSize: "14px",
  color: "#6b7280",
  margin: "0 0 8px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
};

const summaryValue = {
  fontSize: "28px",
  fontWeight: "700",
  color: "#111827",
  margin: "0 0 4px",
};

const summarySubtext = {
  fontSize: "12px",
  color: "#9ca3af",
  margin: "0",
};

const divider = {
  borderColor: "#e5e7eb",
  margin: "24px 0",
};

const footerText = {
  fontSize: "14px",
  color: "#6b7280",
  margin: "0 0 16px",
  lineHeight: "1.6",
};

const supportText = {
  fontSize: "12px",
  color: "#9ca3af",
  margin: "0",
  lineHeight: "1.6",
};

// Default props for preview
ReferralCommissionPaidEmail.PreviewProps = {
  invitorName: "Ahmad",
  commissionAmount: "RM 100.00",
  bankAccountLast4: "1234",
  bankName: "Maybank",
  payoutDate: "December 5, 2025",
  payoutReference: "2025-W49-REF001",
  totalPaidToDate: "RM 350.00",
  dashboardUrl: "https://captain.fishon.my/captain/referrals",
} as ReferralCommissionPaidEmailProps;

export default ReferralCommissionPaidEmail;
