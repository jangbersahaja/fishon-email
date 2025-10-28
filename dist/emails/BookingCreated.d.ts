import * as React from "react";
interface BookingCreatedEmailProps {
    userName: string;
    charterName: string;
    tripName: string;
    tripDate: string;
    tripDays: number;
    durationHours: number;
    startTime?: string;
    totalPrice: string;
    confirmationUrl: string;
}
export declare function BookingCreatedEmail({ userName, charterName, tripName, tripDate, tripDays, durationHours, startTime, totalPrice, confirmationUrl, }: BookingCreatedEmailProps): React.JSX.Element;
export declare namespace BookingCreatedEmail {
    var PreviewProps: BookingCreatedEmailProps;
}
export default BookingCreatedEmail;
