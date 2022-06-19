import React from "react";
declare type Props = React.PropsWithChildren<{
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>, container: HTMLDivElement) => void;
}>;
declare const Menu: React.FC<Props>;
export default Menu;
