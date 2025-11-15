import * as React from "react";
interface BookingRejectedEmailProps {
    userName: string;
    charterName: string;
    reason?: string;
    searchUrl: string;
    paymentFlow?: "TOKENIZED" | "DIRECT";
    refundAmount?: string;
}
export declare function BookingRejectedEmail({ userName, charterName, reason, searchUrl, paymentFlow, refundAmount, }: BookingRejectedEmailProps): React.JSX.Element;
export declare namespace BookingRejectedEmail {
    var PreviewProps: BookingRejectedEmailProps;
}
export default BookingRejectedEmail;
