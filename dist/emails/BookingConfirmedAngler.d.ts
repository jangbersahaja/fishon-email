import * as React from "react";
interface BookingConfirmedAnglerEmailProps {
    userName: string;
    charterName: string;
    captainName: string;
    captainEmail: string;
    captainPhone: string;
    tripName: string;
    tripDate: string;
    tripDays: number;
    durationHours: number;
    startTime?: string;
    finalPrice: string;
    paymentMethod?: string;
    bookingUrl: string;
}
export declare function BookingConfirmedAnglerEmail({ userName, charterName, captainName, captainEmail, captainPhone, tripName, tripDate, tripDays, durationHours, startTime, finalPrice, paymentMethod, bookingUrl, }: BookingConfirmedAnglerEmailProps): React.JSX.Element;
export declare namespace BookingConfirmedAnglerEmail {
    var PreviewProps: BookingConfirmedAnglerEmailProps;
}
export default BookingConfirmedAnglerEmail;
