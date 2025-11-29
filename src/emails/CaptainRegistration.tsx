import { Hr, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailButton } from "../components/EmailButton";
import { EmailHeader } from "../components/EmailHeader";
import { EmailLayout } from "../components/EmailLayout";

interface CaptainRegistrationEmailProps {
  captainName: string;
  dashboardUrl: string;
}

export function CaptainRegistrationEmail({
  captainName,
  dashboardUrl,
}: CaptainRegistrationEmailProps) {
  return (
    <EmailLayout preview={`Welcome to Fishon Captain, ${captainName}!`}>
      <EmailHeader
        title="Registration Successful! ⚓"
        subtitle="Welcome to the Fishon Captain community"
      />

      <Section style={content}>
        <Text style={greeting}>
          Hi {captainName}, / Hai {captainName},
        </Text>

        <Text style={paragraph}>
          Congratulations! Your registration as a Captain on Fishon.my was
          successful. We&apos;re thrilled to have you join our growing community
          of professional fishing charter operators.
        </Text>
        <Text style={paragraphMy}>
          Tahniah! Pendaftaran anda sebagai Kapten di Fishon.my telah berjaya.
          Kami amat gembira anda menyertai komuniti pengendali charter memancing
          profesional kami yang semakin berkembang.
        </Text>

        <Section style={successBox}>
          <Text style={successText}>
            ✓ Your Captain account is now active! / Akaun Kapten anda kini
            aktif!
          </Text>
        </Section>

        <Section style={nextStepsBox}>
          <Text style={nextStepsTitle}>
            📋 Next Steps / Langkah Seterusnya:
          </Text>
          <Text style={stepsList}>
            <strong>1. Complete Your Profile / Lengkapkan Profil Anda</strong>
            <br />
            Add your bio, experience, and credentials / Tambah bio, pengalaman,
            dan kelayakan anda
            <br />
            <br />
            <strong>
              2. Create Your First Charter / Cipta Charter Pertama Anda
            </strong>
            <br />
            Upload photos, set pricing, and describe your trips / Muat naik
            foto, tetapkan harga, dan terangkan perjalanan anda
            <br />
            <br />
            <strong>
              3. Set Your Availability / Tetapkan Ketersediaan Anda
            </strong>
            <br />
            Configure your calendar and booking preferences / Konfigurasikan
            kalendar dan pilihan tempahan anda
            <br />
            <br />
            <strong>4. Get Verified / Dapatkan Pengesahan</strong>
            <br />
            Upload required documents for captain verification / Muat naik
            dokumen yang diperlukan untuk pengesahan kapten
          </Text>
        </Section>

        <EmailButton href={dashboardUrl}>
          Go to Captain Dashboard / Pergi ke Papan Pemuka Kapten
        </EmailButton>

        <Hr style={divider} />

        <Section style={infoBox}>
          <Text style={infoTitle}>📞 Need Help? / Perlukan Bantuan?</Text>
          <Text style={infoText}>
            Our team will review your profile and contact you if we need any
            additional information. If you have questions, reach out to us:
            <br />
            <em>
              Pasukan kami akan menyemak profil anda dan menghubungi anda jika
              kami memerlukan sebarang maklumat tambahan. Jika anda mempunyai
              pertanyaan, hubungi kami:
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
          Welcome aboard, Captain! We look forward to helping you grow your
          fishing charter business.
          <br />
          <em>
            Selamat datang ke atas kapal, Kapten! Kami tidak sabar untuk
            membantu anda mengembangkan perniagaan charter memancing anda.
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

CaptainRegistrationEmail.PreviewProps = {
  captainName: "Captain John",
  dashboardUrl: "https://captain.fishon.my/captain",
} as CaptainRegistrationEmailProps;

export default CaptainRegistrationEmail;
