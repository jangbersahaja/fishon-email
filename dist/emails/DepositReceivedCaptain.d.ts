import * as React from "react";
interface DepositReceivedCaptainEmailProps {
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
    totalPrice: string;
    depositAmount: string;
    balanceAmount: string;
    depositPercent: number;
    platformFee: string;
    captainEarnings: string;
    bookingUrl: string;
}
export declare function DepositReceivedCaptainEmail({ captainName, charterName, anglerName, anglerEmail, anglerPhone, tripName, tripDate, tripDays, durationHours, startTime, totalPrice, depositAmount, balanceAmount, depositPercent, platformFee, captainEarnings, bookingUrl, }: DepositReceivedCaptainEmailProps): React.JSX.Element;
export declare namespace DepositReceivedCaptainEmail {
    var PreviewProps: DepositReceivedCaptainEmailProps;
}
export default DepositReceivedCaptainEmail;
