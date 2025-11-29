import { Hr, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailButton } from "../components/EmailButton";
import { EmailHeader } from "../components/EmailHeader";
import { EmailLayout } from "../components/EmailLayout";
import { InfoBox } from "../components/InfoBox";
export function BookingConfirmedAnglerEmail({ userName, charterName, captainName, captainEmail, captainPhone, tripName, tripDate, tripDays, durationHours, startTime, finalPrice, paymentMethod, bookingUrl, }) {
    const tripDateDisplay = `${tripDate} • ${tripDays} ${tripDays > 1 ? "Days" : "Day"}`;
    const durationDisplay = `${durationHours} ${durationHours > 1 ? "hours" : "hour"}`;
    return (React.createElement(EmailLayout, { preview: `Booking confirmed - Your trip is all set!` },
        React.createElement(EmailHeader, { title: "Booking Confirmed \u2705", subtitle: `Charter: ${charterName}` }),
        React.createElement(Section, { style: content },
            React.createElement(Text, { style: greeting },
                "Hi ",
                userName,
                ", / Hai ",
                userName,
                ","),
            React.createElement(Text, { style: paragraph },
                "Great news! Your booking has been confirmed. We have received your payment of ",
                finalPrice,
                ". You may contact Captain ",
                captainName,
                " to prepare for the trip."),
            React.createElement(Text, { style: paragraphMy },
                "Berita baik! Tempahan anda telah disahkan. Kami telah menerima bayaran anda sebanyak ",
                finalPrice,
                ". Anda boleh menghubungi Kapten",
                " ",
                captainName,
                " untuk membuat persediaan perjalanan."),
            React.createElement(Section, { style: detailsSection },
                React.createElement(Text, { style: sectionTitle }, "Payment Details / Butiran Pembayaran"),
                React.createElement(InfoBox, { label: "Amount Paid / Jumlah Dibayar", value: finalPrice }),
                paymentMethod && (React.createElement(InfoBox, { label: "Payment Method / Kaedah Pembayaran", value: paymentMethod }))),
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
                "Get ready for an amazing fishing adventure! If you have any questions, feel free to contact your captain or our support team.",
                React.createElement("br", null),
                React.createElement("em", null, "Bersiap sedia untuk pengembaraan memancing yang menarik! Jika ada sebarang pertanyaan, sila hubungi kapten anda atau pasukan sokongan kami.")))));
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
BookingConfirmedAnglerEmail.PreviewProps = {
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
    finalPrice: "RM 800",
    paymentMethod: "Online Banking",
    bookingUrl: "https://fishon.my/bookings/123",
};
export default BookingConfirmedAnglerEmail;
