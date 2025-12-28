import { Hr, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailButton } from "../components/EmailButton";
import { EmailHeader } from "../components/EmailHeader";
import { EmailLayout } from "../components/EmailLayout";
import { InfoBox } from "../components/InfoBox";
export function TripCompletedDepositEmail({ userName, charterName, captainName, tripName, tripDate, tripDays, totalPrice, depositAmount, balanceAmount, balancePaidMethod, reviewUrl, bookingUrl, }) {
    const tripDateDisplay = `${tripDate} • ${tripDays} ${tripDays > 1 ? "Days" : "Day"}`;
    const getPaymentMethodDisplay = (method) => {
        switch (method) {
            case "CASH": return "Cash / Tunai";
            case "BANK_TRANSFER": return "Bank Transfer / Pindahan Bank";
            case "EWALLET": return "E-Wallet";
            default: return method;
        }
    };
    return (React.createElement(EmailLayout, { preview: `Trip completed - How was your fishing adventure?` },
        React.createElement(EmailHeader, { title: "Trip Completed! \uD83C\uDFA3", subtitle: `Thank you for fishing with ${charterName}` }),
        React.createElement(Section, { style: content },
            React.createElement(Text, { style: greeting },
                "Hi ",
                userName,
                ", / Hai ",
                userName,
                ","),
            React.createElement(Text, { style: paragraph },
                "We hope you had an amazing fishing adventure with Captain ",
                captainName,
                "! Your trip is now complete and all payments have been confirmed."),
            React.createElement(Text, { style: paragraphMy },
                "Kami harap anda mempunyai pengembaraan memancing yang mengagumkan dengan Kapten ",
                captainName,
                "! Perjalanan anda kini selesai dan semua bayaran telah disahkan."),
            React.createElement(Section, { style: successBox },
                React.createElement(Text, { style: successTitle }, "\u2705 All Payments Confirmed"),
                React.createElement(Text, { style: successText }, "Your booking is complete. Thank you for choosing Fishon!")),
            React.createElement(Section, { style: detailsSection },
                React.createElement(Text, { style: sectionTitle }, "Payment Summary / Ringkasan Pembayaran"),
                React.createElement(InfoBox, { label: "Total Trip Price / Jumlah Harga", value: totalPrice }),
                React.createElement(InfoBox, { label: "Deposit Paid (Online) / Deposit Dibayar", value: depositAmount }),
                React.createElement(InfoBox, { label: "Balance Paid (Direct) / Baki Dibayar", value: balanceAmount }),
                React.createElement(InfoBox, { label: "Balance Method / Kaedah Baki", value: getPaymentMethodDisplay(balancePaidMethod) })),
            React.createElement(Section, { style: detailsSection },
                React.createElement(Text, { style: sectionTitle }, "Trip Details / Butiran Perjalanan"),
                React.createElement(InfoBox, { label: "Charter", value: charterName }),
                React.createElement(InfoBox, { label: "Trip / Perjalanan", value: tripName }),
                React.createElement(InfoBox, { label: "Date / Tarikh", value: tripDateDisplay }),
                React.createElement(InfoBox, { label: "Captain / Kapten", value: captainName })),
            React.createElement(Section, { style: reviewSection },
                React.createElement(Text, { style: reviewTitle }, "\u2B50 Share Your Experience!"),
                React.createElement(Text, { style: reviewText },
                    "Your review helps other anglers discover great fishing charters. Take a moment to share your experience with Captain ",
                    captainName,
                    "."),
                React.createElement(Text, { style: reviewTextMy },
                    "Ulasan anda membantu pemancing lain menemui charter memancing yang hebat. Luangkan masa untuk berkongsi pengalaman anda dengan Kapten ",
                    captainName,
                    "."),
                React.createElement(EmailButton, { href: reviewUrl }, "Write a Review / Tulis Ulasan")),
            React.createElement(Hr, { style: divider }),
            React.createElement(Text, { style: viewBookingText },
                React.createElement("a", { href: bookingUrl, style: linkStyle }, "View Booking Details / Lihat Butiran Tempahan \u2192")),
            React.createElement(Text, { style: footerText },
                "Thank you for choosing Fishon! We hope to see you on the water again soon. \uD83C\uDFA3",
                React.createElement("br", null),
                React.createElement("em", null, "Terima kasih kerana memilih Fishon! Kami berharap dapat berjumpa anda di perairan lagi tidak lama lagi.")))));
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
    backgroundColor: "#dcfce7",
    border: "1px solid #22c55e",
    borderRadius: "8px",
    padding: "16px",
    margin: "24px 0",
    textAlign: "center",
};
const successTitle = {
    fontSize: "18px",
    fontWeight: "700",
    color: "#166534",
    margin: "0 0 8px",
};
const successText = {
    fontSize: "14px",
    color: "#15803d",
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
const reviewSection = {
    backgroundColor: "#fef3c7",
    borderRadius: "8px",
    padding: "20px",
    margin: "24px 0",
    textAlign: "center",
};
const reviewTitle = {
    fontSize: "18px",
    fontWeight: "700",
    color: "#92400e",
    margin: "0 0 12px",
};
const reviewText = {
    fontSize: "14px",
    color: "#78350f",
    lineHeight: "1.5",
    margin: "0 0 4px",
};
const reviewTextMy = {
    fontSize: "13px",
    color: "#92400e",
    lineHeight: "1.5",
    margin: "0 0 16px",
    fontStyle: "italic",
};
const divider = {
    borderColor: "#e5e7eb",
    margin: "24px 0",
};
const viewBookingText = {
    textAlign: "center",
    margin: "16px 0",
};
const linkStyle = {
    color: "#6b7280",
    fontSize: "14px",
    textDecoration: "underline",
};
const footerText = {
    fontSize: "14px",
    color: "#6b7280",
    margin: "24px 0 0",
    lineHeight: "1.6",
    textAlign: "center",
};
// Default props for preview
TripCompletedDepositEmail.PreviewProps = {
    userName: "Ahmad",
    charterName: "Full Day Deep Sea Adventure",
    captainName: "Hassan",
    tripName: "Half Day Trip",
    tripDate: "24 October 2025",
    tripDays: 1,
    totalPrice: "RM 800",
    depositAmount: "RM 240",
    balanceAmount: "RM 560",
    balancePaidMethod: "CASH",
    reviewUrl: "https://fishon.my/review/123",
    bookingUrl: "https://fishon.my/bookings/123",
};
export default TripCompletedDepositEmail;
