import { Hr, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailButton } from "../components/EmailButton";
import { EmailHeader } from "../components/EmailHeader";
import { EmailLayout } from "../components/EmailLayout";
import { InfoBox } from "../components/InfoBox";
export function DepositReceivedCaptainEmail({ captainName, charterName, anglerName, anglerEmail, anglerPhone, tripName, tripDate, tripDays, durationHours, startTime, totalPrice, depositAmount, balanceAmount, depositPercent, platformFee, captainEarnings, bookingUrl, }) {
    const tripDateDisplay = `${tripDate} • ${tripDays} ${tripDays > 1 ? "Days" : "Day"}`;
    const durationDisplay = `${durationHours} ${durationHours > 1 ? "hours" : "hour"}`;
    return (React.createElement(EmailLayout, { preview: `Deposit received - Collect ${balanceAmount} on trip day` },
        React.createElement(EmailHeader, { title: "Deposit Payment Received \uD83D\uDCB0", subtitle: `Charter: ${charterName}` }),
        React.createElement(Section, { style: content },
            React.createElement(Text, { style: greeting },
                "Hi Captain ",
                captainName,
                ","),
            React.createElement(Text, { style: paragraph },
                "Great news! ",
                anglerName,
                " has paid a deposit of ",
                depositAmount,
                " (",
                depositPercent,
                "%) for their booking. Please acknowledge this booking and prepare for their trip."),
            React.createElement(Section, { style: highlightBox },
                React.createElement(Text, { style: highlightTitle }, "\uD83D\uDCB5 Balance to Collect on Trip Day"),
                React.createElement(Text, { style: highlightText },
                    "You will collect ",
                    balanceAmount,
                    " directly from the angler on the trip day. This balance is paid directly to you (no platform commission on balance).")),
            React.createElement(Section, { style: detailsSection },
                React.createElement(Text, { style: sectionTitle }, "Payment Breakdown"),
                React.createElement(InfoBox, { label: "Total Trip Price", value: totalPrice }),
                React.createElement(InfoBox, { label: "Deposit Received (via Platform)", value: `${depositAmount} (${depositPercent}%)` }),
                React.createElement(InfoBox, { label: "Balance to Collect (Direct)", value: balanceAmount })),
            React.createElement(Section, { style: detailsSection },
                React.createElement(Text, { style: sectionTitle }, "Your Earnings (from Deposit)"),
                React.createElement(InfoBox, { label: "Deposit Amount", value: depositAmount }),
                React.createElement(InfoBox, { label: "Platform Fee (10%)", value: platformFee }),
                React.createElement(InfoBox, { label: "Your Deposit Payout", value: captainEarnings }),
                React.createElement(Text, { style: noteText }, "* Platform fee is calculated on total trip price, deducted from deposit payout. Balance payment goes directly to you with no additional fees.")),
            React.createElement(Section, { style: detailsSection },
                React.createElement(Text, { style: sectionTitle }, "Booking Details"),
                React.createElement(InfoBox, { label: "Charter", value: charterName }),
                React.createElement(InfoBox, { label: "Trip", value: tripName }),
                React.createElement(InfoBox, { label: "Date", value: tripDateDisplay }),
                React.createElement(InfoBox, { label: "Duration", value: durationDisplay }),
                startTime && React.createElement(InfoBox, { label: "Start Time", value: startTime })),
            React.createElement(Section, { style: detailsSection },
                React.createElement(Text, { style: sectionTitle }, "Angler Information"),
                React.createElement(InfoBox, { label: "Name", value: anglerName }),
                React.createElement(InfoBox, { label: "Email", value: anglerEmail }),
                React.createElement(InfoBox, { label: "Phone", value: anglerPhone })),
            React.createElement(EmailButton, { href: bookingUrl }, "View Booking & Acknowledge"),
            React.createElement(Hr, { style: divider }),
            React.createElement(Text, { style: footerText }, "Please acknowledge this booking within 12 hours. The angler has been notified about the balance payment they need to bring on the trip day."))));
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
const highlightBox = {
    backgroundColor: "#dcfce7",
    border: "1px solid #22c55e",
    borderRadius: "8px",
    padding: "16px",
    margin: "24px 0",
};
const highlightTitle = {
    fontSize: "16px",
    fontWeight: "700",
    color: "#166534",
    margin: "0 0 8px",
};
const highlightText = {
    fontSize: "14px",
    color: "#15803d",
    lineHeight: "1.5",
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
const noteText = {
    fontSize: "12px",
    color: "#6b7280",
    margin: "8px 0 0",
    fontStyle: "italic",
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
DepositReceivedCaptainEmail.PreviewProps = {
    captainName: "Hassan",
    charterName: "Full Day Deep Sea Adventure",
    anglerName: "Ahmad",
    anglerEmail: "ahmad@example.com",
    anglerPhone: "+60 12-345 6789",
    tripName: "Half Day Trip",
    tripDate: "24 October 2025",
    tripDays: 1,
    durationHours: 4,
    startTime: "6:00 AM",
    totalPrice: "RM 800",
    depositAmount: "RM 240",
    balanceAmount: "RM 560",
    depositPercent: 30,
    platformFee: "RM 80",
    captainEarnings: "RM 160",
    bookingUrl: "https://captain.fishon.my/bookings/123",
};
export default DepositReceivedCaptainEmail;
