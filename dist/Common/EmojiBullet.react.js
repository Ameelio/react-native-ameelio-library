import React from "react";
import { StyleSheet, View } from "react-native";
import Emoji from "react-native-emoji";
import Body from "../Typography/Body.react";
import { Spacing } from "../Styles";
const Styles = StyleSheet.create({
    rowContainer: {
        flexDirection: "row",
        ...Spacing.smallPaddingVertical,
        alignItems: "center",
        width: "100%",
    },
});
const DEFAULT_TEXT_PROPS = {
    size: 1,
};
const EmojiBullet = ({ emoji, text, textProps }) => {
    const calculatedProps = {
        ...DEFAULT_TEXT_PROPS,
        ...textProps,
    };
    return (React.createElement(View, { style: Styles.rowContainer },
        React.createElement(Emoji, { name: emoji, style: { fontSize: 20, ...Spacing.smallPaddingRight } }),
        React.createElement(View, { style: { flex: 1 } },
            React.createElement(Body, { ...calculatedProps }, text))));
};
export default EmojiBullet;
//# sourceMappingURL=EmojiBullet.react.js.map