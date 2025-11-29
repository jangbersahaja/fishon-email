import * as React from "react";
interface BookingConfirmedCaptainEmailProps {
    captainName: string;
    charterName: string;
    anglerName: string;
    anglerEmail: string;
    anglerPhone: string;
    tripName: string;
    tripDate: string;
    tripDays: number;
    durationHours: number;
    startTime?: string;
    finalPrice: string;
    bookingUrl: string;
    subtotal?: string;
    platformFee?: string;
    captainEarnings?: string;
    paymentFlow?: "TOKENIZED" | "DIRECT";
}
export declare function BookingConfirmedCaptainEmail({ captainName, charterName, anglerName, anglerEmail, anglerPhone, tripName, tripDate, tripDays, durationHours, startTime, finalPrice, bookingUrl, captainEarnings, paymentFlow, }: BookingConfirmedCaptainEmailProps): React.JSX.Element;
export declare namespace BookingConfirmedCaptainEmail {
    var PreviewProps: BookingConfirmedCaptainEmailProps;
}
export default BookingConfirmedCaptainEmail;
