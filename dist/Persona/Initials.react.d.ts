import React from "react";
import { StyleProp, ViewStyle } from "react-native";
interface Props {
    size?: number;
    initials: string;
    backgroundColor?: string;
    textColor?: string;
    style?: StyleProp<ViewStyle>;
}
declare const Initials: React.FC<Props>;
export default Initials;
