import BottomSheet from "../Common/BottomSheet.react";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Body from "../Typography/Body.react";
import { Colors, Spacing } from "../Styles";
const Styles = StyleSheet.create({
    textBlockBackground: {
        width: "100%",
        justifyContent: "center",
        borderTopWidth: 1,
        borderTopColor: "transparent",
    },
    pressBackground: {
        width: "100%",
        ...Spacing.largePaddingHorizontal,
        ...Spacing.smallPaddingVertical,
    },
});
function renderBlock(block, index, setIsOpen) {
    return (React.createElement(View, { key: block.text + index.toString(), style: [
            Styles.textBlockBackground,
            index > 0 ? { borderTopColor: Colors.GRAY_200 } : {},
        ] },
        React.createElement(TouchableOpacity, { onPress: setIsOpen
                ? () => {
                    setIsOpen(false);
                    block.onPress();
                }
                : block.onPress, style: Styles.pressBackground },
            React.createElement(Body, { size: 2, color: block.color || "secondary" }, block.text))));
}
const TextButtonSheet = ({ blocks, title, isOpen, setIsOpen, maxHeight, persistTaps, }) => {
    return (React.createElement(BottomSheet, { title: title, isOpen: isOpen, setIsOpen: setIsOpen, maxHeight: maxHeight }, blocks.map((block, index) => renderBlock(block, index, persistTaps ? undefined : setIsOpen))));
};
export default TextButtonSheet;
//# sourceMappingURL=TextButtonSheet.react.js.map