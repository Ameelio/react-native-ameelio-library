import React from "react";
import { StyleProp, ViewStyle } from "react-native";
interface Props {
    title: string;
    numTitleLines?: number;
    subtitle: string;
    subtitleBold?: boolean;
    numSubtitleLines?: number;
    svg: string;
    onPress?: (() => void) | (() => Promise<void>);
    style?: StyleProp<ViewStyle>;
    disabled?: boolean;
}
declare const IconCard: React.FC<Props>;
export default IconCard;
