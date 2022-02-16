import React from "react";
import { View } from "react-native";
import { Colors, Spacing } from "../Styles";
import Header from "../Typography/Header.react";
const DEFAULT_SIZE = 40;
const Initials = ({ size, initials, backgroundColor, textColor, style, }) => {
    const backgroundStyle = {
        justifyContent: "center",
        alignItems: "center",
        width: size || DEFAULT_SIZE,
        height: size || DEFAULT_SIZE,
        borderRadius: (size || DEFAULT_SIZE) / 2,
        backgroundColor: backgroundColor || Colors.BLUE_700,
    };
    return (React.createElement(View, { style: [backgroundStyle, style] },
        React.createElement(Header, { fontSize: 100, numLines: 1, adjustSize: true, color: textColor || "white", align: "center", style: Spacing.padding }, initials.toUpperCase())));
};
export default Initials;
//# sourceMappingURL=Initials.react.js.map