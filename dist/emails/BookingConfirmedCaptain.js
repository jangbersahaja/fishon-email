import { Hr, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailButton } from "../components/EmailButton";
import { EmailHeader } from "../components/EmailHeader";
import { EmailLayout } from "../components/EmailLayout";
import { InfoBox } from "../components/InfoBox";
export function BookingConfirmedCaptainEmail({ captainName, charterName, anglerName, anglerEmail, anglerPhone, tripName, tripDate, tripDays, durationHours, startTime, finalPrice, bookingUrl, subtotal, platformFee, captainEarnings, paymentFlow, }) {
    const tripDateDisplay = `${tripDate} • ${tripDays} ${tripDays > 1 ? "Days" : "Day"}`;
    const durationDisplay = `${durationHours} ${durationHours > 1 ? "hours" : "hour"}`;
    return (React.createElement(EmailLayout, { preview: `Booking confirmed - Payment received ${finalPrice}` },
        React.createElement(EmailHeader, { title: "Booking Confirmed \u2705", subtitle: `Charter: ${charterName}` }),
        React.createElement(Section, { style: content },
            React.createElement(Text, { style: greeting },
                "Hi Captain ",
                captainName,
                ","),
            React.createElement(Text, { style: paragraph },
                "Great news! The booking has been confirmed. We have received",
                " ",
                captainEarnings,
                " payment",
                paymentFlow === "DIRECT" ? " (paid upfront)" : " (after approval)",
                ". You may contact the angler to prepare for the trip."),
            React.createElement(Section, { style: detailsSection },
                React.createElement(Text, { style: sectionTitle }, "Booking Details"),
                React.createElement(InfoBox, { label: "Charter", value: charterName }),
                React.createElement(InfoBox, { label: "Trip", value: tripName }),
                React.createElement(InfoBox, { label: "Date", value: tripDateDisplay }),
                React.createElement(InfoBox, { label: "Duration", value: durationDisplay }),
                startTime && React.createElement(InfoBox, { label: "Start Time", value: startTime })),
            (subtotal || platformFee || captainEarnings) && (React.createElement(Section, { style: detailsSection },
                React.createElement(Text, { style: sectionTitle }, "Payment Breakdown"),
                captainEarnings && (React.createElement(Section, { style: earningsBox },
                    React.createElement(Text, { style: earningsLabel }, "Your Earnings"),
                    React.createElement(Text, { style: earningsValue }, captainEarnings))),
                React.createElement(Text, { style: helperText }, "Your earnings will be transferred to your registered bank account according to the payout schedule."))),
            React.createElement(Section, { style: detailsSection },
                React.createElement(Text, { style: sectionTitle }, "Angler Contact Information"),
                React.createElement(InfoBox, { label: "Name", value: anglerName }),
                React.createElement(InfoBox, { label: "Email", value: anglerEmail }),
                React.createElement(InfoBox, { label: "Phone", value: anglerPhone })),
            React.createElement(EmailButton, { href: bookingUrl }, "View Booking Details"),
            React.createElement(Hr, { style: divider }),
            React.createElement(Text, { style: footerText }, "Please ensure everything is ready for the trip. Have a great fishing adventure!"))));
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
    margin: "0 0 24px",
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
};
const earningsBox = {
    backgroundColor: "#f0fdf4",
    borderLeft: "4px solid #22c55e",
    padding: "16px",
    borderRadius: "6px",
    margin: "12px 0",
};
const earningsLabel = {
    fontSize: "14px",
    color: "#166534",
    margin: "0 0 8px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    fontWeight: "700",
};
const earningsValue = {
    fontSize: "24px",
    fontWeight: "700",
    color: "#166534",
    margin: "0",
};
const helperText = {
    fontSize: "12px",
    color: "#6b7280",
    margin: "12px 0 0 0",
    fontStyle: "italic",
};
// Default props for preview
BookingConfirmedCaptainEmail.PreviewProps = {
    captainName: "Hassan",
    charterName: "Full Day Deep Sea Adventure",
    anglerName: "Ahmad bin Abdullah",
    anglerEmail: "ahmad@example.com",
    anglerPhone: "+60 12-345 6789",
    tripName: "Half Day Trip",
    tripDate: "24 October 2025",
    tripDays: 1,
    durationHours: 4,
    startTime: "6:00 AM",
    finalPrice: "RM 800.00",
    bookingUrl: "https://captain.fishon.my/captain/bookings/123",
    subtotal: "RM 727.27",
    platformFee: "RM 72.73",
    captainEarnings: "RM 654.54",
    paymentFlow: "TOKENIZED",
};
export default BookingConfirmedCaptainEmail;
