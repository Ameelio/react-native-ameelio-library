import React from "react";
import { Text } from "react-native";
import { calculateColor, SCALE_CONSTANT, } from "./Constants";
const Body = ({ size, style, children, adjustSize, numLines, align, fontSize, color, bold, }) => {
    let finalSize = fontSize;
    if (!finalSize) {
        switch (size) {
            case 1:
                finalSize = 16 * SCALE_CONSTANT;
                break;
            case 2:
                finalSize = 14 * SCALE_CONSTANT;
                break;
            case 3:
            default:
                finalSize = 12 * SCALE_CONSTANT;
                break;
        }
    }
    // const fontFamily = bold ? "Inter_600SemiBold" : "Inter_400Regular";
    let calculatedColor = calculateColor(color || "secondary");
    return (React.createElement(Text, { style: [
            {
                fontSize: finalSize,
                // fontFamily,
                textAlign: align,
                color: calculatedColor,
            },
            style,
        ], adjustsFontSizeToFit: adjustSize, numberOfLines: numLines }, children));
};
export default Body;
//# sourceMappingURL=Body.react.js.map