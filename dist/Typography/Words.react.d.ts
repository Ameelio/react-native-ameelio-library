import React from "react";
import { CustomTextProps } from "./Constants";
export interface WordsProps extends CustomTextProps {
    weight: "regular" | "medium" | "semibold" | "bold";
    italic?: boolean;
}
declare const Words: React.FC<WordsProps>;
export default Words;
