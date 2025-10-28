import { Hr, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailButton } from "../components/EmailButton";
import { EmailHeader } from "../components/EmailHeader";
import { EmailLayout } from "../components/EmailLayout";
export function WelcomeEmail({ userName, userType, loginUrl, }) {
    const isAngler = userType === "angler";
    return (React.createElement(EmailLayout, { preview: `Welcome to Fishon${isAngler ? "" : " Captain"}, ${userName}!` },
        React.createElement(EmailHeader, { title: `Welcome to Fishon${isAngler ? "" : " Captain"}! 🎣`, subtitle: "Your fishing adventure starts here" }),
        React.createElement(Section, { style: content },
            React.createElement(Text, { style: greeting },
                "Hi ",
                userName,
                ","),
            React.createElement(Text, { style: paragraph }, isAngler ? (React.createElement(React.Fragment, null,
                "Welcome to ",
                React.createElement("strong", null, "Fishon"),
                " - Malaysia's premier fishing charter marketplace! We're excited to help you discover amazing fishing adventures.")) : (React.createElement(React.Fragment, null,
                "Welcome to ",
                React.createElement("strong", null, "Fishon Captain"),
                "! Thank you for joining our community of professional fishing charter operators."))),
            isAngler ? (React.createElement(Section, { style: featureBox },
                React.createElement(Text, { style: featureTitle }, "\uD83C\uDFA3 What You Can Do:"),
                React.createElement(Text, { style: featureList },
                    "\u2022 Browse hundreds of fishing charters across Malaysia",
                    React.createElement("br", null),
                    "\u2022 Book trips with experienced captains",
                    React.createElement("br", null),
                    "\u2022 Read reviews from fellow anglers",
                    React.createElement("br", null),
                    "\u2022 Track your bookings and trips",
                    React.createElement("br", null),
                    "\u2022 Discover new fishing spots"))) : (React.createElement(Section, { style: featureBox },
                React.createElement(Text, { style: featureTitle }, "\u2693 Next Steps:"),
                React.createElement(Text, { style: featureList },
                    "\u2022 Complete your captain profile",
                    React.createElement("br", null),
                    "\u2022 Add your fishing charters",
                    React.createElement("br", null),
                    "\u2022 Upload photos and videos",
                    React.createElement("br", null),
                    "\u2022 Set your availability",
                    React.createElement("br", null),
                    "\u2022 Start receiving bookings!"))),
            React.createElement(EmailButton, { href: loginUrl }, isAngler ? "Start Exploring" : "Go to Dashboard"),
            React.createElement(Hr, { style: divider }),
            React.createElement(Text, { style: footerText }, isAngler ? (React.createElement(React.Fragment, null, "Ready to book your first trip? Browse our charters and find your perfect fishing adventure!")) : (React.createElement(React.Fragment, null,
                "Need help getting started? Contact our team at",
                " ",
                React.createElement("a", { href: "mailto:captain@fishon.my", style: link }, "captain@fishon.my")))))));
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
const featureBox = {
    backgroundColor: "#f0fdf4",
    padding: "20px",
    borderRadius: "8px",
    borderLeft: "4px solid #22c55e",
    margin: "24px 0",
};
const featureTitle = {
    fontSize: "16px",
    fontWeight: "600",
    color: "#166534",
    margin: "0 0 12px",
};
const featureList = {
    fontSize: "15px",
    color: "#166534",
    lineHeight: "1.8",
    margin: "0",
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
const link = {
    color: "#ec2227",
    textDecoration: "underline",
};
WelcomeEmail.PreviewProps = {
    userName: "Ahmad",
    userType: "angler",
    loginUrl: "https://fishon.my/login",
};
export default WelcomeEmail;
