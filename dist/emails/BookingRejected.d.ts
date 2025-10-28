import * as React from "react";
interface BookingRejectedEmailProps {
    userName: string;
    charterName: string;
    reason?: string;
    searchUrl: string;
}
export declare function BookingRejectedEmail({ userName, charterName, reason, searchUrl, }: BookingRejectedEmailProps): React.JSX.Element;
export declare namespace BookingRejectedEmail {
    var PreviewProps: BookingRejectedEmailProps;
}
export default BookingRejectedEmail;
