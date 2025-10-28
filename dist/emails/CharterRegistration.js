import { Hr, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailButton } from "../components/EmailButton";
import { EmailHeader } from "../components/EmailHeader";
import { EmailLayout } from "../components/EmailLayout";
export function CharterRegistrationEmail({ captainName, charterName, dashboardUrl, }) {
    return (React.createElement(EmailLayout, { preview: `${charterName} charter registered successfully!` },
        React.createElement(EmailHeader, { title: "Charter Registration Successful! \uD83C\uDFA3", subtitle: `${charterName} is now on Fishon` }),
        React.createElement(Section, { style: content },
            React.createElement(Text, { style: greeting },
                "Hi ",
                captainName,
                ","),
            React.createElement(Text, { style: paragraph },
                "Congratulations! Your charter ",
                React.createElement("strong", null, charterName),
                " has been successfully registered on Fishon.my. We're excited to help you connect with anglers and grow your fishing charter business."),
            React.createElement(Section, { style: successBox },
                React.createElement(Text, { style: successText }, "\u2713 Charter registration complete!")),
            React.createElement(Section, { style: nextStepsBox },
                React.createElement(Text, { style: nextStepsTitle }, "\uD83D\uDCCB Next Steps:"),
                React.createElement(Text, { style: stepsList },
                    React.createElement("strong", null, "1. Set Your Availability"),
                    React.createElement("br", null),
                    "Configure your calendar and booking preferences",
                    React.createElement("br", null),
                    React.createElement("br", null),
                    React.createElement("strong", null, "2. Get Verified"),
                    React.createElement("br", null),
                    "Upload required documents for captain verification")),
            React.createElement(EmailButton, { href: dashboardUrl }, "Go to Dashboard"),
            React.createElement(Hr, { style: divider }),
            React.createElement(Section, { style: infoBox },
                React.createElement(Text, { style: infoTitle }, "\uD83D\uDCDE Need Help?"),
                React.createElement(Text, { style: infoText }, "Our team will review your charter listing and contact you if we need any additional information. If you have questions, reach out to us:"),
                React.createElement(Text, { style: infoText },
                    "Email:",
                    " ",
                    React.createElement("a", { href: "mailto:captain@fishon.my", style: link }, "captain@fishon.my"),
                    React.createElement("br", null),
                    "WhatsApp:",
                    " ",
                    React.createElement("a", { href: "https://wa.me/60123456789", style: link }, "+60 12-345 6789"))),
            React.createElement(Text, { style: footerText }, "Welcome aboard! We look forward to helping you grow your fishing charter business."))));
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
const successBox = {
    backgroundColor: "#f0fdf4",
    borderLeft: "4px solid #22c55e",
    padding: "16px",
    borderRadius: "6px",
    margin: "24px 0",
};
const successText = {
    fontSize: "16px",
    fontWeight: "600",
    color: "#166534",
    margin: "0",
};
const nextStepsBox = {
    backgroundColor: "#fef9f5",
    borderLeft: "4px solid #ec2227",
    padding: "20px",
    borderRadius: "6px",
    margin: "24px 0",
};
const nextStepsTitle = {
    fontSize: "18px",
    fontWeight: "600",
    color: "#111827",
    margin: "0 0 16px",
};
const stepsList = {
    fontSize: "15px",
    color: "#374151",
    lineHeight: "1.8",
    margin: "0",
};
const divider = {
    borderColor: "#e5e7eb",
    margin: "24px 0",
};
const infoBox = {
    backgroundColor: "#f9fafb",
    padding: "16px",
    borderRadius: "6px",
    margin: "24px 0",
};
const infoTitle = {
    fontSize: "16px",
    fontWeight: "600",
    color: "#111827",
    margin: "0 0 8px",
};
const infoText = {
    fontSize: "14px",
    color: "#374151",
    lineHeight: "1.6",
    margin: "8px 0 0 0",
};
const link = {
    color: "#ec2227",
    textDecoration: "underline",
};
const footerText = {
    fontSize: "14px",
    color: "#6b7280",
    margin: "24px 0 0 0",
    fontStyle: "italic",
};
CharterRegistrationEmail.PreviewProps = {
    captainName: "Hassan",
    charterName: "Full Day Deep Sea Adventure",
    dashboardUrl: "https://captain.fishon.my/captain/dashboard",
};
export default CharterRegistrationEmail;
