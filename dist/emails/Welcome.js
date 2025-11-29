import { Hr, Section, Text } from "@react-email/components";
import * as React from "react";
import { EmailButton } from "../components/EmailButton";
import { EmailHeader } from "../components/EmailHeader";
import { EmailLayout } from "../components/EmailLayout";
export function WelcomeEmail({ userName, userType, loginUrl, promoCode, }) {
    const isAngler = userType === "angler";
    return (React.createElement(EmailLayout, { preview: `Welcome to Fishon${isAngler ? "" : " Captain"}, ${userName}!` },
        React.createElement(EmailHeader, { title: `Welcome to Fishon${isAngler ? "" : " Captain"}! 🎣`, subtitle: "Your fishing adventure starts here" }),
        React.createElement(Section, { style: content },
            React.createElement(Text, { style: greeting },
                "Hi ",
                userName,
                ", / Hai ",
                userName,
                ","),
            React.createElement(Text, { style: paragraph }, isAngler ? (React.createElement(React.Fragment, null,
                "Welcome to ",
                React.createElement("strong", null, "Fishon"),
                " - Malaysia's premier fishing charter marketplace! We're excited to help you discover amazing fishing adventures.")) : (React.createElement(React.Fragment, null,
                "Welcome to ",
                React.createElement("strong", null, "Fishon Captain"),
                "! Thank you for joining our community of professional fishing charter operators."))),
            React.createElement(Text, { style: paragraphMy }, isAngler ? (React.createElement(React.Fragment, null,
                "Selamat datang ke ",
                React.createElement("strong", null, "Fishon"),
                " - pasaran charter memancing utama Malaysia! Kami teruja untuk membantu anda menemui pengembaraan memancing yang menakjubkan.")) : (React.createElement(React.Fragment, null,
                "Selamat datang ke ",
                React.createElement("strong", null, "Fishon Captain"),
                "! Terima kasih kerana menyertai komuniti pengendali charter memancing profesional kami."))),
            isAngler && promoCode && (React.createElement(Section, { style: promoBox },
                React.createElement(Text, { style: promoTitle }, "\uD83C\uDF81 Welcome Gift! / Hadiah Selamat Datang!"),
                React.createElement(Text, { style: promoDescription },
                    "As a thank you for joining Fishon, here's a special 10% discount code for your first booking:",
                    React.createElement("br", null),
                    React.createElement("em", null, "Sebagai tanda terima kasih kerana menyertai Fishon, ini kod diskaun 10% khas untuk tempahan pertama anda:")),
                React.createElement(Section, { style: promoCodeBox },
                    React.createElement(Text, { style: promoCodeText }, promoCode)),
                React.createElement(Text, { style: promoNote },
                    "Use this code at checkout to get 10% off your first fishing trip. Happy fishing! \uD83C\uDFA3",
                    React.createElement("br", null),
                    React.createElement("em", null, "Gunakan kod ini semasa pembayaran untuk mendapat diskaun 10% untuk trip memancing pertama anda. Selamat memancing!")))),
            isAngler ? (React.createElement(Section, { style: featureBox },
                React.createElement(Text, { style: featureTitle }, "\uD83C\uDFA3 What You Can Do / Apa Yang Boleh Anda Lakukan:"),
                React.createElement(Text, { style: featureList },
                    "\u2022 Browse hundreds of fishing charters across Malaysia / Layari ratusan charter memancing di seluruh Malaysia",
                    React.createElement("br", null),
                    "\u2022 Book trips with experienced captains / Tempah perjalanan dengan kapten berpengalaman",
                    React.createElement("br", null),
                    "\u2022 Read reviews from fellow anglers / Baca ulasan daripada rakan pemancing",
                    React.createElement("br", null),
                    "\u2022 Track your bookings and trips / Jejaki tempahan dan perjalanan anda",
                    React.createElement("br", null),
                    "\u2022 Discover new fishing spots / Temui lokasi memancing baharu"))) : (React.createElement(Section, { style: featureBox },
                React.createElement(Text, { style: featureTitle }, "\u2693 Next Steps / Langkah Seterusnya:"),
                React.createElement(Text, { style: featureList },
                    "\u2022 Complete your captain profile / Lengkapkan profil kapten anda",
                    React.createElement("br", null),
                    "\u2022 Add your fishing charters / Tambah charter memancing anda",
                    React.createElement("br", null),
                    "\u2022 Upload photos and videos / Muat naik foto dan video",
                    React.createElement("br", null),
                    "\u2022 Set your availability / Tetapkan ketersediaan anda",
                    React.createElement("br", null),
                    "\u2022 Start receiving bookings! / Mula menerima tempahan!"))),
            React.createElement(EmailButton, { href: loginUrl }, isAngler
                ? "Start Exploring / Mula Meneroka"
                : "Go to Dashboard / Pergi ke Papan Pemuka"),
            React.createElement(Hr, { style: divider }),
            React.createElement(Text, { style: footerText }, isAngler ? (React.createElement(React.Fragment, null,
                "Ready to book your first trip? Browse our charters and find your perfect fishing adventure!",
                React.createElement("br", null),
                React.createElement("em", null, "Bersedia untuk menempah perjalanan pertama anda? Layari charter kami dan cari pengembaraan memancing yang sempurna!"))) : (React.createElement(React.Fragment, null,
                "Need help getting started? Contact our team at",
                " ",
                React.createElement("a", { href: "mailto:captain@fishon.my", style: link }, "captain@fishon.my"),
                React.createElement("br", null),
                React.createElement("em", null,
                    "Perlukan bantuan untuk bermula? Hubungi pasukan kami di",
                    " ",
                    React.createElement("a", { href: "mailto:captain@fishon.my", style: link }, "captain@fishon.my"))))))));
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
    fontSize: "14px",
    color: "#166534",
    lineHeight: "2",
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
const link = {
    color: "#ec2227",
    textDecoration: "underline",
};
const promoBox = {
    backgroundColor: "#fef3c7",
    padding: "24px",
    borderRadius: "12px",
    borderLeft: "4px solid #f59e0b",
    margin: "24px 0",
    textAlign: "center",
};
const promoTitle = {
    fontSize: "18px",
    fontWeight: "700",
    color: "#92400e",
    margin: "0 0 12px",
};
const promoDescription = {
    fontSize: "14px",
    color: "#78350f",
    lineHeight: "1.6",
    margin: "0 0 16px",
};
const promoCodeBox = {
    backgroundColor: "#ffffff",
    padding: "16px 24px",
    borderRadius: "8px",
    border: "2px dashed #f59e0b",
    margin: "0 auto 16px",
    display: "inline-block",
};
const promoCodeText = {
    fontSize: "24px",
    fontWeight: "700",
    color: "#ea580c",
    letterSpacing: "2px",
    margin: "0",
    fontFamily: "monospace",
};
const promoNote = {
    fontSize: "13px",
    color: "#92400e",
    margin: "0",
    lineHeight: "1.6",
};
WelcomeEmail.PreviewProps = {
    userName: "Ahmad",
    userType: "angler",
    loginUrl: "https://fishon.my/login",
    promoCode: "FISHONTRIP1",
};
export default WelcomeEmail;
