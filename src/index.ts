import { render } from "@react-email/components";
import * as React from "react";
import BalanceReminderAnglerEmail from "./emails/BalanceReminderAngler";
import BookingApprovedEmail from "./emails/BookingApproved";
import BookingCancelledEmail from "./emails/BookingCancelled";
import BookingConfirmedAnglerEmail from "./emails/BookingConfirmedAngler";
import BookingConfirmedCaptainEmail from "./emails/BookingConfirmedCaptain";
import BookingCreatedEmail from "./emails/BookingCreated";
import BookingReceivedCaptainEmail from "./emails/BookingReceivedCaptain";
import BookingRejectedEmail from "./emails/BookingRejected";
import CaptainRegistrationEmail from "./emails/CaptainRegistration";
import CharterRegistrationEmail from "./emails/CharterRegistration";
import DepositConfirmedAnglerEmail from "./emails/DepositConfirmedAngler";
import DepositReceivedCaptainEmail from "./emails/DepositReceivedCaptain";
import PasswordChangedEmail from "./emails/PasswordChanged";
import ReferralCommissionEarnedEmail from "./emails/ReferralCommissionEarned";
import ReferralCommissionPaidEmail from "./emails/ReferralCommissionPaid";
import ReferralSignupEmail from "./emails/ReferralSignup";
import TripCompletedDepositEmail from "./emails/TripCompletedDeposit";
import VerificationCodeEmail from "./emails/VerificationCode";
import WelcomeEmail from "./emails/Welcome";

// Export all email templates
export { default as BalanceReminderAnglerEmail } from "./emails/BalanceReminderAngler";
export { default as BookingApprovedEmail } from "./emails/BookingApproved";
export { default as BookingCancelledEmail } from "./emails/BookingCancelled";
export { default as BookingConfirmedAnglerEmail } from "./emails/BookingConfirmedAngler";
export { default as BookingConfirmedCaptainEmail } from "./emails/BookingConfirmedCaptain";
export { default as BookingCreatedEmail } from "./emails/BookingCreated";
export { default as BookingReceivedCaptainEmail } from "./emails/BookingReceivedCaptain";
export { default as BookingRejectedEmail } from "./emails/BookingRejected";
export { default as CaptainRegistrationEmail } from "./emails/CaptainRegistration";
export { default as CharterRegistrationEmail } from "./emails/CharterRegistration";
export { default as DepositConfirmedAnglerEmail } from "./emails/DepositConfirmedAngler";
export { default as DepositReceivedCaptainEmail } from "./emails/DepositReceivedCaptain";
export { default as PasswordChangedEmail } from "./emails/PasswordChanged";
export { default as ReferralCommissionEarnedEmail } from "./emails/ReferralCommissionEarned";
export { default as ReferralCommissionPaidEmail } from "./emails/ReferralCommissionPaid";
export { default as ReferralSignupEmail } from "./emails/ReferralSignup";
export { default as TripCompletedDepositEmail } from "./emails/TripCompletedDeposit";
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

export async function renderCharterRegistrationEmail(
  props: React.ComponentProps<typeof CharterRegistrationEmail>
): Promise<string> {
  return render(React.createElement(CharterRegistrationEmail, props));
}

export async function renderBookingReceivedCaptainEmail(
  props: React.ComponentProps<typeof BookingReceivedCaptainEmail>
): Promise<string> {
  return render(React.createElement(BookingReceivedCaptainEmail, props));
}

export async function renderBookingCancelledEmail(
  props: React.ComponentProps<typeof BookingCancelledEmail>
): Promise<string> {
  return render(React.createElement(BookingCancelledEmail, props));
}

export async function renderBookingConfirmedCaptainEmail(
  props: React.ComponentProps<typeof BookingConfirmedCaptainEmail>
): Promise<string> {
  return render(React.createElement(BookingConfirmedCaptainEmail, props));
}

export async function renderBookingConfirmedAnglerEmail(
  props: React.ComponentProps<typeof BookingConfirmedAnglerEmail>
): Promise<string> {
  return render(React.createElement(BookingConfirmedAnglerEmail, props));
}

// Email rendering functions - Referral Programme
export async function renderReferralSignupEmail(
  props: React.ComponentProps<typeof ReferralSignupEmail>
): Promise<string> {
  return render(React.createElement(ReferralSignupEmail, props));
}

export async function renderReferralCommissionEarnedEmail(
  props: React.ComponentProps<typeof ReferralCommissionEarnedEmail>
): Promise<string> {
  return render(React.createElement(ReferralCommissionEarnedEmail, props));
}

export async function renderReferralCommissionPaidEmail(
  props: React.ComponentProps<typeof ReferralCommissionPaidEmail>
): Promise<string> {
  return render(React.createElement(ReferralCommissionPaidEmail, props));
}

// Email rendering functions - Deposit Flow
export async function renderDepositConfirmedAnglerEmail(
  props: React.ComponentProps<typeof DepositConfirmedAnglerEmail>
): Promise<string> {
  return render(React.createElement(DepositConfirmedAnglerEmail, props));
}

export async function renderDepositReceivedCaptainEmail(
  props: React.ComponentProps<typeof DepositReceivedCaptainEmail>
): Promise<string> {
  return render(React.createElement(DepositReceivedCaptainEmail, props));
}

export async function renderBalanceReminderAnglerEmail(
  props: React.ComponentProps<typeof BalanceReminderAnglerEmail>
): Promise<string> {
  return render(React.createElement(BalanceReminderAnglerEmail, props));
}

export async function renderTripCompletedDepositEmail(
  props: React.ComponentProps<typeof TripCompletedDepositEmail>
): Promise<string> {
  return render(React.createElement(TripCompletedDepositEmail, props));
}
