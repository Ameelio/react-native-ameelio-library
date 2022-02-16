import React from "react";
interface Props {
    children?: JSX.Element | JSX.Element[];
    text?: string;
    width: number;
    height: number;
    numLines?: number;
}
declare const Tooltip: React.FC<Props>;
export default Tooltip;
