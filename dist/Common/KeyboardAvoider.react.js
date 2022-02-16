import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
const KeyboardAvoider = (props) => {
    return (React.createElement(KeyboardAvoidingView, { style: [{ flex: 1 }, props.style], behavior: Platform.OS === "ios" ? "padding" : undefined, keyboardVerticalOffset: Platform.OS === "ios" ? 60 : -200, enabled: true }, props.children));
};
KeyboardAvoider.defaultProps = {
    style: {},
    children: [],
};
export default KeyboardAvoider;
//# sourceMappingURL=KeyboardAvoider.react.js.map