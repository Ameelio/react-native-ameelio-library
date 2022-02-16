import React from "react";
import { StyleProp, ViewStyle } from "react-native";
interface Props {
    primaryText?: string;
    onPrimaryPress?: (() => void) | (() => Promise<void>);
    primaryBlocking?: boolean;
    primaryLoading?: boolean;
    primaryDisabled?: boolean;
    secondaryText?: string;
    onSecondaryPress?: (() => void) | (() => Promise<void>);
    secondaryBlocking?: boolean;
    secondaryLoading?: boolean;
    secondaryDisabled?: boolean;
    secondaryLink?: boolean;
    style?: StyleProp<ViewStyle>;
}
declare const ButtonDuo: React.FC<Props>;
export default ButtonDuo;
