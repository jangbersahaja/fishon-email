import * as React from "react";
interface BookingCancelledEmailProps {
    captainName: string;
    charterName: string;
    anglerName: string;
    tripName: string;
    tripDate: string;
    cancellationReason?: string;
    bookingUrl: string;
}
export declare function BookingCancelledEmail({ captainName, charterName, anglerName, tripName, tripDate, cancellationReason, bookingUrl, }: BookingCancelledEmailProps): React.JSX.Element;
export declare namespace BookingCancelledEmail {
    var PreviewProps: BookingCancelledEmailProps;
}
export default BookingCancelledEmail;
