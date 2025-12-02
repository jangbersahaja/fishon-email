import * as React from "react";
interface ReferralCommissionPaidEmailProps {
    invitorName: string;
    commissionAmount: string;
    bankAccountLast4: string;
    bankName: string;
    payoutDate: string;
    payoutReference: string;
    totalPaidToDate: string;
    dashboardUrl: string;
}
export declare function ReferralCommissionPaidEmail({ invitorName, commissionAmount, bankAccountLast4, bankName, payoutDate, payoutReference, totalPaidToDate, dashboardUrl, }: ReferralCommissionPaidEmailProps): React.JSX.Element;
export declare namespace ReferralCommissionPaidEmail {
    var PreviewProps: ReferralCommissionPaidEmailProps;
}
export default ReferralCommissionPaidEmail;
