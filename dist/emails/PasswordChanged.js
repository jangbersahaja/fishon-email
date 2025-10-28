import { Hr, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailHeader } from "../components/EmailHeader";
import { EmailLayout } from "../components/EmailLayout";
export function PasswordChangedEmail({ userName, changeType, timestamp, supportUrl = "https://fishon.my/contact", }) {
    const action = changeType === "reset" ? "reset" : "changed";
    const actionCap = changeType === "reset" ? "Reset" : "Changed";
    return (React.createElement(EmailLayout, { preview: `Your password was ${action}` },
        React.createElement(EmailHeader, { title: `Password ${actionCap}`, subtitle: "Security notification" }),
        React.createElement(Section, { style: content },
            React.createElement(Text, { style: greeting },
                "Hi ",
                userName,
                ","),
            React.createElement(Text, { style: paragraph },
                "Your Fishon password was successfully ",
                action,
                "."),
            React.createElement(Section, { style: successBox },
                React.createElement(Text, { style: successText },
                    "\u2713 Password ",
                    actionCap,
                    " Successfully"),
                React.createElement(Text, { style: timestampText }, timestamp)),
            React.createElement(Section, { style: warningBox },
                React.createElement(Text, { style: warningTitle },
                    "\u26A0\uFE0F Didn't ",
                    action,
                    " your password?"),
                React.createElement(Text, { style: warningText }, "If you didn't make this change, your account may be compromised. Please contact our support team immediately:"),
                React.createElement(Text, { style: warningText },
                    React.createElement("a", { href: supportUrl, style: warningLink }, "Contact Support Now"))),
            React.createElement(Hr, { style: divider }),
            React.createElement(Text, { style: footerText }, "This is an automated security notification. For your protection, we send these emails whenever your password is changed."))));
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
    margin: "0 0 8px",
};
const timestampText = {
    fontSize: "14px",
    color: "#166534",
    margin: "0",
};
const warningBox = {
    backgroundColor: "#fef2f2",
    borderLeft: "4px solid #ef4444",
    padding: "16px",
    borderRadius: "6px",
    margin: "24px 0",
};
const warningTitle = {
    fontSize: "16px",
    fontWeight: "600",
    color: "#991b1b",
    margin: "0 0 8px",
};
const warningText = {
    fontSize: "14px",
    color: "#991b1b",
    margin: "8px 0 0 0",
};
const warningLink = {
    color: "#991b1b",
    textDecoration: "underline",
    fontWeight: "600",
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
PasswordChangedEmail.PreviewProps = {
    userName: "Ahmad",
    changeType: "reset",
    timestamp: "October 28, 2025 at 10:15 PM",
    supportUrl: "https://fishon.my/contact",
};
export default PasswordChangedEmail;
