import React from "react";
import { Text } from "react-native";
import { calculateColor, SCALE_CONSTANT } from "./Constants";
const Caption = ({ size, style, children, adjustSize, numLines, align, fontSize, color, bold, }) => {
    let finalSize = fontSize;
    if (!finalSize)
        switch (size) {
            case 1:
                finalSize = 13 * SCALE_CONSTANT;
                break;
            case 2:
                finalSize = 12 * SCALE_CONSTANT;
                break;
            case 3:
            default:
                finalSize = 11 * SCALE_CONSTANT;
        }
    const fontFamily = (bold === undefined && size !== 3) || bold
        ? "Inter_400Regular"
        : "Inter_500Medium";
    let calculatedColor = calculateColor(color || "dark");
    return (React.createElement(Text, { style: [
            {
                fontSize: finalSize,
                fontFamily,
                textAlign: align,
                color: calculatedColor,
            },
            style,
        ], adjustsFontSizeToFit: adjustSize, numberOfLines: numLines }, children));
};
export default Caption;
//# sourceMappingURL=Caption.react.js.map