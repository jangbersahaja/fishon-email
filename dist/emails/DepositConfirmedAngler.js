import { Hr, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailButton } from "../components/EmailButton";
import { EmailHeader } from "../components/EmailHeader";
import { EmailLayout } from "../components/EmailLayout";
import { InfoBox } from "../components/InfoBox";
export function DepositConfirmedAnglerEmail({ userName, charterName, captainName, captainEmail, captainPhone, tripName, tripDate, tripDays, durationHours, startTime, totalPrice, depositAmount, balanceAmount, depositPercent, bookingUrl, }) {
    const tripDateDisplay = `${tripDate} • ${tripDays} ${tripDays > 1 ? "Days" : "Day"}`;
    const durationDisplay = `${durationHours} ${durationHours > 1 ? "hours" : "hour"}`;
    return (React.createElement(EmailLayout, { preview: `Deposit confirmed - ${balanceAmount} balance due on trip day` },
        React.createElement(EmailHeader, { title: "Deposit Confirmed \u2705", subtitle: `Charter: ${charterName}` }),
        React.createElement(Section, { style: content },
            React.createElement(Text, { style: greeting },
                "Hi ",
                userName,
                ", / Hai ",
                userName,
                ","),
            React.createElement(Text, { style: paragraph },
                "Great news! Your deposit of ",
                depositAmount,
                " (",
                depositPercent,
                "%) has been confirmed. Captain ",
                captainName,
                " has acknowledged your booking. Please prepare the balance payment of ",
                balanceAmount,
                " to pay the captain directly on the trip day."),
            React.createElement(Text, { style: paragraphMy },
                "Berita baik! Deposit anda sebanyak ",
                depositAmount,
                " (",
                depositPercent,
                "%) telah disahkan. Kapten ",
                captainName,
                " telah menerima tempahan anda. Sila sediakan bayaran baki sebanyak ",
                balanceAmount,
                " untuk dibayar terus kepada kapten pada hari perjalanan."),
            React.createElement(Section, { style: highlightBox },
                React.createElement(Text, { style: highlightTitle }, "\u26A0\uFE0F Balance Payment Due on Trip Day"),
                React.createElement(Text, { style: highlightText },
                    "Please bring ",
                    balanceAmount,
                    " to pay the captain directly. Accepted methods: Cash, Bank Transfer, or E-Wallet."),
                React.createElement(Text, { style: highlightTextMy },
                    "Sila bawa ",
                    balanceAmount,
                    " untuk dibayar terus kepada kapten. Kaedah yang diterima: Tunai, Pindahan Bank, atau E-Wallet.")),
            React.createElement(Section, { style: detailsSection },
                React.createElement(Text, { style: sectionTitle }, "Payment Summary / Ringkasan Pembayaran"),
                React.createElement(InfoBox, { label: "Total Trip Price / Jumlah Harga", value: totalPrice }),
                React.createElement(InfoBox, { label: "Deposit Paid / Deposit Dibayar", value: `${depositAmount} (${depositPercent}%)` }),
                React.createElement(InfoBox, { label: "Balance Due / Baki Perlu Dibayar", value: balanceAmount })),
            React.createElement(Section, { style: detailsSection },
                React.createElement(Text, { style: sectionTitle }, "Booking Details / Butiran Tempahan"),
                React.createElement(InfoBox, { label: "Charter", value: charterName }),
                React.createElement(InfoBox, { label: "Trip / Perjalanan", value: tripName }),
                React.createElement(InfoBox, { label: "Date / Tarikh", value: tripDateDisplay }),
                React.createElement(InfoBox, { label: "Duration / Tempoh", value: durationDisplay }),
                startTime && (React.createElement(InfoBox, { label: "Start Time / Masa Mula", value: startTime }))),
            React.createElement(Section, { style: detailsSection },
                React.createElement(Text, { style: sectionTitle }, "Captain Contact Information / Maklumat Hubungan Kapten"),
                React.createElement(InfoBox, { label: "Name / Nama", value: captainName }),
                React.createElement(InfoBox, { label: "Email / Emel", value: captainEmail }),
                React.createElement(InfoBox, { label: "Phone / Telefon", value: captainPhone })),
            React.createElement(EmailButton, { href: bookingUrl }, "View Booking Details / Lihat Butiran Tempahan"),
            React.createElement(Hr, { style: divider }),
            React.createElement(Text, { style: footerText },
                "Get ready for an amazing fishing adventure! Remember to bring the balance payment on the trip day. If you have any questions, feel free to contact your captain or our support team.",
                React.createElement("br", null),
                React.createElement("em", null, "Bersiap sedia untuk pengembaraan memancing yang menarik! Ingat untuk membawa bayaran baki pada hari perjalanan. Jika ada sebarang pertanyaan, sila hubungi kapten anda atau pasukan sokongan kami.")))));
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
    border: "1px solid #f59e0b",
    borderRadius: "8px",
    padding: "16px",
    margin: "24px 0",
};
const highlightTitle = {
    fontSize: "16px",
    fontWeight: "700",
    color: "#92400e",
    margin: "0 0 8px",
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
    margin: "0",
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
const footerText = {
    fontSize: "14px",
    color: "#6b7280",
    margin: "0",
    lineHeight: "1.6",
};
// Default props for preview
DepositConfirmedAnglerEmail.PreviewProps = {
    userName: "Ahmad",
    charterName: "Full Day Deep Sea Adventure",
    captainName: "Hassan",
    captainEmail: "hassan@example.com",
    captainPhone: "+60 12-987 6543",
    tripName: "Half Day Trip",
    tripDate: "24 October 2025",
    tripDays: 1,
    durationHours: 4,
    startTime: "6:00 AM",
    totalPrice: "RM 800",
    depositAmount: "RM 240",
    balanceAmount: "RM 560",
    depositPercent: 30,
    bookingUrl: "https://fishon.my/bookings/123",
};
export default DepositConfirmedAnglerEmail;
