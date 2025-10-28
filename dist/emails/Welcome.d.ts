import * as React from "react";
interface WelcomeEmailProps {
    userName: string;
    userType: "angler" | "captain";
    loginUrl: string;
}
export declare function WelcomeEmail({ userName, userType, loginUrl, }: WelcomeEmailProps): React.JSX.Element;
export declare namespace WelcomeEmail {
    var PreviewProps: WelcomeEmailProps;
}
export default WelcomeEmail;
