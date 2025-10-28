import * as React from "react";
interface PasswordChangedEmailProps {
    userName: string;
    changeType: "reset" | "changed";
    timestamp: string;
    supportUrl?: string;
}
export declare function PasswordChangedEmail({ userName, changeType, timestamp, supportUrl, }: PasswordChangedEmailProps): React.JSX.Element;
export declare namespace PasswordChangedEmail {
    var PreviewProps: PasswordChangedEmailProps;
}
export default PasswordChangedEmail;
