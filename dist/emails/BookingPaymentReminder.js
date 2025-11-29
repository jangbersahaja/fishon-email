import { Hr, Link, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailButton } from "../components/EmailButton";
import { EmailHeader } from "../components/EmailHeader";
import { EmailLayout } from "../components/EmailLayout";
import { InfoBox } from "../components/InfoBox";
export function BookingPaymentReminderEmail({ userName, charterName, tripDate, hoursRemaining, paymentUrl, confirmationUrl, }) {
    const isUrgent = hoursRemaining <= 6;
    return (React.createElement(EmailLayout, { preview: `Payment reminder: ${hoursRemaining} hours left for ${charterName}` },
        React.createElement(EmailHeader, { title: isUrgent ? "⚠️ Payment Required Soon!" : "Payment Reminder", subtitle: `${hoursRemaining} hours remaining` }),
        React.createElement(Section, { style: content },
            React.createElement(Text, { style: greeting },
                "Hi ",
                userName,
                ", / Hai ",
                userName,
                ","),
            React.createElement(Section, { style: isUrgent ? urgentBox : reminderBox },
                React.createElement(Text, { style: isUrgent ? urgentText : reminderText }, isUrgent ? (React.createElement(React.Fragment, null,
                    React.createElement("strong", null, "Urgent:"),
                    " You have only ",
                    hoursRemaining,
                    " hours left to complete payment for your approved booking!",
                    React.createElement("br", null),
                    React.createElement("em", null,
                        React.createElement("strong", null, "Segera:"),
                        " Anda hanya mempunyai ",
                        hoursRemaining,
                        " ",
                        "jam lagi untuk melengkapkan bayaran bagi tempahan yang diluluskan!"))) : (React.createElement(React.Fragment, null,
                    "You have ",
                    hoursRemaining,
                    " hours remaining to complete payment for your approved booking.",
                    React.createElement("br", null),
                    React.createElement("em", null,
                        "Anda mempunyai ",
                        hoursRemaining,
                        " jam lagi untuk melengkapkan bayaran bagi tempahan yang diluluskan."))))),
            React.createElement(Text, { style: paragraph },
                "Your booking for ",
                React.createElement("strong", null, charterName),
                " on ",
                tripDate,
                " has been approved by the captain. Complete your payment now to secure your spot before it expires."),
            React.createElement(Text, { style: paragraphMy },
                "Tempahan anda untuk ",
                React.createElement("strong", null, charterName),
                " pada ",
                tripDate,
                " ",
                "telah diluluskan oleh kapten. Lengkapkan bayaran anda sekarang untuk memastikan tempat anda sebelum tamat tempoh."),
            React.createElement(Section, { style: detailsSection },
                React.createElement(InfoBox, { label: "Charter", value: charterName }),
                React.createElement(InfoBox, { label: "Date / Tarikh", value: tripDate }),
                React.createElement(InfoBox, { label: "Time Remaining / Masa Berbaki", value: `${hoursRemaining} hours / jam` })),
            React.createElement(EmailButton, { href: paymentUrl }, isUrgent
                ? "Pay Now - Don't Miss Out! / Bayar Sekarang!"
                : "Complete Payment / Lengkapkan Bayaran"),
            React.createElement(Hr, { style: divider }),
            React.createElement(Text, { style: footerText },
                "If you no longer wish to proceed with this booking, you can cancel it",
                " ",
                React.createElement(Link, { href: confirmationUrl, style: link }, "here"),
                ". Otherwise, your booking will automatically expire after 48 hours.",
                React.createElement("br", null),
                React.createElement("em", null,
                    "Jika anda tidak mahu meneruskan tempahan ini, anda boleh membatalkannya",
                    " ",
                    React.createElement(Link, { href: confirmationUrl, style: link }, "di sini"),
                    ". Jika tidak, tempahan anda akan tamat tempoh secara automatik selepas 48 jam.")))));
}
const content = {
    padding: "30px",
};
const greeting = {
    fontSize: "16px",
    color: "#111827",
    margin: "0 0 16px",
};
const reminderBox = {
    backgroundColor: "#fef3c7",
    borderLeft: "4px solid #f59e0b",
    padding: "16px",
    borderRadius: "6px",
    margin: "0 0 24px",
};
const reminderText = {
    fontSize: "16px",
    color: "#92400e",
    margin: "0",
    lineHeight: "1.6",
};
const urgentBox = {
    backgroundColor: "#fee2e2",
    borderLeft: "4px solid #ef4444",
    padding: "16px",
    borderRadius: "6px",
    margin: "0 0 24px",
};
const urgentText = {
    fontSize: "16px",
    color: "#991b1b",
    margin: "0",
    fontWeight: "600",
    lineHeight: "1.6",
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
const detailsSection = {
    margin: "24px 0",
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
BookingPaymentReminderEmail.PreviewProps = {
    userName: "Ahmad",
    charterName: "Full Day Deep Sea Adventure",
    tripDate: "Saturday, November 15, 2025",
    hoursRemaining: 6,
    paymentUrl: "https://fishon.my/book/payment?id=123",
    confirmationUrl: "https://fishon.my/book/confirm?id=123",
};
export default BookingPaymentReminderEmail;
