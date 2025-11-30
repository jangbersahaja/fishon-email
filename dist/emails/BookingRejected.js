import { Hr, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailButton } from "../components/EmailButton";
import { EmailHeader } from "../components/EmailHeader";
import { EmailLayout } from "../components/EmailLayout";
export function BookingRejectedEmail({ userName, charterName, reason, searchUrl, paymentFlow, refundAmount, }) {
    return (React.createElement(EmailLayout, { preview: `Booking update for ${charterName}` },
        React.createElement(EmailHeader, { title: "Booking Update", subtitle: "We're here to help" }),
        React.createElement(Section, { style: content },
            React.createElement(Text, { style: greeting },
                "Hi ",
                userName,
                ", / Hai ",
                userName,
                ","),
            React.createElement(Text, { style: paragraph },
                "We're sorry, but your booking request for",
                " ",
                React.createElement("strong", null, charterName),
                " could not be accommodated at this time."),
            React.createElement(Text, { style: paragraphMy },
                "Maaf, permintaan tempahan anda untuk ",
                React.createElement("strong", null, charterName),
                " ",
                "tidak dapat dipenuhi pada masa ini."),
            reason && (React.createElement(Section, { style: reasonBox },
                React.createElement(Text, { style: reasonLabel }, "Reason from Captain / Sebab dari Kapten:"),
                React.createElement(Text, { style: reasonText }, reason))),
            paymentFlow === "TOKENIZED" && (React.createElement(Section, { style: infoBox },
                React.createElement(Text, { style: infoText },
                    "\uD83D\uDCB3 ",
                    React.createElement("strong", null, "Good news:"),
                    " Your card was only authorized, not charged. The authorization has been released and you will not see any charge on your statement.",
                    React.createElement("br", null),
                    React.createElement("em", { style: { color: "#166534" } }, "Berita baik: Kad anda hanya diluluskan, tidak dicaj. Kelulusan telah dilepaskan dan anda tidak akan melihat sebarang caj pada penyata anda.")))),
            paymentFlow === "DIRECT" && refundAmount && (React.createElement(Section, { style: infoBox },
                React.createElement(Text, { style: infoText },
                    "\uD83D\uDCB0 ",
                    React.createElement("strong", null, "Refund initiated:"),
                    " We've started processing your refund of ",
                    refundAmount,
                    ". The funds should appear in your account within 3-5 business days.",
                    React.createElement("br", null),
                    React.createElement("em", { style: { color: "#166534" } },
                        "Bayaran balik dimulakan: Kami telah memulakan pemprosesan bayaran balik sebanyak ",
                        refundAmount,
                        ". Dana akan muncul dalam akaun anda dalam 3-5 hari bekerja.")))),
            React.createElement(Text, { style: paragraph }, "Don't worry! We have many other amazing fishing charters available. Browse our selection to find your next adventure."),
            React.createElement(Text, { style: paragraphMy }, "Jangan risau! Kami mempunyai banyak charter memancing lain yang menarik. Layari pilihan kami untuk mencari pengembaraan anda yang seterusnya."),
            React.createElement(EmailButton, { href: searchUrl }, "Find Other Charters / Cari Charter Lain"),
            React.createElement(Hr, { style: divider }),
            React.createElement(Text, { style: footerText },
                "Need help finding the perfect charter? Contact our support team and we'll be happy to assist you.",
                React.createElement("br", null),
                React.createElement("em", null, "Perlukan bantuan mencari charter yang sesuai? Hubungi pasukan sokongan kami dan kami akan gembira membantu anda.")))));
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
const reasonBox = {
    backgroundColor: "#fef2f2",
    borderLeft: "4px solid #ef4444",
    padding: "16px",
    borderRadius: "6px",
    margin: "0 0 24px",
};
const reasonLabel = {
    fontSize: "14px",
    fontWeight: "600",
    color: "#991b1b",
    margin: "0 0 8px",
};
const infoBox = {
    backgroundColor: "#f0fdf4",
    borderLeft: "4px solid #22c55e",
    padding: "16px",
    borderRadius: "6px",
    margin: "0 0 24px",
};
const infoText = {
    fontSize: "14px",
    color: "#166534",
    margin: "0",
    lineHeight: "1.6",
};
const reasonText = {
    fontSize: "14px",
    color: "#7f1d1d",
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
    lineHeight: "1.6",
};
BookingRejectedEmail.PreviewProps = {
    userName: "Ahmad",
    charterName: "Full Day Deep Sea Adventure",
    reason: "Unfortunately, we are fully booked for this date. Please check our availability calendar for other dates.",
    searchUrl: "https://fishon.my/search",
};
export default BookingRejectedEmail;
