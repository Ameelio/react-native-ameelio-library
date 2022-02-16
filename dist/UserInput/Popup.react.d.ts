import React from "react";
import { ButtonProps } from "./Button.react";
interface PopupCommon {
    title: string;
    titleEmoji?: string;
    numTitleLines?: number;
    svg?: string;
    buttons: ButtonProps[];
    dynamic?: boolean;
}
interface PopupBasic extends PopupCommon {
    message?: string;
    dynamic?: false;
}
interface PopupDynamic extends PopupCommon {
    content?: JSX.Element;
    dynamic: true;
}
export declare type PopupInfo = PopupBasic | PopupDynamic;
interface Props {
    popup: PopupInfo | null;
    onDismiss?: () => void;
    onResolve?: () => void;
    maxWidth?: number;
    maxHeight?: number;
}
declare const Popup: React.FC<Props>;
export default Popup;
