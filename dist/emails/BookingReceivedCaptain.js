import { Hr, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailButton } from "../components/EmailButton";
import { EmailHeader } from "../components/EmailHeader";
import { EmailLayout } from "../components/EmailLayout";
import { InfoBox } from "../components/InfoBox";
export function BookingReceivedCaptainEmail({ captainName, charterName, anglerName, tripName, tripDate, tripDays, durationHours, startTime, totalPrice, bookingUrl, }) {
    const tripDateDisplay = `${tripDate} • ${tripDays} ${tripDays > 1 ? "Days" : "Day"}`;
    const durationDisplay = `${durationHours} ${durationHours > 1 ? "hours" : "hour"}`;
    return (React.createElement(EmailLayout, { preview: `Your ${charterName} have received new booking` },
        React.createElement(EmailHeader, { title: "Booking Request Received \uD83C\uDFA3", subtitle: `Charter: ${charterName}` }),
        React.createElement(Section, { style: content },
            React.createElement(Text, { style: greeting },
                "Hi Captain ",
                captainName,
                ","),
            React.createElement(Text, { style: paragraph }, "New booking received! Please proceed to accept or reject the booking."),
            React.createElement(Section, { style: detailsSection },
                React.createElement(Text, { style: sectionTitle }, "Booking Details"),
                React.createElement(InfoBox, { label: "Angler", value: anglerName }),
                React.createElement(InfoBox, { label: "Charter", value: charterName }),
                React.createElement(InfoBox, { label: "Trip", value: tripName }),
                React.createElement(InfoBox, { label: "Date", value: tripDateDisplay }),
                React.createElement(InfoBox, { label: "Duration", value: durationDisplay }),
                startTime && React.createElement(InfoBox, { label: "Start Time", value: startTime }),
                React.createElement(InfoBox, { label: "Total Price", value: totalPrice })),
            React.createElement(EmailButton, { href: bookingUrl }, "Review Booking Request"),
            React.createElement(Hr, { style: divider }),
            React.createElement(Text, { style: footerText }, "Please review and respond to this booking request as soon as possible. The angler is waiting for your confirmation."))));
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
BookingReceivedCaptainEmail.PreviewProps = {
    captainName: "Hassan",
    charterName: "Full Day Deep Sea Adventure",
    anglerName: "Ahmad bin Abdullah",
    tripName: "Half Day Trip",
    tripDate: "24 October 2025",
    tripDays: 1,
    durationHours: 4,
    startTime: "6:00 AM",
    totalPrice: "RM 800",
    bookingUrl: "https://captain.fishon.my/captain/bookings/123",
};
export default BookingReceivedCaptainEmail;
