import { Hr, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailButton } from "../components/EmailButton";
import { EmailHeader } from "../components/EmailHeader";
import { EmailLayout } from "../components/EmailLayout";
import { InfoBox } from "../components/InfoBox";

interface ReferralCommissionEarnedEmailProps {
  invitorName: string;
  inviteeName: string;
  tripName: string;
  tripEarnings: string;
  commissionAmount: string;
  totalReferralEarnings: string;
  pendingEarnings: string;
  dashboardUrl: string;
  earnedAt: string;
}

export function ReferralCommissionEarnedEmail({
  invitorName,
  inviteeName,
  tripName,
  tripEarnings,
  commissionAmount,
  totalReferralEarnings,
  pendingEarnings,
  dashboardUrl,
  earnedAt,
}: ReferralCommissionEarnedEmailProps) {
  return (
    <EmailLayout
      preview={`💰 You earned ${commissionAmount} from your referral!`}
    >
      <EmailHeader
        title="💰 Commission Earned!"
        subtitle="Captain Affiliate Programme"
      />

      <Section style={content}>
        <Text style={greeting}>
          Hi Captain {invitorName}, / Hai Kapten {invitorName},
        </Text>

        <Text style={paragraph}>
          Congratulations! Your referral <strong>{inviteeName}</strong> just
          completed their first trip, and you&apos;ve earned a commission!
        </Text>
        <Text style={paragraphMy}>
          Tahniah! Rujukan anda <strong>{inviteeName}</strong> baru sahaja
          melengkapkan perjalanan pertama mereka, dan anda telah memperoleh
          komisen!
        </Text>

        <Section style={earningsBox}>
          <Text style={earningsLabel}>Your Commission / Komisen Anda</Text>
          <Text style={earningsValue}>{commissionAmount}</Text>
          <Text style={earningsNote}>
            10% of {tripEarnings} captain earnings
            <br />
            <em>10% daripada pendapatan kapten {tripEarnings}</em>
          </Text>
        </Section>

        <Section style={detailsSection}>
          <Text style={sectionTitle}>Trip Details / Butiran Perjalanan</Text>
          <InfoBox
            label="Referred Captain / Kapten Dirujuk"
            value={inviteeName}
          />
          <InfoBox label="Trip / Perjalanan" value={tripName} />
          <InfoBox
            label="Trip Earnings / Pendapatan Perjalanan"
            value={tripEarnings}
          />
          <InfoBox label="Completed On / Selesai Pada" value={earnedAt} />
        </Section>

        <Section style={summarySection}>
          <Text style={sectionTitle}>
            Your Referral Summary / Ringkasan Rujukan Anda
          </Text>

          <Section style={summaryRow}>
            <Text style={summaryLabel}>Total Earned / Jumlah Diperoleh</Text>
            <Text style={summaryValueGreen}>{totalReferralEarnings}</Text>
          </Section>

          <Section style={summaryRow}>
            <Text style={summaryLabel}>
              Pending Payout / Menunggu Pembayaran
            </Text>
            <Text style={summaryValueYellow}>{pendingEarnings}</Text>
          </Section>
        </Section>

        <Section style={infoBox}>
          <Text style={infoTitle}>
            ℹ️ Payment Information / Maklumat Pembayaran
          </Text>
          <Text style={infoText}>
            Your commission will be included in your next payout cycle and
            transferred to your registered bank account.
            <br />
            <em>
              Komisen anda akan dimasukkan dalam kitaran pembayaran seterusnya
              dan dipindahkan ke akaun bank berdaftar anda.
            </em>
          </Text>
        </Section>

        <EmailButton href={dashboardUrl}>
          View Referral Dashboard / Lihat Papan Pemuka Rujukan
        </EmailButton>

        <Hr style={divider} />

        <Text style={footerText}>
          Thank you for growing the Fishon community! Keep sharing your referral
          link to earn more.
          <br />
          <em>
            Terima kasih kerana mengembangkan komuniti Fishon! Terus kongsi
            pautan rujukan anda untuk memperoleh lebih banyak.
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

const earningsBox = {
  backgroundColor: "#fef3c7",
  borderLeft: "4px solid #f59e0b",
  padding: "20px",
  borderRadius: "6px",
  margin: "24px 0",
  textAlign: "center" as const,
};

const earningsLabel = {
  fontSize: "14px",
  color: "#92400e",
  margin: "0 0 8px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  fontWeight: "700",
};

const earningsValue = {
  fontSize: "32px",
  fontWeight: "700",
  color: "#92400e",
  margin: "0 0 8px",
};

const earningsNote = {
  fontSize: "12px",
  color: "#a16207",
  margin: "0",
  lineHeight: "1.5",
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
  padding: "16px",
  backgroundColor: "#f9fafb",
  borderRadius: "8px",
};

const summaryRow = {
  display: "flex" as const,
  justifyContent: "space-between" as const,
  alignItems: "center" as const,
  padding: "8px 0",
  borderBottom: "1px solid #e5e7eb",
};

const summaryLabel = {
  fontSize: "14px",
  color: "#6b7280",
  margin: "0",
};

const summaryValueGreen = {
  fontSize: "16px",
  fontWeight: "700",
  color: "#166534",
  margin: "0",
};

const summaryValueYellow = {
  fontSize: "16px",
  fontWeight: "700",
  color: "#a16207",
  margin: "0",
};

const infoBox = {
  backgroundColor: "#eff6ff",
  border: "1px solid #bfdbfe",
  padding: "16px",
  borderRadius: "8px",
  margin: "24px 0",
};

const infoTitle = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#1e40af",
  margin: "0 0 8px",
};

const infoText = {
  fontSize: "13px",
  color: "#3b82f6",
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
  lineHeight: "1.6",
};

// Default props for preview
ReferralCommissionEarnedEmail.PreviewProps = {
  invitorName: "Ahmad",
  inviteeName: "Budi Santoso",
  tripName: "Half Day Trolling",
  tripEarnings: "RM 1,000.00",
  commissionAmount: "RM 100.00",
  totalReferralEarnings: "RM 350.00",
  pendingEarnings: "RM 100.00",
  dashboardUrl: "https://captain.fishon.my/captain/referrals",
  earnedAt: "December 2, 2025",
} as ReferralCommissionEarnedEmailProps;

export default ReferralCommissionEarnedEmail;
