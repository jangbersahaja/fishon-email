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
                ","),
            React.createElement(Text, { style: paragraph }, "Thank you for choosing Fishon! We've received your booking request and the captain will review it shortly."),
            paymentFlow === "TOKENIZED" && (React.createElement(Section, { style: infoBox },
                React.createElement(Text, { style: infoText },
                    "\uD83D\uDCB3 ",
                    React.createElement("strong", null, "Your card has been authorized"),
                    " (not charged yet). We'll only charge your card if the captain approves your booking."))),
            paymentFlow === "DIRECT" && (React.createElement(Section, { style: infoBox },
                React.createElement(Text, { style: infoText },
                    "\u2705 ",
                    React.createElement("strong", null, "Payment received!"),
                    " Your payment of ",
                    totalPrice,
                    " ",
                    "has been received and is being held securely. It will be released to the captain once they approve your booking."))),
            React.createElement(Section, { style: detailsSection },
                React.createElement(Text, { style: sectionTitle }, "Booking Details"),
                React.createElement(InfoBox, { label: "Charter", value: charterName }),
                React.createElement(InfoBox, { label: "Trip", value: tripName }),
                React.createElement(InfoBox, { label: "Date", value: tripDateDisplay }),
                React.createElement(InfoBox, { label: "Duration", value: durationDisplay }),
                startTime && React.createElement(InfoBox, { label: "Start Time", value: startTime }),
                React.createElement(InfoBox, { label: "Total Price", value: totalPrice })),
            React.createElement(EmailButton, { href: confirmationUrl }, "View Booking Details"),
            React.createElement(Hr, { style: divider }),
            React.createElement(Text, { style: footerText }, "You'll receive another email once the captain approves your booking. If you have any questions, feel free to contact us."))));
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
