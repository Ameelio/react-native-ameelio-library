import React from "react";
import { ViewStyle } from "react-native";
interface Props {
    style?: ViewStyle | ViewStyle[];
    children?: (JSX.Element | false | null) | (JSX.Element | false | null)[];
}
declare const KeyboardAvoider: React.FC<Props>;
export default KeyboardAvoider;
