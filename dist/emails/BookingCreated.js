import { Hr, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailButton } from "../components/EmailButton";
import { EmailHeader } from "../components/EmailHeader";
import { EmailLayout } from "../components/EmailLayout";
import { InfoBox } from "../components/InfoBox";
export function BookingCreatedEmail({ userName, charterName, tripName, tripDate, tripDays, durationHours, startTime, totalPrice, confirmationUrl, paymentFlow, }) {
    const tripDateDisplay = `${tripDate} • ${tripDays} ${tripDays > 1 ? "Days" : "Day"}`;
    const durationDisplay = `${durationHours} ${durationHours > 1 ? "hours" : "hour"}`;
    return (React.createElement(EmailLayout, { preview: `Your booking request for ${charterName} has been sent for review` },
        React.createElement(EmailHeader, { title: "Booking In Review \uD83C\uDFA3", subtitle: `Charter: ${charterName}` }),
        React.createElement(Section, { style: content },
            React.createElement(Text, { style: greeting },
                "Hi ",
                userName,
                ", / Hai ",
                userName,
                ","),
            React.createElement(Text, { style: paragraph }, "Thank you for choosing Fishon! We've received your booking request and the captain will review it shortly."),
            React.createElement(Text, { style: paragraphMy }, "Terima kasih kerana memilih Fishon! Kami telah menerima permintaan tempahan anda dan kapten akan menyemaknya tidak lama lagi."),
            paymentFlow === "TOKENIZED" && (React.createElement(Section, { style: infoBox },
                React.createElement(Text, { style: infoText },
                    "\uD83D\uDCB3 ",
                    React.createElement("strong", null, "Your card has been authorized"),
                    " (not charged yet). We'll only charge your card if the captain approves your booking.",
                    React.createElement("br", null),
                    React.createElement("em", { style: { color: "#1e40af" } }, "Kad anda telah diluluskan (belum dicaj). Kami hanya akan mencaj kad anda jika kapten meluluskan tempahan anda.")))),
            paymentFlow === "DIRECT" && (React.createElement(Section, { style: infoBox },
                React.createElement(Text, { style: infoText },
                    "\u2705 ",
                    React.createElement("strong", null, "Payment received!"),
                    " Your payment of ",
                    totalPrice,
                    " ",
                    "has been received and is being held securely. It will be released to the captain once they approve your booking.",
                    React.createElement("br", null),
                    React.createElement("em", { style: { color: "#1e40af" } },
                        "Bayaran diterima! Bayaran anda sebanyak ",
                        totalPrice,
                        " telah diterima dan disimpan dengan selamat. Ia akan dilepaskan kepada kapten sebaik sahaja mereka meluluskan tempahan anda.")))),
            React.createElement(Section, { style: detailsSection },
                React.createElement(Text, { style: sectionTitle }, "Booking Details / Butiran Tempahan"),
                React.createElement(InfoBox, { label: "Charter", value: charterName }),
                React.createElement(InfoBox, { label: "Trip / Perjalanan", value: tripName }),
                React.createElement(InfoBox, { label: "Date / Tarikh", value: tripDateDisplay }),
                React.createElement(InfoBox, { label: "Duration / Tempoh", value: durationDisplay }),
                startTime && (React.createElement(InfoBox, { label: "Start Time / Masa Mula", value: startTime })),
                React.createElement(InfoBox, { label: "Total Price / Jumlah Harga", value: totalPrice })),
            React.createElement(EmailButton, { href: confirmationUrl }, "View Booking Details / Lihat Butiran Tempahan"),
            React.createElement(Hr, { style: divider }),
            React.createElement(Text, { style: footerText },
                "You'll receive another email once the captain approves your booking. If you have any questions, feel free to contact us.",
                React.createElement("br", null),
                React.createElement("em", null, "Anda akan menerima emel lain sebaik sahaja kapten meluluskan tempahan anda. Jika ada sebarang pertanyaan, sila hubungi kami.")))));
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
const infoBox = {
    backgroundColor: "#f0f9ff",
    borderLeft: "4px solid #3b82f6",
    padding: "16px",
    borderRadius: "6px",
    margin: "0 0 24px",
};
const infoText = {
    fontSize: "14px",
    color: "#1e40af",
    margin: "0",
    lineHeight: "1.6",
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
BookingCreatedEmail.PreviewProps = {
    userName: "Ahmad",
    charterName: "Full Day Deep Sea Adventure",
    tripName: "Half Day Trip",
    tripDate: "24 October 2025",
    tripDays: 1,
    durationHours: 4,
    startTime: "6:00 AM",
    totalPrice: "RM 800",
    confirmationUrl: "https://fishon.my/bookings/123",
};
export default BookingCreatedEmail;
