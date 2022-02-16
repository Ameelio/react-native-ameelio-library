import React from "react";
import { CustomTextProps } from "./Constants";
export interface CaptionProps extends CustomTextProps {
    size?: 1 | 2 | 3;
    bold?: boolean;
}
declare const Caption: React.FC<CaptionProps>;
export default Caption;
