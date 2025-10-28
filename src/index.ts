import { render } from "@react-email/components";
import * as React from "react";
import BookingApprovedEmail from "./emails/BookingApproved";
import BookingCreatedEmail from "./emails/BookingCreated";
import BookingRejectedEmail from "./emails/BookingRejected";

// Export all email templates
export { default as BookingApprovedEmail } from "./emails/BookingApproved";
export { default as BookingCreatedEmail } from "./emails/BookingCreated";
export { default as BookingRejectedEmail } from "./emails/BookingRejected";

// Export components for custom emails
export { EmailButton } from "./components/EmailButton";
export { EmailHeader } from "./components/EmailHeader";
export { EmailLayout } from "./components/EmailLayout";
export { InfoBox } from "./components/InfoBox";

// Email rendering functions
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
