import React from "react";
import { ViewStyle } from "react-native";
export interface Props {
    style?: ViewStyle | ViewStyle[];
    items: string[];
    placeholder?: string;
    initialValue?: string;
    onValueChange?: (v: string) => void;
    disabled?: boolean;
    required?: boolean;
}
declare const Picker: React.FC<Props>;
export default Picker;
