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
                ","),
            React.createElement(Text, { style: paragraph },
                "Great news! Your booking has been confirmed. We have received your payment of ",
                finalPrice,
                ". You may contact Captain ",
                captainName,
                " to prepare for the trip."),
            React.createElement(Section, { style: detailsSection },
                React.createElement(Text, { style: sectionTitle }, "Payment Details"),
                React.createElement(InfoBox, { label: "Amount Paid", value: finalPrice }),
                paymentMethod && (React.createElement(InfoBox, { label: "Payment Method", value: paymentMethod }))),
            React.createElement(Section, { style: detailsSection },
                React.createElement(Text, { style: sectionTitle }, "Booking Details"),
                React.createElement(InfoBox, { label: "Charter", value: charterName }),
                React.createElement(InfoBox, { label: "Trip", value: tripName }),
                React.createElement(InfoBox, { label: "Date", value: tripDateDisplay }),
                React.createElement(InfoBox, { label: "Duration", value: durationDisplay }),
                startTime && React.createElement(InfoBox, { label: "Start Time", value: startTime })),
            React.createElement(Section, { style: detailsSection },
                React.createElement(Text, { style: sectionTitle }, "Captain Contact Information"),
                React.createElement(InfoBox, { label: "Name", value: captainName }),
                React.createElement(InfoBox, { label: "Email", value: captainEmail }),
                React.createElement(InfoBox, { label: "Phone", value: captainPhone })),
            React.createElement(EmailButton, { href: bookingUrl }, "View Booking Details"),
            React.createElement(Hr, { style: divider }),
            React.createElement(Text, { style: footerText }, "Get ready for an amazing fishing adventure! If you have any questions, feel free to contact your captain or our support team."))));
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
