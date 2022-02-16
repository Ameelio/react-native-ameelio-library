/// <reference types="react" />
import { StyleProp, ViewStyle } from "react-native";
interface Props<T> {
    shownOptions: T[];
    moreOptions: T[];
    incompatibleMap?: (key: T) => T[];
    onChange?: (selected: T[]) => void;
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
    style?: StyleProp<ViewStyle>;
    scrollStyle?: StyleProp<ViewStyle>;
    contentStyle?: StyleProp<ViewStyle>;
}
declare function ChipGroup<T>({ shownOptions, moreOptions, onChange, incompatibleMap, selectedColors, unselectedColors, style, scrollStyle, contentStyle, }: Props<T>): JSX.Element;
export default ChipGroup;
