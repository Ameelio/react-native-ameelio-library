import React from "react";
import { KeyboardAvoidingView, ViewStyle, Platform } from "react-native";

interface Props {
  style?: ViewStyle | ViewStyle[];
  children?: (JSX.Element | false | null) | (JSX.Element | false | null)[];
}

const KeyboardAvoider: React.FC<Props> = (props: Props) => {
  return (
    <KeyboardAvoidingView
      style={[{ flex: 1 }, props.style]}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 60 : -200}
      enabled
    >
      {props.children}
    </KeyboardAvoidingView>
  );
};

KeyboardAvoider.defaultProps = {
  style: {},
  children: [],
};

export default KeyboardAvoider;
