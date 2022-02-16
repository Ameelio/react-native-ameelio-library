import React, { MutableRefObject, RefObject } from "react";
import { StyleProp, TextInput, TextInputProps, ViewStyle } from "react-native";
import { InputProps } from "react-native-elements";
export declare const LINE_HEIGHT = 26;
export declare const INPUT_HEIGHT = 51;
interface Props extends TextInputProps, InputProps {
    inputRef?: RefObject<TextInput> | MutableRefObject<TextInput>;
    required?: boolean;
    mustMatch?: string;
    validation?: (val: string) => boolean;
    onValid?: (() => void) | (() => Promise<void>);
    onInvalid?: (() => void) | (() => Promise<void>);
    secure?: boolean;
    initialValue?: string;
    dirtyOnInitialValue?: boolean;
    disabled?: boolean;
    containerStyle?: StyleProp<ViewStyle>;
    hideValidityFeedback?: boolean;
}
declare const Input: React.FC<Props>;
export default Input;
