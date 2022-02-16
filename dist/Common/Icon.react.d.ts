import React from "react";
import { ViewStyle } from "react-native";
interface Props {
    svg: string;
    width?: number | string;
    height?: number | string;
    borderRadius?: number;
    style?: ViewStyle | ViewStyle[];
}
declare const Icon: React.FC<Props>;
export default Icon;
