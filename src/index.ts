import { render } from "@react-email/components";
import * as React from "react";
import BookingApprovedEmail from "./emails/BookingApproved";
import BookingCreatedEmail from "./emails/BookingCreated";
import BookingRejectedEmail from "./emails/BookingRejected";
import CaptainRegistrationEmail from "./emails/CaptainRegistration";
import PasswordChangedEmail from "./emails/PasswordChanged";
import VerificationCodeEmail from "./emails/VerificationCode";
import WelcomeEmail from "./emails/Welcome";

// Export all email templates
export { default as BookingApprovedEmail } from "./emails/BookingApproved";
export { default as BookingCreatedEmail } from "./emails/BookingCreated";
export { default as BookingRejectedEmail } from "./emails/BookingRejected";
export { default as CaptainRegistrationEmail } from "./emails/CaptainRegistration";
export { default as PasswordChangedEmail } from "./emails/PasswordChanged";
export { default as VerificationCodeEmail } from "./emails/VerificationCode";
export { default as WelcomeEmail } from "./emails/Welcome";

// Export components for custom emails
export { EmailButton } from "./components/EmailButton";
export { EmailHeader } from "./components/EmailHeader";
export { EmailLayout } from "./components/EmailLayout";
export { InfoBox } from "./components/InfoBox";

// Email rendering functions - Booking emails
export async function renderBookingCreatedEmail(
  props: React.ComponentProps<typeof BookingCreatedEmail>
): Promise<string> {
  return render(React.createElement(BookingCreatedEmail, props));
}

export async function renderBookingApprovedEmail(
  props: React.ComponentProps<typeof BookingApprovedEmail>
): Promise<string> {
  return render(React.createElement(BookingApprovedEmail, props));
}

export async function renderBookingRejectedEmail(
  props: React.ComponentProps<typeof BookingRejectedEmail>
): Promise<string> {
  return render(React.createElement(BookingRejectedEmail, props));
}

// Email rendering functions - Auth & Verification
export async function renderVerificationCodeEmail(
  props: React.ComponentProps<typeof VerificationCodeEmail>
): Promise<string> {
  return render(React.createElement(VerificationCodeEmail, props));
}

export async function renderWelcomeEmail(
  props: React.ComponentProps<typeof WelcomeEmail>
): Promise<string> {
  return render(React.createElement(WelcomeEmail, props));
}

export async function renderPasswordChangedEmail(
  props: React.ComponentProps<typeof PasswordChangedEmail>
): Promise<string> {
  return render(React.createElement(PasswordChangedEmail, props));
}

export async function renderCaptainRegistrationEmail(
  props: React.ComponentProps<typeof CaptainRegistrationEmail>
): Promise<string> {
  return render(React.createElement(CaptainRegistrationEmail, props));
}
