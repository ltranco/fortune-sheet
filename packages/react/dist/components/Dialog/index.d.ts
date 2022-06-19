import React from "react";
import "./index.css";
declare type Props = {
    type?: "ok" | "yesno";
    onOk?: () => void;
    onCancel?: () => void;
    containerStyle?: React.CSSProperties;
    contentStyle?: React.CSSProperties;
};
declare const Dialog: React.FC<Props>;
export default Dialog;
