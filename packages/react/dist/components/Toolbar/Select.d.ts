import React from "react";
declare const Select: React.FC;
declare type OptionProps = {
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    iconId?: string;
};
declare const Option: React.FC<React.PropsWithChildren<OptionProps>>;
export { Option };
export default Select;
