import * as React from "react";
interface DepositConfirmedAnglerEmailProps {
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
    totalPrice: string;
    depositAmount: string;
    balanceAmount: string;
    depositPercent: number;
    bookingUrl: string;
}
export declare function DepositConfirmedAnglerEmail({ userName, charterName, captainName, captainEmail, captainPhone, tripName, tripDate, tripDays, durationHours, startTime, totalPrice, depositAmount, balanceAmount, depositPercent, bookingUrl, }: DepositConfirmedAnglerEmailProps): React.JSX.Element;
export declare namespace DepositConfirmedAnglerEmail {
    var PreviewProps: DepositConfirmedAnglerEmailProps;
}
export default DepositConfirmedAnglerEmail;
