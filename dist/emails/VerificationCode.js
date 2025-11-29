import { Hr, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailHeader } from "../components/EmailHeader";
import { EmailLayout } from "../components/EmailLayout";
export function VerificationCodeEmail({ userName, code, purpose, expiryMinutes = 2, }) {
    const purposeText = {
        registration: "complete your registration",
        login: "sign in to your account",
        forgot_password: "reset your password",
        guest_booking: "verify your booking",
        email_verification: "verify your email address",
    };
    const purposeTextMy = {
        registration: "melengkapkan pendaftaran anda",
        login: "log masuk ke akaun anda",
        forgot_password: "menetapkan semula kata laluan anda",
        guest_booking: "mengesahkan tempahan anda",
        email_verification: "mengesahkan alamat emel anda",
    };
    const title = {
        registration: "Welcome to Fishon! 🎣",
        login: "Sign In Verification",
        forgot_password: "Reset Your Password",
        guest_booking: "Verify Your Booking",
        email_verification: "Verify Your Email",
    };
    return (React.createElement(EmailLayout, { preview: `Your Fishon verification code: ${code}` },
        React.createElement(EmailHeader, { title: title[purpose] }),
        React.createElement(Section, { style: content },
            React.createElement(Text, { style: greeting },
                "Hi ",
                userName || "there",
                ", / Hai ",
                userName || "anda",
                ","),
            React.createElement(Text, { style: paragraph },
                "To ",
                purposeText[purpose],
                ", please use the verification code below:"),
            React.createElement(Text, { style: paragraphMy },
                "Untuk ",
                purposeTextMy[purpose],
                ", sila gunakan kod pengesahan di bawah:"),
            React.createElement(Section, { style: codeBox },
                React.createElement(Text, { style: codeStyle }, code)),
            React.createElement(Section, { style: infoBox },
                React.createElement(Text, { style: infoText },
                    React.createElement("strong", null, "Security Note / Nota Keselamatan:"),
                    React.createElement("br", null),
                    "\u2022 This code expires in ",
                    expiryMinutes,
                    " minutes / Kod ini tamat tempoh dalam ",
                    expiryMinutes,
                    " minit",
                    React.createElement("br", null),
                    "\u2022 Never share this code with anyone / Jangan kongsi kod ini dengan sesiapa",
                    React.createElement("br", null),
                    "\u2022 If you didn't request this code, please ignore this email / Jika anda tidak meminta kod ini, sila abaikan emel ini")),
            React.createElement(Hr, { style: divider }),
            React.createElement(Text, { style: footerText },
                "Need help? / Perlukan bantuan? Contact us at / Hubungi kami di",
                " ",
                React.createElement("a", { href: "mailto:support@fishon.my", style: link }, "support@fishon.my")))));
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
const codeBox = {
    textAlign: "center",
    margin: "30px 0",
    padding: "20px",
    backgroundColor: "#fef2f2",
    borderRadius: "8px",
    border: "2px dashed #ec2227",
};
const codeStyle = {
    fontSize: "36px",
    fontWeight: "700",
    letterSpacing: "8px",
    color: "#ec2227",
    fontFamily: "monospace",
    margin: "0",
};
const infoBox = {
    backgroundColor: "#f9fafb",
    padding: "16px",
    borderRadius: "6px",
    margin: "24px 0",
};
const infoText = {
    fontSize: "14px",
    color: "#374151",
    margin: "0",
    lineHeight: "1.6",
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
VerificationCodeEmail.PreviewProps = {
    userName: "Ahmad",
    code: "123456",
    purpose: "registration",
    expiryMinutes: 2,
};
export default VerificationCodeEmail;
