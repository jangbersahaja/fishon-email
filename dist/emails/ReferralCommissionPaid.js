import { Hr, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailButton } from "../components/EmailButton";
import { EmailHeader } from "../components/EmailHeader";
import { EmailLayout } from "../components/EmailLayout";
import { InfoBox } from "../components/InfoBox";
export function ReferralCommissionPaidEmail({ invitorName, commissionAmount, bankAccountLast4, bankName, payoutDate, payoutReference, totalPaidToDate, dashboardUrl, }) {
    return (React.createElement(EmailLayout, { preview: `💵 Referral commission paid - ${commissionAmount}` },
        React.createElement(EmailHeader, { title: "\uD83D\uDCB5 Commission Paid!", subtitle: "Captain Affiliate Programme" }),
        React.createElement(Section, { style: content },
            React.createElement(Text, { style: greeting },
                "Hi Captain ",
                invitorName,
                ", / Hai Kapten ",
                invitorName,
                ","),
            React.createElement(Text, { style: paragraph }, "Your referral commission has been successfully transferred to your bank account!"),
            React.createElement(Text, { style: paragraphMy }, "Komisen rujukan anda telah berjaya dipindahkan ke akaun bank anda!"),
            React.createElement(Section, { style: paidBox },
                React.createElement(Text, { style: paidLabel }, "Amount Paid / Jumlah Dibayar"),
                React.createElement(Text, { style: paidValue }, commissionAmount),
                React.createElement(Text, { style: paidCheck }, "\u2713 Payment Successful")),
            React.createElement(Section, { style: detailsSection },
                React.createElement(Text, { style: sectionTitle }, "Payment Details / Butiran Pembayaran"),
                React.createElement(InfoBox, { label: "Amount / Jumlah", value: commissionAmount }),
                React.createElement(InfoBox, { label: "Bank / Bank", value: bankName }),
                React.createElement(InfoBox, { label: "Account / Akaun", value: `****${bankAccountLast4}` }),
                React.createElement(InfoBox, { label: "Date / Tarikh", value: payoutDate }),
                React.createElement(InfoBox, { label: "Reference / Rujukan", value: payoutReference })),
            React.createElement(Section, { style: summarySection },
                React.createElement(Text, { style: sectionTitle }, "Lifetime Earnings / Pendapatan Sepanjang Masa"),
                React.createElement(Section, { style: summaryBox },
                    React.createElement(Text, { style: summaryLabel }, "Total Referral Commissions Paid"),
                    React.createElement(Text, { style: summaryValue }, totalPaidToDate),
                    React.createElement(Text, { style: summarySubtext },
                        React.createElement("em", null, "Jumlah komisen rujukan dibayar")))),
            React.createElement(EmailButton, { href: dashboardUrl }, "View Referral Dashboard / Lihat Papan Pemuka Rujukan"),
            React.createElement(Hr, { style: divider }),
            React.createElement(Text, { style: footerText },
                "Thank you for being a valued member of our affiliate programme! Keep sharing your referral link to earn more.",
                React.createElement("br", null),
                React.createElement("em", null, "Terima kasih kerana menjadi ahli berharga program affiliate kami! Terus kongsi pautan rujukan anda untuk memperoleh lebih banyak.")),
            React.createElement(Text, { style: supportText },
                "If you have any questions about this payment, please contact our support team.",
                React.createElement("br", null),
                React.createElement("em", null, "Jika anda mempunyai sebarang soalan mengenai pembayaran ini, sila hubungi pasukan sokongan kami.")))));
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
const paidBox = {
    backgroundColor: "#f0fdf4",
    borderLeft: "4px solid #22c55e",
    padding: "20px",
    borderRadius: "6px",
    margin: "24px 0",
    textAlign: "center",
};
const paidLabel = {
    fontSize: "14px",
    color: "#166534",
    margin: "0 0 8px",
    textTransform: "uppercase",
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
    textAlign: "center",
};
const summaryLabel = {
    fontSize: "14px",
    color: "#6b7280",
    margin: "0 0 8px",
    textTransform: "uppercase",
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
};
export default ReferralCommissionPaidEmail;
