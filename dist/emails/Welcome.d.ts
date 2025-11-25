import * as React from "react";
interface WelcomeEmailProps {
    userName: string;
    userType: "angler" | "captain";
    loginUrl: string;
    promoCode?: string;
}
export declare function WelcomeEmail({ userName, userType, loginUrl, promoCode, }: WelcomeEmailProps): React.JSX.Element;
export declare namespace WelcomeEmail {
    var PreviewProps: WelcomeEmailProps;
}
export default WelcomeEmail;
export type { WelcomeEmailProps };
