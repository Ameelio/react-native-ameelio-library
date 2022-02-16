import QuestionMark from "./assets/QuestionMark";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Tooltip as TooltipElement } from "react-native-elements";
import { GlobalStyles, Spacing } from "../Styles";
import Icon from "../Common/Icon.react";
import * as Colors from "../Brand/Colors";
import Body from "../Typography/Body.react";
const Styles = StyleSheet.create({
    background: {
        overflow: "hidden",
        ...GlobalStyles.shadow,
    },
});
const Tooltip = ({ children, text, width, height, numLines, }) => {
    const center = children || (React.createElement(View, { style: Spacing.smallPadding },
        React.createElement(Icon, { svg: QuestionMark, width: 18, height: 18 })));
    return (React.createElement(TooltipElement, { popover: React.createElement(Body, { numLines: numLines, adjustSize: !!numLines, color: "dark" }, text), withPointer: true, withOverlay: false, skipAndroidStatusBar: true, backgroundColor: Colors.GRAY_100, containerStyle: Styles.background, pointerColor: Colors.GRAY_100, height: height, width: width, toggleOnPress: true, toggleAction: "onPress", onOpen: () => null, onClose: () => null, overlayColor: "transparent", highlightColor: "transparent", ModalComponent: undefined, closeOnlyOnBackdropPress: false }, center));
};
export default Tooltip;
//# sourceMappingURL=Tooltip.react.js.map