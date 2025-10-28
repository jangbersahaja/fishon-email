import { Hr, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailButton } from "../components/EmailButton";
import { EmailHeader } from "../components/EmailHeader";
import { EmailLayout } from "../components/EmailLayout";
import { InfoBox } from "../components/InfoBox";
export function BookingCancelledEmail({ captainName, charterName, anglerName, tripName, tripDate, cancellationReason, bookingUrl, }) {
    return (React.createElement(EmailLayout, { preview: `Booking cancelled by ${anglerName}` },
        React.createElement(EmailHeader, { title: "Booking Cancelled By Angler", subtitle: `Charter: ${charterName}` }),
        React.createElement(Section, { style: content },
            React.createElement(Text, { style: greeting },
                "Hi Captain ",
                captainName,
                ","),
            React.createElement(Text, { style: paragraph }, "A booking for your charter has been cancelled by the angler."),
            React.createElement(Section, { style: detailsSection },
                React.createElement(Text, { style: sectionTitle }, "Booking Details"),
                React.createElement(InfoBox, { label: "Angler", value: anglerName }),
                React.createElement(InfoBox, { label: "Charter", value: charterName }),
                React.createElement(InfoBox, { label: "Trip", value: tripName }),
                React.createElement(InfoBox, { label: "Date", value: tripDate })),
            cancellationReason && (React.createElement(Section, { style: reasonSection },
                React.createElement(Text, { style: reasonTitle }, "Cancellation Reason"),
                React.createElement(Text, { style: reasonText }, cancellationReason))),
            React.createElement(EmailButton, { href: bookingUrl }, "View Booking Details"),
            React.createElement(Hr, { style: divider }),
            React.createElement(Text, { style: footerText }, "If you have any questions about this cancellation, please contact our support team."))));
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
const reasonSection = {
    margin: "24px 0",
    padding: "16px",
    backgroundColor: "#fef2f2",
    borderLeft: "4px solid #ef4444",
    borderRadius: "4px",
};
const reasonTitle = {
    fontSize: "14px",
    fontWeight: "600",
    color: "#991b1b",
    margin: "0 0 8px",
};
const reasonText = {
    fontSize: "14px",
    color: "#991b1b",
    margin: "0",
    lineHeight: "1.5",
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
BookingCancelledEmail.PreviewProps = {
    captainName: "Hassan",
    charterName: "Full Day Deep Sea Adventure",
    anglerName: "Ahmad bin Abdullah",
    tripName: "Half Day Trip",
    tripDate: "24 October 2025",
    cancellationReason: "Family emergency - unable to make the trip. Sorry for the inconvenience.",
    bookingUrl: "https://captain.fishon.my/captain/bookings/123",
};
export default BookingCancelledEmail;
