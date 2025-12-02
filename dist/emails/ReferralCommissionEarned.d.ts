import * as React from "react";
interface ReferralCommissionEarnedEmailProps {
    invitorName: string;
    inviteeName: string;
    tripName: string;
    tripEarnings: string;
    commissionAmount: string;
    totalReferralEarnings: string;
    pendingEarnings: string;
    dashboardUrl: string;
    earnedAt: string;
}
export declare function ReferralCommissionEarnedEmail({ invitorName, inviteeName, tripName, tripEarnings, commissionAmount, totalReferralEarnings, pendingEarnings, dashboardUrl, earnedAt, }: ReferralCommissionEarnedEmailProps): React.JSX.Element;
export declare namespace ReferralCommissionEarnedEmail {
    var PreviewProps: ReferralCommissionEarnedEmailProps;
}
export default ReferralCommissionEarnedEmail;
