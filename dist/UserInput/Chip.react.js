import React from "react";
import { StyleSheet, TouchableOpacity, View, } from "react-native";
import * as Colors from "../Brand/Colors";
import { Spacing } from "../Styles";
import Body from "../Typography/Body.react";
import Icon from "../Common/Icon.react";
const Styles = StyleSheet.create({
    timeChipBackground: {
        borderWidth: 2,
        ...Spacing.smallMarginRight,
        ...Spacing.padding,
        justifyContent: "center",
        alignItems: "center",
    },
});
const Chip = ({ children, image, iconRight, square, selected, onPress, selectedColors, unselectedColors, style, }) => {
    const backgroundStyle = {
        backgroundColor: selected ? selectedColors?.bg : unselectedColors?.bg,
        borderColor: selected ? selectedColors?.border : unselectedColors?.border,
    };
    const foregroundStyle = {
        color: selected ? selectedColors?.fg : unselectedColors?.fg,
    };
    if (iconRight) {
        return (React.createElement(TouchableOpacity, { style: [
                Styles.timeChipBackground,
                square ? { borderRadius: 4 } : { borderRadius: 20 },
                backgroundStyle,
                style,
                { flexDirection: "row" },
            ], onPress: onPress },
            React.createElement(Body, { size: 3, style: foregroundStyle }, children),
            image && (React.createElement(View, { style: { flexDirection: "row-reverse", width: 25 } },
                React.createElement(Icon, { width: 20, height: 20, svg: image })))));
    }
    else {
        return (React.createElement(TouchableOpacity, { style: [
                Styles.timeChipBackground,
                square ? { borderRadius: 4 } : { borderRadius: 20 },
                backgroundStyle,
                style,
                { flexDirection: "row-reverse" },
            ], onPress: onPress },
            React.createElement(Body, { size: 3, style: foregroundStyle }, children),
            image && (React.createElement(View, { style: { width: 25 } },
                React.createElement(Icon, { width: 20, height: 20, svg: image })))));
    }
};
Chip.defaultProps = {
    selectedColors: {
        bg: Colors.BLUE_500,
        fg: Colors.GRAY_100,
        border: Colors.BLUE_500,
    },
    unselectedColors: {
        bg: Colors.BLUE_100,
        fg: Colors.GRAY_700,
        border: Colors.BLUE_200,
    },
    square: false,
};
export default Chip;
//# sourceMappingURL=Chip.react.js.map