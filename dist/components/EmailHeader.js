import { Heading, Img, Section } from "@react-email/components";
import * as React from "react";
export function EmailHeader({ title, subtitle }) {
    return (React.createElement(Section, { style: header },
        React.createElement(Img, { src: "https://fishon.my/images/logos/fishon-logo-white.png", alt: "Fishon", width: "120", height: "40", style: logo }),
        React.createElement(Heading, { style: heading }, title),
        subtitle && React.createElement("p", { style: subheading }, subtitle)));
}
const header = {
    background: "linear-gradient(135deg, #ec2227 0%, #c81e23 100%)",
    padding: "40px 30px",
    textAlign: "center",
};
const logo = {
    margin: "0 auto 20px",
};
const heading = {
    color: "#ffffff",
    fontSize: "28px",
    fontWeight: "700",
    margin: "0",
    lineHeight: "1.2",
};
const subheading = {
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: "16px",
    margin: "8px 0 0",
};
