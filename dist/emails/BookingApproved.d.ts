import * as React from "react";
interface BookingApprovedEmailProps {
    userName: string;
    charterName: string;
    tripDate: string;
    paymentUrl: string;
    confirmationUrl: string;
}
export declare function BookingApprovedEmail({ userName, charterName, tripDate, paymentUrl, confirmationUrl, }: BookingApprovedEmailProps): React.JSX.Element;
export declare namespace BookingApprovedEmail {
    var PreviewProps: BookingApprovedEmailProps;
}
export default BookingApprovedEmail;
