import * as React from "react";
interface VerificationCodeEmailProps {
    userName?: string;
    code: string;
    purpose: "registration" | "login" | "forgot_password" | "guest_booking" | "email_verification";
    expiryMinutes?: number;
}
export declare function VerificationCodeEmail({ userName, code, purpose, expiryMinutes, }: VerificationCodeEmailProps): React.JSX.Element;
export declare namespace VerificationCodeEmail {
    var PreviewProps: VerificationCodeEmailProps;
}
export default VerificationCodeEmail;
