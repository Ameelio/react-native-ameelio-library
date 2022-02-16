import { SCREEN_WIDTH } from "../Styles/Spacing";
import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import DynamicX from "./assets/DynamicX";
import Icon from "./Icon.react";
import * as Colors from "../Brand/Colors";
import { Spacing } from "../Styles";
import Body from "../Typography/Body.react";
const Styles = StyleSheet.create({
    background: {
        width: SCREEN_WIDTH - 2 * Spacing.MARGIN,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 4,
        borderWidth: 2,
        ...Spacing.smallMarginVertical,
        ...Spacing.largePaddingLeft
    },
    closePressable: {
        width: 48,
        height: 36,
        justifyContent: "center",
        alignItems: "flex-end",
        ...Spacing.largePaddingRight,
    },
    closeIcon: {
        width: 16,
        height: 16,
    },
});
function mapTypeToColors(type) {
    switch (type) {
        case "error":
            return {
                bg: Colors.RED_100,
                fg: Colors.RED_600,
            };
        case "success":
            return {
                bg: Colors.GREEN_100,
                fg: Colors.GREEN_600,
            };
        case "warning":
        default:
            return {
                bg: Colors.YELLOW_100,
                fg: Colors.YELLOW_500,
            };
    }
}
const Toast = ({ toast }) => {
    const [local, setLocal] = useState(toast);
    useEffect(() => {
        setLocal(toast);
    }, [toast]);
    if (!local)
        return null;
    const colors = mapTypeToColors(local.type);
    return (React.createElement(View, { style: [
            Styles.background,
            { backgroundColor: colors.bg, borderColor: colors.fg },
        ] },
        React.createElement(View, { style: { flex: 1 } },
            React.createElement(Body, { size: 3, style: { color: colors.fg, fontSize: 16, ...Spacing.smallMarginVertical } }, local.text)),
        React.createElement(TouchableOpacity, { style: Styles.closePressable, onPress: () => {
                if (local.onClose)
                    local.onClose();
                setLocal(null);
            } },
            React.createElement(View, { style: Styles.closeIcon },
                React.createElement(Icon, { svg: DynamicX(colors.fg) })))));
};
export default Toast;
//# sourceMappingURL=Toast.react.js.map