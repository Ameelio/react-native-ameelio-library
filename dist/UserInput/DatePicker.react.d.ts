import React from "react";
import { ViewStyle } from "react-native";
import { StyleProp } from "react-native";
interface Props {
    minDate: Date;
    maxDate: Date;
    disabledDates?: Date[];
    crossedDates?: Date[];
    onChange?: (date: Date | null) => void;
    style?: StyleProp<ViewStyle>;
    showKey?: boolean;
    availableKeyText?: string;
    crossedKeyText?: string;
    crossedKeyToolText?: string;
    width?: number;
}
declare const DatePicker: React.FC<Props>;
export default DatePicker;
