import { Hr, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailButton } from "../components/EmailButton";
import { EmailHeader } from "../components/EmailHeader";
import { EmailLayout } from "../components/EmailLayout";
import { InfoBox } from "../components/InfoBox";
export function BalanceReminderAnglerEmail({ userName, charterName, captainName, captainPhone, tripName, tripDate, tripDays, startTime, balanceAmount, meetingPoint, bookingUrl, }) {
    const tripDateDisplay = `${tripDate} • ${tripDays} ${tripDays > 1 ? "Days" : "Day"}`;
    return (React.createElement(EmailLayout, { preview: `Reminder: Bring ${balanceAmount} for your trip tomorrow!` },
        React.createElement(EmailHeader, { title: "Trip Tomorrow! \uD83C\uDFA3", subtitle: `Don't forget your balance payment` }),
        React.createElement(Section, { style: content },
            React.createElement(Text, { style: greeting },
                "Hi ",
                userName,
                ", / Hai ",
                userName,
                ","),
            React.createElement(Text, { style: paragraph },
                "Your fishing trip with ",
                charterName,
                " is tomorrow! This is a friendly reminder to prepare your balance payment."),
            React.createElement(Text, { style: paragraphMy },
                "Perjalanan memancing anda dengan ",
                charterName,
                " adalah esok! Ini adalah peringatan mesra untuk menyediakan bayaran baki anda."),
            React.createElement(Section, { style: highlightBox },
                React.createElement(Text, { style: highlightTitle }, "\uD83D\uDCB5 Balance Payment Required"),
                React.createElement(Text, { style: highlightAmount }, balanceAmount),
                React.createElement(Text, { style: highlightText },
                    "Please bring this amount to pay Captain ",
                    captainName,
                    " directly.",
                    React.createElement("br", null),
                    "Accepted: Cash, Bank Transfer, or E-Wallet."),
                React.createElement(Text, { style: highlightTextMy },
                    "Sila bawa jumlah ini untuk dibayar terus kepada Kapten ",
                    captainName,
                    ".",
                    React.createElement("br", null),
                    "Kaedah diterima: Tunai, Pindahan Bank, atau E-Wallet.")),
            React.createElement(Section, { style: detailsSection },
                React.createElement(Text, { style: sectionTitle }, "Trip Details / Butiran Perjalanan"),
                React.createElement(InfoBox, { label: "Charter", value: charterName }),
                React.createElement(InfoBox, { label: "Trip / Perjalanan", value: tripName }),
                React.createElement(InfoBox, { label: "Date / Tarikh", value: tripDateDisplay }),
                startTime && (React.createElement(InfoBox, { label: "Start Time / Masa Mula", value: startTime })),
                meetingPoint && (React.createElement(InfoBox, { label: "Meeting Point / Titik Pertemuan", value: meetingPoint }))),
            React.createElement(Section, { style: detailsSection },
                React.createElement(Text, { style: sectionTitle }, "Captain Contact / Hubungi Kapten"),
                React.createElement(InfoBox, { label: "Captain / Kapten", value: captainName }),
                React.createElement(InfoBox, { label: "Phone / Telefon", value: captainPhone })),
            React.createElement(EmailButton, { href: bookingUrl }, "View Booking Details / Lihat Butiran Tempahan"),
            React.createElement(Hr, { style: divider }),
            React.createElement(Section, { style: checklistSection },
                React.createElement(Text, { style: checklistTitle }, "Pre-Trip Checklist / Senarai Semak:"),
                React.createElement(Text, { style: checklistItem }, "\u2705 Balance payment ready / Bayaran baki sedia"),
                React.createElement(Text, { style: checklistItem }, "\u2705 Sunscreen & hat / Pelindung matahari & topi"),
                React.createElement(Text, { style: checklistItem }, "\u2705 Light snacks & drinks / Snek ringan & minuman"),
                React.createElement(Text, { style: checklistItem }, "\u2705 Camera for your catch! / Kamera untuk tangkapan anda!")),
            React.createElement(Text, { style: footerText },
                "Have a great trip and tight lines! \uD83C\uDFA3",
                React.createElement("br", null),
                React.createElement("em", null, "Selamat memancing dan semoga berjaya!")))));
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
const highlightBox = {
    backgroundColor: "#fef3c7",
    border: "2px solid #f59e0b",
    borderRadius: "8px",
    padding: "20px",
    margin: "24px 0",
    textAlign: "center",
};
const highlightTitle = {
    fontSize: "16px",
    fontWeight: "700",
    color: "#92400e",
    margin: "0 0 8px",
};
const highlightAmount = {
    fontSize: "32px",
    fontWeight: "800",
    color: "#78350f",
    margin: "8px 0 16px",
};
const highlightText = {
    fontSize: "14px",
    color: "#78350f",
    lineHeight: "1.5",
    margin: "0 0 4px",
};
const highlightTextMy = {
    fontSize: "13px",
    color: "#92400e",
    lineHeight: "1.5",
    margin: "8px 0 0",
    fontStyle: "italic",
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
const divider = {
    borderColor: "#e5e7eb",
    margin: "24px 0",
};
const checklistSection = {
    backgroundColor: "#f0fdf4",
    borderRadius: "8px",
    padding: "16px",
    margin: "24px 0",
};
const checklistTitle = {
    fontSize: "14px",
    fontWeight: "600",
    color: "#166534",
    margin: "0 0 12px",
};
const checklistItem = {
    fontSize: "14px",
    color: "#15803d",
    margin: "0 0 8px",
    lineHeight: "1.4",
};
const footerText = {
    fontSize: "14px",
    color: "#6b7280",
    margin: "0",
    lineHeight: "1.6",
    textAlign: "center",
};
// Default props for preview
BalanceReminderAnglerEmail.PreviewProps = {
    userName: "Ahmad",
    charterName: "Full Day Deep Sea Adventure",
    captainName: "Hassan",
    captainPhone: "+60 12-987 6543",
    tripName: "Half Day Trip",
    tripDate: "24 October 2025",
    tripDays: 1,
    startTime: "6:00 AM",
    balanceAmount: "RM 560",
    meetingPoint: "Kuala Terengganu Jetty",
    bookingUrl: "https://fishon.my/bookings/123",
};
export default BalanceReminderAnglerEmail;
