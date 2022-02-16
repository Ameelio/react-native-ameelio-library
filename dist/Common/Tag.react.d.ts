import React from "react";
import { StyleProp, ViewStyle } from "react-native";
interface Props {
    text: string;
    style?: StyleProp<ViewStyle>;
    icon?: string;
    secondary?: boolean;
}
declare const Tag: React.FC<Props>;
export default Tag;
