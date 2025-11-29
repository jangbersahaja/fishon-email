import { Hr, Link, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailButton } from "../components/EmailButton";
import { EmailHeader } from "../components/EmailHeader";
import { EmailLayout } from "../components/EmailLayout";
import { InfoBox } from "../components/InfoBox";
export function BookingApprovedEmail({ userName, charterName, tripDate, paymentUrl, confirmationUrl, }) {
    return (React.createElement(EmailLayout, { preview: `Your booking for ${charterName} was approved!` },
        React.createElement(EmailHeader, { title: "Booking Approved! \uD83C\uDF89", subtitle: "Time to secure your spot" }),
        React.createElement(Section, { style: content },
            React.createElement(Text, { style: greeting },
                "Hi ",
                userName,
                ", / Hai ",
                userName,
                ","),
            React.createElement(Section, { style: successBox },
                React.createElement(Text, { style: successText },
                    "\u2705 Great news! Your booking has been approved by the captain.",
                    React.createElement("br", null),
                    React.createElement("span", { style: { fontWeight: "normal" } }, "Berita baik! Tempahan anda telah diluluskan oleh kapten."))),
            React.createElement(Text, { style: paragraph },
                "Complete your payment within ",
                React.createElement("strong", null, "48 hours"),
                " to confirm your booking and secure your spot."),
            React.createElement(Text, { style: paragraphMy },
                "Lengkapkan bayaran anda dalam masa ",
                React.createElement("strong", null, "48 jam"),
                " untuk mengesahkan tempahan dan memastikan tempat anda."),
            React.createElement(Section, { style: warningBox },
                React.createElement(Text, { style: warningText },
                    "\u23F0 ",
                    React.createElement("strong", null, "Payment Deadline / Tarikh Akhir Bayaran:"),
                    " Your booking will expire if payment is not received within 48 hours. Don't miss out!",
                    React.createElement("br", null),
                    React.createElement("em", null, "Tempahan anda akan tamat tempoh jika bayaran tidak diterima dalam 48 jam. Jangan lepaskan!"))),
            React.createElement(Section, { style: detailsSection },
                React.createElement(InfoBox, { label: "Charter", value: charterName }),
                React.createElement(InfoBox, { label: "Date / Tarikh", value: tripDate })),
            React.createElement(EmailButton, { href: paymentUrl }, "Complete Payment Now / Lengkapkan Bayaran Sekarang"),
            React.createElement(Hr, { style: divider }),
            React.createElement(Text, { style: footerText },
                "Questions? View your full booking details",
                " ",
                React.createElement(Link, { href: confirmationUrl, style: link }, "here"),
                ".",
                React.createElement("br", null),
                React.createElement("em", null,
                    "Ada soalan? Lihat butiran penuh tempahan anda",
                    " ",
                    React.createElement(Link, { href: confirmationUrl, style: link }, "di sini"),
                    ".")))));
}
const content = {
    padding: "30px",
};
const greeting = {
    fontSize: "16px",
    color: "#111827",
    margin: "0 0 16px",
};
const successBox = {
    backgroundColor: "#f0fdf4",
    borderLeft: "4px solid #22c55e",
    padding: "16px",
    borderRadius: "6px",
    margin: "0 0 24px",
};
const successText = {
    fontSize: "16px",
    color: "#166534",
    margin: "0",
    fontWeight: "600",
    lineHeight: "1.6",
};
const warningBox = {
    backgroundColor: "#fef3c7",
    borderLeft: "4px solid #f59e0b",
    padding: "16px",
    borderRadius: "6px",
    margin: "0 0 24px",
};
const warningText = {
    fontSize: "14px",
    color: "#92400e",
    margin: "0",
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
BookingApprovedEmail.PreviewProps = {
    userName: "Ahmad",
    charterName: "Full Day Deep Sea Adventure",
    tripDate: "Saturday, November 15, 2025",
    paymentUrl: "https://fishon.my/book/payment?id=123",
    confirmationUrl: "https://fishon.my/book/confirm?id=123",
};
export default BookingApprovedEmail;
