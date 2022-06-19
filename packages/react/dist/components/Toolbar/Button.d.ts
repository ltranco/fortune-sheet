import React from "react";
declare type Props = {
    tooltip: string;
    iconId: string;
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    disabled?: boolean;
    selected?: boolean;
};
declare const Button: React.FC<Props>;
export default Button;
