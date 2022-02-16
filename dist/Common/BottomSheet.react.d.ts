import React from "react";
interface Props {
    isOpen: boolean;
    setIsOpen: (val: boolean) => void;
    children?: JSX.Element | JSX.Element[];
    maxHeight?: number;
    title: string;
}
declare const BottomSheet: React.FC<Props>;
export default BottomSheet;
