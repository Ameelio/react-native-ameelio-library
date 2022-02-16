import React from "react";
import { StyleProp, ViewStyle } from "react-native";
declare type CustomIcon = string & {
    dummy?: never;
};
export declare type TopbarTypes = "error" | "warning" | "success" | "info";
export interface TopbarInfo {
    type: TopbarTypes;
    title: string;
    cta: string;
    onPress?: (() => void) | (() => Promise<void>);
    rightIcon?: "arrow" | "X" | CustomIcon;
    rightIconContainerStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
}
declare const Topbar: React.FC<TopbarInfo>;
export default Topbar;
