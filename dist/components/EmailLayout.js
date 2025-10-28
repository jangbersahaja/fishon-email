import { Body, Container, Head, Html, Preview } from "@react-email/components";
import * as React from "react";
export function EmailLayout({ preview, children }) {
    return (React.createElement(Html, null,
        React.createElement(Head, null),
        React.createElement(Preview, null, preview),
        React.createElement(Body, { style: main },
            React.createElement(Container, { style: container }, children))));
}
const main = {
    backgroundColor: "#f6f6f6",
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
    padding: "20px 0",
};
const container = {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    padding: "0",
    borderRadius: "8px",
    overflow: "hidden",
    maxWidth: "600px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
};
