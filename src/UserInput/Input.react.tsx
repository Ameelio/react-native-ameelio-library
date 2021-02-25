import React, { MutableRefObject, RefObject, useEffect, useState } from "react";
import {
  StyleSheet,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { Input as ElementsInput, InputProps } from "react-native-elements";
import { GlobalStyles, Spacing } from "../Styles";
import * as Colors from "../Brand/Colors";
import Eye from "./SecureEye";
import Icon from "../Common/Icon.react";

export type BaseInput = ElementsInput;

export const LINE_HEIGHT = 26;

interface Props extends TextInputProps, InputProps {
  inputRef?: RefObject<BaseInput> | MutableRefObject<BaseInput>;
  required?: boolean;
  validation?: (val: string) => boolean;
  onValid?: (() => void) | (() => Promise<void>);
  onInvalid?: (() => void) | (() => Promise<void>);
  secure?: boolean;
}

const Styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.GRAY_200,
    ...Spacing.paddingHorizontal,
    ...GlobalStyles.rounded,
    borderWidth: 2,
    borderColor: "transparent",
  },
  invalidBackground: {
    backgroundColor: Colors.PINK_100,
    borderColor: Colors.PINK_400,
  },
  validBackground: {
    backgroundColor: Colors.GREEN_100,
    borderColor: Colors.GREEN_400,
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
  },
  inputStyle: {
    fontFamily: "Poppins_400Regular",
    fontSize: 16,
    color: Colors.BLACK,
  },
  invalidForeground: {
    color: Colors.GRAY_500,
  },
  validForeground: {
    color: Colors.BLACK,
  },
});

const Input: React.FC<Props> = (props: Props) => {
  const getValid = (text: string): boolean => {
    const requiredCheck = !props.required || !!text.length;
    const dynamicCheck = !props.validation || props.validation(text);
    return requiredCheck && dynamicCheck;
  };

  const getValidityBackground = (): ViewStyle => {
    if (!dirty || focused) return {};
    return valid ? Styles.validBackground : Styles.invalidBackground;
  };

  const getValidityForeground = (): TextStyle => {
    if (!dirty || focused) return {};
    return valid ? Styles.validForeground : Styles.invalidForeground;
  };

  const [value, setValue] = useState("");
  const [valid, setValid] = useState(getValid(""));
  const [dirty, setDirty] = useState(false);
  const [focused, setFocused] = useState(false);
  const [secureText, setSecureText] = useState(!!props.secure);

  useEffect(() => {
    if (props.onChangeText) props.onChangeText(value);
  }, [value]);

  useEffect(() => {
    if (valid && props.onValid) props.onValid();
    if (!valid && props.onInvalid) props.onInvalid();
  }, [valid]);

  const derivedProps: Props = {
    ...props,
    renderErrorMessage: false,
    containerStyle: [
      Styles.background,
      getValidityBackground(),
      props.containerStyle,
    ],
    inputContainerStyle: [
      Styles.inputContainerStyle,
      props.inputContainerStyle,
    ],
    inputStyle: [
      Styles.inputStyle,
      getValidityForeground(),
      { textAlignVertical: props.multiline ? "top" : "center" },
      props.inputStyle,
    ],
    placeholderTextColor: "#9A9A9A",
    onChangeText: (text) => {
      setValue(text);
      setValid(getValid(text));
    },
    onFocus: (e) => {
      setDirty(true);
      setFocused(true);
      if (props.onFocus) props.onFocus(e);
    },
    onBlur: (e) => {
      setFocused(false);
      if (props.onBlur) props.onBlur(e);
    },
  };

  return (
    <ElementsInput
      value={value}
      ref={props.inputRef}
      {...derivedProps}
      rightIcon={
        props.secure ? (
          <TouchableOpacity
            onPress={() => {
              setSecureText((val) => !val);
            }}
          >
            <Icon svg={Eye} width={25} height="100%" />
          </TouchableOpacity>
        ) : undefined
      }
      secureTextEntry={secureText}
    />
  );
};

export default Input;
