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
        <Text style={greeting}>Hi {userName},</Text>

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

        {isAngler && promoCode && (
          <Section style={promoBox}>
            <Text style={promoTitle}>🎁 Welcome Gift!</Text>
            <Text style={promoDescription}>
              As a thank you for joining Fishon, here&apos;s a special 10%
              discount code for your first booking:
            </Text>
            <Section style={promoCodeBox}>
              <Text style={promoCodeText}>{promoCode}</Text>
            </Section>
            <Text style={promoNote}>
              Use this code at checkout to get 10% off your first fishing trip.
              Happy fishing! 🎣
            </Text>
          </Section>
        )}

        {isAngler ? (
          <Section style={featureBox}>
            <Text style={featureTitle}>🎣 What You Can Do:</Text>
            <Text style={featureList}>
              • Browse hundreds of fishing charters across Malaysia
              <br />
              • Book trips with experienced captains
              <br />
              • Read reviews from fellow anglers
              <br />
              • Track your bookings and trips
              <br />• Discover new fishing spots
            </Text>
          </Section>
        ) : (
          <Section style={featureBox}>
            <Text style={featureTitle}>⚓ Next Steps:</Text>
            <Text style={featureList}>
              • Complete your captain profile
              <br />
              • Add your fishing charters
              <br />
              • Upload photos and videos
              <br />
              • Set your availability
              <br />• Start receiving bookings!
            </Text>
          </Section>
        )}

        <EmailButton href={loginUrl}>
          {isAngler ? "Start Exploring" : "Go to Dashboard"}
        </EmailButton>

        <Hr style={divider} />

        <Text style={footerText}>
          {isAngler ? (
            <>
              Ready to book your first trip? Browse our charters and find your
              perfect fishing adventure!
            </>
          ) : (
            <>
              Need help getting started? Contact our team at{" "}
              <a href="mailto:captain@fishon.my" style={link}>
                captain@fishon.my
              </a>
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
  margin: "0 0 24px",
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
  fontSize: "15px",
  color: "#166534",
  lineHeight: "1.8",
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
  fontSize: "15px",
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
  fontStyle: "italic" as const,
};

WelcomeEmail.PreviewProps = {
  userName: "Ahmad",
  userType: "angler",
  loginUrl: "https://fishon.my/login",
  promoCode: "FISHONTRIP1",
} as WelcomeEmailProps;

export default WelcomeEmail;
export type { WelcomeEmailProps };
