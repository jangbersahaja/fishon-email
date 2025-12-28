import * as React from "react";
interface TripCompletedDepositEmailProps {
    userName: string;
    charterName: string;
    captainName: string;
    tripName: string;
    tripDate: string;
    tripDays: number;
    totalPrice: string;
    depositAmount: string;
    balanceAmount: string;
    balancePaidMethod: string;
    reviewUrl: string;
    bookingUrl: string;
}
export declare function TripCompletedDepositEmail({ userName, charterName, captainName, tripName, tripDate, tripDays, totalPrice, depositAmount, balanceAmount, balancePaidMethod, reviewUrl, bookingUrl, }: TripCompletedDepositEmailProps): React.JSX.Element;
export declare namespace TripCompletedDepositEmail {
    var PreviewProps: TripCompletedDepositEmailProps;
}
export default TripCompletedDepositEmail;
