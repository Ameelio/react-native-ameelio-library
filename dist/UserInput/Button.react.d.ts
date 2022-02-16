import React from "react";
import { ButtonProps as ElementsButtonProps } from "react-native-elements";
import { StyleProp, ViewStyle } from "react-native";
export interface ButtonProps extends ElementsButtonProps {
    title?: string;
    secondary?: boolean;
    children?: string | string[];
    blocking?: boolean;
    onPress?: (() => void) | (() => Promise<void>);
    nav?: boolean;
    link?: boolean;
    linkSize?: number;
    disabled?: boolean;
    style?: StyleProp<ViewStyle>;
    noGrow?: boolean;
    shadow?: boolean;
    noGrowContainer?: StyleProp<ViewStyle>;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
