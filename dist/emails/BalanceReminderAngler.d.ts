import * as React from "react";
interface BalanceReminderAnglerEmailProps {
    userName: string;
    charterName: string;
    captainName: string;
    captainPhone: string;
    tripName: string;
    tripDate: string;
    tripDays: number;
    startTime?: string;
    balanceAmount: string;
    meetingPoint?: string;
    bookingUrl: string;
}
export declare function BalanceReminderAnglerEmail({ userName, charterName, captainName, captainPhone, tripName, tripDate, tripDays, startTime, balanceAmount, meetingPoint, bookingUrl, }: BalanceReminderAnglerEmailProps): React.JSX.Element;
export declare namespace BalanceReminderAnglerEmail {
    var PreviewProps: BalanceReminderAnglerEmailProps;
}
export default BalanceReminderAnglerEmail;
