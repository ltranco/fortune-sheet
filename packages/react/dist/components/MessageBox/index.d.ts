import React from "react";
declare type Props = {
    type: "ok" | "yesno";
    onOk?: () => void;
    onCancel?: () => void;
};
declare const MessageBox: React.FC<Props>;
export default MessageBox;
