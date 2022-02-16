import React from "react";
import { StyleProp, ViewStyle } from "react-native";
interface Props {
    type: "stars" | "emotions";
    onSelect: (num: number | undefined) => void;
    style?: StyleProp<ViewStyle>;
}
declare const Rating: React.FC<Props>;
export default Rating;
