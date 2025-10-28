import { render } from "@react-email/components";
import * as React from "react";
import BookingApprovedEmail from "./emails/BookingApproved";
import BookingCancelledEmail from "./emails/BookingCancelled";
import BookingConfirmedAnglerEmail from "./emails/BookingConfirmedAngler";
import BookingConfirmedCaptainEmail from "./emails/BookingConfirmedCaptain";
import BookingCreatedEmail from "./emails/BookingCreated";
import BookingReceivedCaptainEmail from "./emails/BookingReceivedCaptain";
import BookingRejectedEmail from "./emails/BookingRejected";
import CaptainRegistrationEmail from "./emails/CaptainRegistration";
import CharterRegistrationEmail from "./emails/CharterRegistration";
import PasswordChangedEmail from "./emails/PasswordChanged";
import VerificationCodeEmail from "./emails/VerificationCode";
import WelcomeEmail from "./emails/Welcome";
// Export all email templates
export { default as BookingApprovedEmail } from "./emails/BookingApproved";
export { default as BookingCancelledEmail } from "./emails/BookingCancelled";
export { default as BookingConfirmedAnglerEmail } from "./emails/BookingConfirmedAngler";
export { default as BookingConfirmedCaptainEmail } from "./emails/BookingConfirmedCaptain";
export { default as BookingCreatedEmail } from "./emails/BookingCreated";
export { default as BookingReceivedCaptainEmail } from "./emails/BookingReceivedCaptain";
export { default as BookingRejectedEmail } from "./emails/BookingRejected";
export { default as CaptainRegistrationEmail } from "./emails/CaptainRegistration";
export { default as CharterRegistrationEmail } from "./emails/CharterRegistration";
export { default as PasswordChangedEmail } from "./emails/PasswordChanged";
export { default as VerificationCodeEmail } from "./emails/VerificationCode";
export { default as WelcomeEmail } from "./emails/Welcome";
// Export components for custom emails
export { EmailButton } from "./components/EmailButton";
export { EmailHeader } from "./components/EmailHeader";
export { EmailLayout } from "./components/EmailLayout";
export { InfoBox } from "./components/InfoBox";
// Email rendering functions - Booking emails
export async function renderBookingCreatedEmail(props) {
    return render(React.createElement(BookingCreatedEmail, props));
}
export async function renderBookingApprovedEmail(props) {
    return render(React.createElement(BookingApprovedEmail, props));
}
export async function renderBookingRejectedEmail(props) {
    return render(React.createElement(BookingRejectedEmail, props));
}
// Email rendering functions - Auth & Verification
export async function renderVerificationCodeEmail(props) {
    return render(React.createElement(VerificationCodeEmail, props));
}
export async function renderWelcomeEmail(props) {
    return render(React.createElement(WelcomeEmail, props));
}
export async function renderPasswordChangedEmail(props) {
    return render(React.createElement(PasswordChangedEmail, props));
}
export async function renderCaptainRegistrationEmail(props) {
    return render(React.createElement(CaptainRegistrationEmail, props));
}
export async function renderCharterRegistrationEmail(props) {
    return render(React.createElement(CharterRegistrationEmail, props));
}
export async function renderBookingReceivedCaptainEmail(props) {
    return render(React.createElement(BookingReceivedCaptainEmail, props));
}
export async function renderBookingCancelledEmail(props) {
    return render(React.createElement(BookingCancelledEmail, props));
}
export async function renderBookingConfirmedCaptainEmail(props) {
    return render(React.createElement(BookingConfirmedCaptainEmail, props));
}
export async function renderBookingConfirmedAnglerEmail(props) {
    return render(React.createElement(BookingConfirmedAnglerEmail, props));
}
