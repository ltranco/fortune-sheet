import React from "react";
declare type ContentEditableProps = Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> & {
    initialContent?: string;
    innerRef?: (e: HTMLDivElement | null) => void;
    onChange?: (html: string) => void;
    onBlur?: (e: React.FocusEvent<HTMLDivElement, Element>) => void;
    autoFocus?: boolean;
};
declare class ContentEditable extends React.Component<ContentEditableProps> {
    lastHtml?: string;
    root: HTMLDivElement | null;
    componentDidMount(): void;
    emitChange(): void;
    render(): JSX.Element;
}
export default ContentEditable;
