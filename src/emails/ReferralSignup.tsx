import { Hr, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailButton } from "../components/EmailButton";
import { EmailHeader } from "../components/EmailHeader";
import { EmailLayout } from "../components/EmailLayout";
import { InfoBox } from "../components/InfoBox";

interface ReferralSignupEmailProps {
  invitorName: string;
  inviteeName: string;
  registeredAt: string;
  dashboardUrl: string;
  totalReferrals: number;
}

export function ReferralSignupEmail({
  invitorName,
  inviteeName,
  registeredAt,
  dashboardUrl,
  totalReferrals,
}: ReferralSignupEmailProps) {
  return (
    <EmailLayout preview={`🎉 Your referral ${inviteeName} just signed up!`}>
      <EmailHeader
        title="🎉 New Referral Signup!"
        subtitle="Captain Affiliate Programme"
      />

      <Section style={content}>
        <Text style={greeting}>
          Hi Captain {invitorName}, / Hai Kapten {invitorName},
        </Text>

        <Text style={paragraph}>
          Great news! Your referral <strong>{inviteeName}</strong> has just
          signed up on Fishon Captain using your referral link!
        </Text>
        <Text style={paragraphMy}>
          Berita baik! Rujukan anda <strong>{inviteeName}</strong> baru sahaja
          mendaftar di Fishon Captain menggunakan pautan rujukan anda!
        </Text>

        <Section style={successBox}>
          <Text style={successTitle}>
            Referral Registered / Rujukan Berdaftar
          </Text>
          <Text style={successValue}>{inviteeName}</Text>
        </Section>

        <Section style={detailsSection}>
          <Text style={sectionTitle}>
            What&apos;s Next / Langkah Seterusnya
          </Text>

          <Section style={stepBox}>
            <Text style={stepNumber}>1</Text>
            <Text style={stepText}>
              They create their first charter listing
              <br />
              <em style={stepTextMy}>
                Mereka mencipta senarai charter pertama
              </em>
            </Text>
          </Section>

          <Section style={stepBox}>
            <Text style={stepNumber}>2</Text>
            <Text style={stepText}>
              They complete their first trip
              <br />
              <em style={stepTextMy}>Mereka melengkapkan perjalanan pertama</em>
            </Text>
          </Section>

          <Section style={stepBox}>
            <Text style={stepNumber}>3</Text>
            <Text style={stepText}>
              You earn up to RM 100 commission! 💰
              <br />
              <em style={stepTextMy}>
                Anda memperoleh komisen sehingga RM 100! 💰
              </em>
            </Text>
          </Section>
        </Section>

        <Section style={detailsSection}>
          <Text style={sectionTitle}>Referral Details / Butiran Rujukan</Text>
          <InfoBox label="Name / Nama" value={inviteeName} />
          <InfoBox label="Registered / Didaftarkan" value={registeredAt} />
          <InfoBox
            label="Your Total Referrals / Jumlah Rujukan Anda"
            value={String(totalReferrals)}
          />
        </Section>

        <EmailButton href={dashboardUrl}>
          View Referral Dashboard / Lihat Papan Pemuka Rujukan
        </EmailButton>

        <Hr style={divider} />

        <Text style={footerText}>
          Keep sharing your referral link to earn more! Thank you for helping
          grow the Fishon community.
          <br />
          <em>
            Terus kongsi pautan rujukan anda untuk memperoleh lebih banyak!
            Terima kasih kerana membantu mengembangkan komuniti Fishon.
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
  backgroundColor: "#f0fdf4",
  borderLeft: "4px solid #22c55e",
  padding: "16px",
  borderRadius: "6px",
  margin: "24px 0",
  textAlign: "center" as const,
};

const successTitle = {
  fontSize: "14px",
  color: "#166534",
  margin: "0 0 8px",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  fontWeight: "700",
};

const successValue = {
  fontSize: "20px",
  fontWeight: "700",
  color: "#166534",
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

const stepBox = {
  display: "flex" as const,
  alignItems: "flex-start" as const,
  gap: "12px",
  margin: "12px 0",
  padding: "12px",
  backgroundColor: "#f9fafb",
  borderRadius: "8px",
};

const stepNumber = {
  backgroundColor: "#ec2227",
  color: "#ffffff",
  width: "24px",
  height: "24px",
  borderRadius: "50%",
  fontSize: "14px",
  fontWeight: "700",
  textAlign: "center" as const,
  lineHeight: "24px",
  margin: "0",
  flexShrink: 0,
};

const stepText = {
  fontSize: "14px",
  color: "#374151",
  margin: "0",
  lineHeight: "1.5",
};

const stepTextMy = {
  color: "#6b7280",
  fontSize: "12px",
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
ReferralSignupEmail.PreviewProps = {
  invitorName: "Ahmad",
  inviteeName: "Budi Santoso",
  registeredAt: "December 2, 2025",
  dashboardUrl: "https://captain.fishon.my/captain/referrals",
  totalReferrals: 5,
} as ReferralSignupEmailProps;

export default ReferralSignupEmail;
