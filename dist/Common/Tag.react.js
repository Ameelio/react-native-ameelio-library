import React from "react";
import { StyleSheet, View, } from "react-native";
import * as Colors from "../Brand/Colors";
import { Spacing, GlobalStyles } from "../Styles";
import Body from "../Typography/Body.react";
import Icon from "../Common/Icon.react";
const Styles = StyleSheet.create({
    tagBackground: {
        borderWidth: 1,
        borderRadius: 4,
        ...Spacing.smallPadding,
        justifyContent: "center",
        alignItems: "center",
        ...GlobalStyles.shadow
    },
    primary: {
        backgroundColor: Colors.WHITE_BACKGROUND,
        borderColor: Colors.BLACK_06
    },
    secondary: {
        backgroundColor: Colors.GRAY_100,
        borderColor: Colors.BLACK_06
    }
});
const Tag = ({ text, icon, secondary, style, }) => {
    return (React.createElement(View, { style: [
            Styles.tagBackground,
            style,
            secondary ? Styles.secondary : Styles.primary,
            { flexDirection: "row" },
        ] },
        icon && (React.createElement(View, { style: { alignContent: 'center', top: -2, left: -2 } },
            React.createElement(Icon, { width: 15, height: 15, svg: icon }))),
        React.createElement(Body, { color: secondary ? Colors.GRAY_500 : Colors.RED_400, size: 3 }, text)));
};
Tag.defaultProps = {
    secondary: false,
};
export default Tag;
//# sourceMappingURL=Tag.react.js.map