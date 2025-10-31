import * as React from "react";
interface BookingPaymentReminderEmailProps {
    userName: string;
    charterName: string;
    tripDate: string;
    hoursRemaining: number;
    paymentUrl: string;
    confirmationUrl: string;
}
export declare function BookingPaymentReminderEmail({ userName, charterName, tripDate, hoursRemaining, paymentUrl, confirmationUrl, }: BookingPaymentReminderEmailProps): React.JSX.Element;
export declare namespace BookingPaymentReminderEmail {
    var PreviewProps: BookingPaymentReminderEmailProps;
}
export default BookingPaymentReminderEmail;
