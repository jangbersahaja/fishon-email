import * as React from "react";
interface BookingReceivedCaptainEmailProps {
    captainName: string;
    charterName: string;
    anglerName: string;
    tripName: string;
    tripDate: string;
    tripDays: number;
    durationHours: number;
    startTime?: string;
    totalPrice: string;
    bookingUrl: string;
}
export declare function BookingReceivedCaptainEmail({ captainName, charterName, anglerName, tripName, tripDate, tripDays, durationHours, startTime, totalPrice, bookingUrl, }: BookingReceivedCaptainEmailProps): React.JSX.Element;
export declare namespace BookingReceivedCaptainEmail {
    var PreviewProps: BookingReceivedCaptainEmailProps;
}
export default BookingReceivedCaptainEmail;
