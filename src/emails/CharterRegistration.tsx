import { Hr, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailButton } from "../components/EmailButton";
import { EmailHeader } from "../components/EmailHeader";
import { EmailLayout } from "../components/EmailLayout";

interface CharterRegistrationEmailProps {
  captainName: string;
  charterName: string;
  dashboardUrl: string;
}

export function CharterRegistrationEmail({
  captainName,
  charterName,
  dashboardUrl,
}: CharterRegistrationEmailProps) {
  return (
    <EmailLayout preview={`${charterName} charter registered successfully!`}>
      <EmailHeader
        title="Charter Registration Successful! 🎣"
        subtitle={`${charterName} is now on Fishon`}
      />

      <Section style={content}>
        <Text style={greeting}>
          Hi {captainName}, / Hai {captainName},
        </Text>

        <Text style={paragraph}>
          Congratulations! Your charter <strong>{charterName}</strong> has been
          successfully registered on Fishon.my. We&apos;re excited to help you
          connect with anglers and grow your fishing charter business.
        </Text>
        <Text style={paragraphMy}>
          Tahniah! Charter anda <strong>{charterName}</strong> telah berjaya
          didaftarkan di Fishon.my. Kami teruja untuk membantu anda berhubung
          dengan pemancing dan mengembangkan perniagaan charter memancing anda.
        </Text>

        <Section style={successBox}>
          <Text style={successText}>
            ✓ Charter registration complete! / Pendaftaran charter selesai!
          </Text>
        </Section>

        <Section style={nextStepsBox}>
          <Text style={nextStepsTitle}>
            📋 Next Steps / Langkah Seterusnya:
          </Text>
          <Text style={stepsList}>
            <strong>
              1. Set Your Availability / Tetapkan Ketersediaan Anda
            </strong>
            <br />
            Configure your calendar and booking preferences / Konfigurasikan
            kalendar dan pilihan tempahan anda
            <br />
            <br />
            <strong>2. Get Verified / Dapatkan Pengesahan</strong>
            <br />
            Upload required documents for captain verification / Muat naik
            dokumen yang diperlukan untuk pengesahan kapten
          </Text>
        </Section>

        <EmailButton href={dashboardUrl}>
          Go to Dashboard / Pergi ke Papan Pemuka
        </EmailButton>

        <Hr style={divider} />

        <Section style={infoBox}>
          <Text style={infoTitle}>📞 Need Help? / Perlukan Bantuan?</Text>
          <Text style={infoText}>
            Our team will review your charter listing and contact you if we need
            any additional information. If you have questions, reach out to us:
            <br />
            <em>
              Pasukan kami akan menyemak penyenaraian charter anda dan
              menghubungi anda jika kami memerlukan sebarang maklumat tambahan.
              Jika anda mempunyai pertanyaan, hubungi kami:
            </em>
          </Text>
          <Text style={infoText}>
            Email / Emel:{" "}
            <a href="mailto:captain@fishon.my" style={link}>
              captain@fishon.my
            </a>
            <br />
            WhatsApp:{" "}
            <a href="https://wa.me/60123456789" style={link}>
              +60 12-345 6789
            </a>
          </Text>
        </Section>

        <Text style={footerText}>
          Welcome aboard! We look forward to helping you grow your fishing
          charter business.
          <br />
          <em>
            Selamat datang ke atas kapal! Kami tidak sabar untuk membantu anda
            mengembangkan perniagaan charter memancing anda.
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
};

const successText = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#166534",
  margin: "0",
};

const nextStepsBox = {
  backgroundColor: "#fef9f5",
  borderLeft: "4px solid #ec2227",
  padding: "20px",
  borderRadius: "6px",
  margin: "24px 0",
};

const nextStepsTitle = {
  fontSize: "18px",
  fontWeight: "600",
  color: "#111827",
  margin: "0 0 16px",
};

const stepsList = {
  fontSize: "15px",
  color: "#374151",
  lineHeight: "1.8",
  margin: "0",
};

const divider = {
  borderColor: "#e5e7eb",
  margin: "24px 0",
};

const infoBox = {
  backgroundColor: "#f9fafb",
  padding: "16px",
  borderRadius: "6px",
  margin: "24px 0",
};

const infoTitle = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#111827",
  margin: "0 0 8px",
};

const infoText = {
  fontSize: "14px",
  color: "#374151",
  lineHeight: "1.6",
  margin: "8px 0 0 0",
};

const link = {
  color: "#ec2227",
  textDecoration: "underline",
};

const footerText = {
  fontSize: "14px",
  color: "#6b7280",
  margin: "24px 0 0 0",
  fontStyle: "italic",
};

CharterRegistrationEmail.PreviewProps = {
  captainName: "Hassan",
  charterName: "Full Day Deep Sea Adventure",
  dashboardUrl: "https://captain.fishon.my/captain/dashboard",
} as CharterRegistrationEmailProps;

export default CharterRegistrationEmail;
