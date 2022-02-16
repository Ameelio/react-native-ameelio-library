import ArrowForward from "./assets/ArrowForward";
import { GlobalStyles, Spacing } from "../Styles";
import React from "react";
import { StyleSheet, TouchableOpacity, View, } from "react-native";
import * as Colors from "../Brand/Colors";
import Icon from "./Icon.react";
import Caption from "../Typography/Caption.react";
import Body from "../Typography/Body.react";
const Styles = StyleSheet.create({
    background: {
        ...GlobalStyles.rounded,
        ...GlobalStyles.shadow,
        ...GlobalStyles.centered,
        ...Spacing.largePadding,
        ...Spacing.marginVertical,
        flexDirection: "row",
        backgroundColor: Colors.WHITE_BACKGROUND,
    },
    disabledMask: {
        width: "100%",
        height: "100%",
        position: "absolute",
        backgroundColor: "rgba(255, 255, 255, 0.6)",
    },
    iconBackground: {
        width: 36,
        height: 36,
        ...Spacing.largeMarginRight,
    },
    arrowContainer: {
        width: 15,
        height: 30,
    },
});
const IconCard = ({ title, numTitleLines, subtitle, subtitleBold, numSubtitleLines, svg, onPress, style, disabled, }) => {
    return (React.createElement(TouchableOpacity, { style: [Styles.background, style], onPress: onPress, disabled: disabled },
        React.createElement(View, { style: Styles.iconBackground },
            React.createElement(Icon, { svg: svg })),
        React.createElement(View, { style: { flex: 1 } },
            React.createElement(Caption, { size: 1, fontSize: 24, color: "dark", numLines: numTitleLines, adjustSize: !!numTitleLines }, title),
            React.createElement(Body, { size: 2, bold: subtitleBold, numLines: numSubtitleLines, adjustSize: !!numSubtitleLines }, subtitle)),
        React.createElement(View, { style: Styles.arrowContainer },
            React.createElement(Icon, { svg: ArrowForward })),
        disabled && React.createElement(View, { style: Styles.disabledMask })));
};
export default IconCard;
//# sourceMappingURL=IconCard.react.js.map