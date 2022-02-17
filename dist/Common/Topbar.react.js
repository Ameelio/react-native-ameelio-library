import { Spacing } from "../Styles";
import React from "react";
import { StyleSheet, TouchableOpacity, View, } from "react-native";
import * as Colors from "../Brand/Colors";
import Body from "../Typography/Body.react";
import DynamicArrowForward from "./assets/DynamicArrowForward";
import DynamicX from "./assets/DynamicX";
import Icon from "./Icon.react";
const mapTypeToColors = {
    error: {
        bg: Colors.RED_100,
        fg: Colors.RED_600,
    },
    warning: {
        bg: Colors.YELLOW_100,
        fg: Colors.YELLOW_600,
    },
    success: {
        bg: Colors.GREEN_100,
        fg: Colors.GREEN_600,
    },
    info: {
        bg: Colors.BLUE_500,
        fg: Colors.WHITE,
    },
};
const Styles = StyleSheet.create({
    background: {
        position: "absolute",
        width: "100%",
        height: 70,
        flexDirection: "row",
        ...Spacing.paddingBottom,
        ...Spacing.largePaddingHorizontal,
        ...Spacing.largePaddingTop,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    iconContainer: {
        alignSelf: "flex-end",
        ...Spacing.marginBottom,
    },
    arrowIconContainer: {
        width: 10,
        height: 20,
    },
    XIconContaner: {
        width: 15,
        height: 15,
    },
});
const Topbar = ({ type, title, cta, onPress, rightIcon, rightIconContainerStyle, style, }) => {
    const colors = mapTypeToColors[type];
    let icon = rightIcon || "arrow";
    switch (icon) {
        case "arrow":
            icon = DynamicArrowForward(colors.fg);
            break;
        case "X":
            icon = DynamicX(colors.fg);
            break;
    }
    return (React.createElement(TouchableOpacity, { style: [Styles.background, { backgroundColor: colors.bg }, style], onPress: onPress },
        React.createElement(View, { style: Styles.textContainer },
            React.createElement(Body, { size: 2, color: colors.fg }, title),
            React.createElement(Body, { size: 2, color: colors.fg, bold: true }, cta)),
        React.createElement(View, { style: [
                Styles.iconContainer,
                !rightIcon || rightIcon === "arrow" ? Styles.arrowIconContainer : {},
                rightIcon === "X" ? Styles.XIconContaner : {},
                rightIconContainerStyle,
            ] },
            React.createElement(Icon, { svg: icon }))));
};
export default Topbar;
//# sourceMappingURL=Topbar.react.js.map