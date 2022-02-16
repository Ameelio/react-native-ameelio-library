import React from "react";
export declare type ToastTypes = "error" | "success" | "warning";
export interface ToastInfo {
    type: ToastTypes;
    text: string;
    onClose?: (() => void) | (() => Promise<void>);
}
interface Props {
    toast: ToastInfo | null;
}
declare const Toast: React.FC<Props>;
export default Toast;
