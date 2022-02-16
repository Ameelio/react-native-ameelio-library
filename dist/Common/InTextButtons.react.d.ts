import React from "react";
import { StyleProp, TextStyle } from "react-native";
interface Block {
    type: "text" | "button";
    text: string;
    onPress?: (() => void) | (() => Promise<void>);
}
interface Props {
    blocks: Block[];
    textStyle?: TextStyle | TextStyle[];
    buttonStyle?: TextStyle | TextStyle[];
    containerStyle?: StyleProp<TextStyle>;
}
declare const InTextButtons: React.FC<Props>;
export default InTextButtons;
