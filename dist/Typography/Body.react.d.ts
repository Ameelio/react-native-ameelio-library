import React from "react";
import { CustomTextProps } from "./Constants";
export interface BodyProps extends CustomTextProps {
    size?: 1 | 2 | 3;
    bold?: boolean;
}
declare const Body: React.FC<BodyProps>;
export default Body;
