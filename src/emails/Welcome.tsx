import { Hr, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailButton } from "../components/EmailButton";
import { EmailHeader } from "../components/EmailHeader";
import { EmailLayout } from "../components/EmailLayout";

interface WelcomeEmailProps {
  userName: string;
  userType: "angler" | "captain";
  loginUrl: string;
  promoCode?: string;
}

export function WelcomeEmail({
  userName,
  userType,
  loginUrl,
  promoCode,
}: WelcomeEmailProps) {
  const isAngler = userType === "angler";

  return (
    <EmailLayout
      preview={`Welcome to Fishon${isAngler ? "" : " Captain"}, ${userName}!`}
    >
      <EmailHeader
        title={`Welcome to Fishon${isAngler ? "" : " Captain"}! 🎣`}
        subtitle="Your fishing adventure starts here"
      />

      <Section style={content}>
        <Text style={greeting}>
          Hi {userName}, / Hai {userName},
        </Text>

        <Text style={paragraph}>
          {isAngler ? (
            <>
              Welcome to <strong>Fishon</strong> - Malaysia&apos;s premier
              fishing charter marketplace! We&apos;re excited to help you
              discover amazing fishing adventures.
            </>
          ) : (
            <>
              Welcome to <strong>Fishon Captain</strong>! Thank you for joining
              our community of professional fishing charter operators.
            </>
          )}
        </Text>
        <Text style={paragraphMy}>
          {isAngler ? (
            <>
              Selamat datang ke <strong>Fishon</strong> - pasaran charter
              memancing utama Malaysia! Kami teruja untuk membantu anda menemui
              pengembaraan memancing yang menakjubkan.
            </>
          ) : (
            <>
              Selamat datang ke <strong>Fishon Captain</strong>! Terima kasih
              kerana menyertai komuniti pengendali charter memancing profesional
              kami.
            </>
          )}
        </Text>

        {isAngler && promoCode && (
          <Section style={promoBox}>
            <Text style={promoTitle}>
              🎁 Welcome Gift! / Hadiah Selamat Datang!
            </Text>
            <Text style={promoDescription}>
              As a thank you for joining Fishon, here&apos;s a special 10%
              discount code for your first booking:
              <br />
              <em>
                Sebagai tanda terima kasih kerana menyertai Fishon, ini kod
                diskaun 10% khas untuk tempahan pertama anda:
              </em>
            </Text>
            <Section style={promoCodeBox}>
              <Text style={promoCodeText}>{promoCode}</Text>
            </Section>
            <Text style={promoNote}>
              Use this code at checkout to get 10% off your first fishing trip.
              Happy fishing! 🎣
              <br />
              <em>
                Gunakan kod ini semasa pembayaran untuk mendapat diskaun 10%
                untuk trip memancing pertama anda. Selamat memancing!
              </em>
            </Text>
          </Section>
        )}

        {isAngler ? (
          <Section style={featureBox}>
            <Text style={featureTitle}>
              🎣 What You Can Do / Apa Yang Boleh Anda Lakukan:
            </Text>
            <Text style={featureList}>
              • Browse hundreds of fishing charters across Malaysia / Layari
              ratusan charter memancing di seluruh Malaysia
              <br />
              • Book trips with experienced captains / Tempah perjalanan dengan
              kapten berpengalaman
              <br />
              • Read reviews from fellow anglers / Baca ulasan daripada rakan
              pemancing
              <br />
              • Track your bookings and trips / Jejaki tempahan dan perjalanan
              anda
              <br />• Discover new fishing spots / Temui lokasi memancing baharu
            </Text>
          </Section>
        ) : (
          <Section style={featureBox}>
            <Text style={featureTitle}>
              ⚓ Next Steps / Langkah Seterusnya:
            </Text>
            <Text style={featureList}>
              • Complete your captain profile / Lengkapkan profil kapten anda
              <br />
              • Add your fishing charters / Tambah charter memancing anda
              <br />
              • Upload photos and videos / Muat naik foto dan video
              <br />
              • Set your availability / Tetapkan ketersediaan anda
              <br />• Start receiving bookings! / Mula menerima tempahan!
            </Text>
          </Section>
        )}

        <EmailButton href={loginUrl}>
          {isAngler
            ? "Start Exploring / Mula Meneroka"
            : "Go to Dashboard / Pergi ke Papan Pemuka"}
        </EmailButton>

        <Hr style={divider} />

        <Text style={footerText}>
          {isAngler ? (
            <>
              Ready to book your first trip? Browse our charters and find your
              perfect fishing adventure!
              <br />
              <em>
                Bersedia untuk menempah perjalanan pertama anda? Layari charter
                kami dan cari pengembaraan memancing yang sempurna!
              </em>
            </>
          ) : (
            <>
              Need help getting started? Contact our team at{" "}
              <a href="mailto:captain@fishon.my" style={link}>
                captain@fishon.my
              </a>
              <br />
              <em>
                Perlukan bantuan untuk bermula? Hubungi pasukan kami di{" "}
                <a href="mailto:captain@fishon.my" style={link}>
                  captain@fishon.my
                </a>
              </em>
            </>
          )}
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

const featureBox = {
  backgroundColor: "#f0fdf4",
  padding: "20px",
  borderRadius: "8px",
  borderLeft: "4px solid #22c55e",
  margin: "24px 0",
};

const featureTitle = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#166534",
  margin: "0 0 12px",
};

const featureList = {
  fontSize: "14px",
  color: "#166534",
  lineHeight: "2",
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

const link = {
  color: "#ec2227",
  textDecoration: "underline",
};

const promoBox = {
  backgroundColor: "#fef3c7",
  padding: "24px",
  borderRadius: "12px",
  borderLeft: "4px solid #f59e0b",
  margin: "24px 0",
  textAlign: "center" as const,
};

const promoTitle = {
  fontSize: "18px",
  fontWeight: "700",
  color: "#92400e",
  margin: "0 0 12px",
};

const promoDescription = {
  fontSize: "14px",
  color: "#78350f",
  lineHeight: "1.6",
  margin: "0 0 16px",
};

const promoCodeBox = {
  backgroundColor: "#ffffff",
  padding: "16px 24px",
  borderRadius: "8px",
  border: "2px dashed #f59e0b",
  margin: "0 auto 16px",
  display: "inline-block",
};

const promoCodeText = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#ea580c",
  letterSpacing: "2px",
  margin: "0",
  fontFamily: "monospace",
};

const promoNote = {
  fontSize: "13px",
  color: "#92400e",
  margin: "0",
  lineHeight: "1.6",
};

WelcomeEmail.PreviewProps = {
  userName: "Ahmad",
  userType: "angler",
  loginUrl: "https://fishon.my/login",
  promoCode: "FISHONTRIP1",
} as WelcomeEmailProps;

export default WelcomeEmail;
export type { WelcomeEmailProps };
