import React from "react";
import { TypographyColors } from "../Typography/Constants";
interface TextButtonBlock {
    text: string;
    color?: TypographyColors;
    onPress: (() => void) | (() => Promise<void>);
}
interface Props {
    blocks: TextButtonBlock[];
    title: string;
    isOpen: boolean;
    setIsOpen: (val: boolean) => void;
    maxHeight?: number;
    persistTaps?: boolean;
}
declare const TextButtonSheet: React.FC<Props>;
export default TextButtonSheet;
