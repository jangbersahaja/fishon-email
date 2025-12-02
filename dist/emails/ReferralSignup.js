import { Hr, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailButton } from "../components/EmailButton";
import { EmailHeader } from "../components/EmailHeader";
import { EmailLayout } from "../components/EmailLayout";
import { InfoBox } from "../components/InfoBox";
export function ReferralSignupEmail({ invitorName, inviteeName, registeredAt, dashboardUrl, totalReferrals, }) {
    return (React.createElement(EmailLayout, { preview: `🎉 Your referral ${inviteeName} just signed up!` },
        React.createElement(EmailHeader, { title: "\uD83C\uDF89 New Referral Signup!", subtitle: "Captain Affiliate Programme" }),
        React.createElement(Section, { style: content },
            React.createElement(Text, { style: greeting },
                "Hi Captain ",
                invitorName,
                ", / Hai Kapten ",
                invitorName,
                ","),
            React.createElement(Text, { style: paragraph },
                "Great news! Your referral ",
                React.createElement("strong", null, inviteeName),
                " has just signed up on Fishon Captain using your referral link!"),
            React.createElement(Text, { style: paragraphMy },
                "Berita baik! Rujukan anda ",
                React.createElement("strong", null, inviteeName),
                " baru sahaja mendaftar di Fishon Captain menggunakan pautan rujukan anda!"),
            React.createElement(Section, { style: successBox },
                React.createElement(Text, { style: successTitle }, "Referral Registered / Rujukan Berdaftar"),
                React.createElement(Text, { style: successValue }, inviteeName)),
            React.createElement(Section, { style: detailsSection },
                React.createElement(Text, { style: sectionTitle }, "What's Next / Langkah Seterusnya"),
                React.createElement(Section, { style: stepBox },
                    React.createElement(Text, { style: stepNumber }, "1"),
                    React.createElement(Text, { style: stepText },
                        "They create their first charter listing",
                        React.createElement("br", null),
                        React.createElement("em", { style: stepTextMy }, "Mereka mencipta senarai charter pertama"))),
                React.createElement(Section, { style: stepBox },
                    React.createElement(Text, { style: stepNumber }, "2"),
                    React.createElement(Text, { style: stepText },
                        "They complete their first trip",
                        React.createElement("br", null),
                        React.createElement("em", { style: stepTextMy }, "Mereka melengkapkan perjalanan pertama"))),
                React.createElement(Section, { style: stepBox },
                    React.createElement(Text, { style: stepNumber }, "3"),
                    React.createElement(Text, { style: stepText },
                        "You earn up to RM 100 commission! \uD83D\uDCB0",
                        React.createElement("br", null),
                        React.createElement("em", { style: stepTextMy }, "Anda memperoleh komisen sehingga RM 100! \uD83D\uDCB0")))),
            React.createElement(Section, { style: detailsSection },
                React.createElement(Text, { style: sectionTitle }, "Referral Details / Butiran Rujukan"),
                React.createElement(InfoBox, { label: "Name / Nama", value: inviteeName }),
                React.createElement(InfoBox, { label: "Registered / Didaftarkan", value: registeredAt }),
                React.createElement(InfoBox, { label: "Your Total Referrals / Jumlah Rujukan Anda", value: String(totalReferrals) })),
            React.createElement(EmailButton, { href: dashboardUrl }, "View Referral Dashboard / Lihat Papan Pemuka Rujukan"),
            React.createElement(Hr, { style: divider }),
            React.createElement(Text, { style: footerText },
                "Keep sharing your referral link to earn more! Thank you for helping grow the Fishon community.",
                React.createElement("br", null),
                React.createElement("em", null, "Terus kongsi pautan rujukan anda untuk memperoleh lebih banyak! Terima kasih kerana membantu mengembangkan komuniti Fishon.")))));
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
    fontStyle: "italic",
};
const successBox = {
    backgroundColor: "#f0fdf4",
    borderLeft: "4px solid #22c55e",
    padding: "16px",
    borderRadius: "6px",
    margin: "24px 0",
    textAlign: "center",
};
const successTitle = {
    fontSize: "14px",
    color: "#166534",
    margin: "0 0 8px",
    textTransform: "uppercase",
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
    display: "flex",
    alignItems: "flex-start",
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
    textAlign: "center",
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
};
export default ReferralSignupEmail;
