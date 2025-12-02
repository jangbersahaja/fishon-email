import { Hr, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailButton } from "../components/EmailButton";
import { EmailHeader } from "../components/EmailHeader";
import { EmailLayout } from "../components/EmailLayout";
import { InfoBox } from "../components/InfoBox";
export function ReferralCommissionEarnedEmail({ invitorName, inviteeName, tripName, tripEarnings, commissionAmount, totalReferralEarnings, pendingEarnings, dashboardUrl, earnedAt, }) {
    return (React.createElement(EmailLayout, { preview: `💰 You earned ${commissionAmount} from your referral!` },
        React.createElement(EmailHeader, { title: "\uD83D\uDCB0 Commission Earned!", subtitle: "Captain Affiliate Programme" }),
        React.createElement(Section, { style: content },
            React.createElement(Text, { style: greeting },
                "Hi Captain ",
                invitorName,
                ", / Hai Kapten ",
                invitorName,
                ","),
            React.createElement(Text, { style: paragraph },
                "Congratulations! Your referral ",
                React.createElement("strong", null, inviteeName),
                " just completed their first trip, and you've earned a commission!"),
            React.createElement(Text, { style: paragraphMy },
                "Tahniah! Rujukan anda ",
                React.createElement("strong", null, inviteeName),
                " baru sahaja melengkapkan perjalanan pertama mereka, dan anda telah memperoleh komisen!"),
            React.createElement(Section, { style: earningsBox },
                React.createElement(Text, { style: earningsLabel }, "Your Commission / Komisen Anda"),
                React.createElement(Text, { style: earningsValue }, commissionAmount),
                React.createElement(Text, { style: earningsNote },
                    "10% of ",
                    tripEarnings,
                    " captain earnings",
                    React.createElement("br", null),
                    React.createElement("em", null,
                        "10% daripada pendapatan kapten ",
                        tripEarnings))),
            React.createElement(Section, { style: detailsSection },
                React.createElement(Text, { style: sectionTitle }, "Trip Details / Butiran Perjalanan"),
                React.createElement(InfoBox, { label: "Referred Captain / Kapten Dirujuk", value: inviteeName }),
                React.createElement(InfoBox, { label: "Trip / Perjalanan", value: tripName }),
                React.createElement(InfoBox, { label: "Trip Earnings / Pendapatan Perjalanan", value: tripEarnings }),
                React.createElement(InfoBox, { label: "Completed On / Selesai Pada", value: earnedAt })),
            React.createElement(Section, { style: summarySection },
                React.createElement(Text, { style: sectionTitle }, "Your Referral Summary / Ringkasan Rujukan Anda"),
                React.createElement(Section, { style: summaryRow },
                    React.createElement(Text, { style: summaryLabel }, "Total Earned / Jumlah Diperoleh"),
                    React.createElement(Text, { style: summaryValueGreen }, totalReferralEarnings)),
                React.createElement(Section, { style: summaryRow },
                    React.createElement(Text, { style: summaryLabel }, "Pending Payout / Menunggu Pembayaran"),
                    React.createElement(Text, { style: summaryValueYellow }, pendingEarnings))),
            React.createElement(Section, { style: infoBox },
                React.createElement(Text, { style: infoTitle }, "\u2139\uFE0F Payment Information / Maklumat Pembayaran"),
                React.createElement(Text, { style: infoText },
                    "Your commission will be included in your next payout cycle and transferred to your registered bank account.",
                    React.createElement("br", null),
                    React.createElement("em", null, "Komisen anda akan dimasukkan dalam kitaran pembayaran seterusnya dan dipindahkan ke akaun bank berdaftar anda."))),
            React.createElement(EmailButton, { href: dashboardUrl }, "View Referral Dashboard / Lihat Papan Pemuka Rujukan"),
            React.createElement(Hr, { style: divider }),
            React.createElement(Text, { style: footerText },
                "Thank you for growing the Fishon community! Keep sharing your referral link to earn more.",
                React.createElement("br", null),
                React.createElement("em", null, "Terima kasih kerana mengembangkan komuniti Fishon! Terus kongsi pautan rujukan anda untuk memperoleh lebih banyak.")))));
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
const earningsBox = {
    backgroundColor: "#fef3c7",
    borderLeft: "4px solid #f59e0b",
    padding: "20px",
    borderRadius: "6px",
    margin: "24px 0",
    textAlign: "center",
};
const earningsLabel = {
    fontSize: "14px",
    color: "#92400e",
    margin: "0 0 8px",
    textTransform: "uppercase",
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
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
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
};
export default ReferralCommissionEarnedEmail;
