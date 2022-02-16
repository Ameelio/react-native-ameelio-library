import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Body from "../Typography/Body.react";
import * as Colors from "../Brand/Colors";
const InTextButtons = ({ blocks, textStyle, buttonStyle, containerStyle, }) => {
    const calculatedBlocks = blocks
        .map((block) => {
        if (block.type === "button")
            return block;
        const words = block.text.split(" ");
        return words.map((word) => {
            const brokenBlock = {
                type: "text",
                text: word,
            };
            return brokenBlock;
        });
    })
        .flat();
    return (React.createElement(Text, { style: containerStyle }, calculatedBlocks.map((block, index) => {
        return (React.createElement(TouchableOpacity, { disabled: block.type === "text", onPress: () => {
                if (block.onPress)
                    block.onPress();
            }, key: block.text + index.toString() },
            React.createElement(Body, { style: block.type === "text" ? textStyle || {} : buttonStyle || {}, bold: block.type === "button", numLines: 1, adjustSize: true },
                block.text,
                " ")));
    })));
};
InTextButtons.defaultProps = {
    buttonStyle: {
        textDecorationLine: "underline",
        color: Colors.BLUE_500,
        fontSize: 14,
    },
    textStyle: {
        fontSize: 14,
    },
};
export default InTextButtons;
//# sourceMappingURL=InTextButtons.react.js.map