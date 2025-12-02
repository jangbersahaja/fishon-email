import * as React from "react";
interface ReferralSignupEmailProps {
    invitorName: string;
    inviteeName: string;
    registeredAt: string;
    dashboardUrl: string;
    totalReferrals: number;
}
export declare function ReferralSignupEmail({ invitorName, inviteeName, registeredAt, dashboardUrl, totalReferrals, }: ReferralSignupEmailProps): React.JSX.Element;
export declare namespace ReferralSignupEmail {
    var PreviewProps: ReferralSignupEmailProps;
}
export default ReferralSignupEmail;
