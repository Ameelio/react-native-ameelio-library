import React from "react";
import { StyleProp, ViewStyle, Image } from "react-native";
interface Props {
    children?: string | string[];
    style?: StyleProp<ViewStyle>;
    image?: Image | string;
    selected: boolean;
    iconRight?: boolean;
    square?: boolean;
    onPress?: (() => void) | (() => Promise<void>);
    selectedColors?: {
        fg: string;
        bg: string;
        border: string;
    };
    unselectedColors?: {
        fg: string;
        bg: string;
        border: string;
    };
}
declare const Chip: React.FC<Props>;
export default Chip;
