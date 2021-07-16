import React, { MutableRefObject, RefObject, useEffect, useState } from "react";
import {
  StyleProp,
  StyleSheet,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { Input as ElementsInput, InputProps } from "react-native-elements";
import { GlobalStyles, Spacing } from "../Styles";
import * as Colors from "../Brand/Colors";
import Eye from "./assets/SecureEye";
import Icon from "../Common/Icon.react";
import Body from "../Typography/Body.react";

export type BaseInput = ElementsInput;

export const LINE_HEIGHT = 26;
export const INPUT_HEIGHT = 51;

interface Props extends TextInputProps, InputProps {
  inputRef?: RefObject<BaseInput> | MutableRefObject<BaseInput>;
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

const Styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.GRAY_100,
    ...Spacing.paddingHorizontal,
    ...Spacing.smallMarginBottom,
    ...GlobalStyles.rounded,
    borderWidth: 2,
    borderColor: "transparent",
  },
  invalidBackground: {
    backgroundColor: Colors.RED_100,
    borderColor: Colors.RED_400,
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
    color: Colors.GRAY_700,
  },
  invalidForeground: {
    color: Colors.GRAY_500,
  },
  validForeground: {
    color: Colors.GRAY_700,
  },
  errorMessageContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    ...Spacing.smallMarginBottom,
  },
});

const Input: React.FC<Props> = (props: Props) => {
  const getValid = (text: string): boolean => {
    const requiredCheck = !props.required || !!text.length;
    const dynamicCheck = !props.validation || props.validation(text);
    const mustMatchCheck = !props.mustMatch || value === props.mustMatch;
    return requiredCheck && dynamicCheck && mustMatchCheck;
  };

  const getValidityBackground = (): ViewStyle => {
    if (!dirty || focused) return {};
    return valid ? Styles.validBackground : Styles.invalidBackground;
  };

  const getValidityForeground = (): TextStyle => {
    if (!dirty || focused) return {};
    return valid ? Styles.validForeground : Styles.invalidForeground;
  };

  const [value, setValue] = useState(props.initialValue || "");
  const [valid, setValid] = useState(getValid(""));
  const [dirty, setDirty] = useState(
    props.dirtyOnInitialValue
      ? props.initialValue && props.initialValue.length
      : false
  );
  const [focused, setFocused] = useState(false);
  const [secureText, setSecureText] = useState(!!props.secure);

  useEffect(() => {
    if (props.onChangeText) props.onChangeText(value);
    setValid(getValid(value));
  }, [value]);

  useEffect(() => {
    if (valid && props.onValid) props.onValid();
    if (!valid && props.onInvalid) props.onInvalid();
  }, [valid]);

  useEffect(() => {
    setValid(getValid(value));
  }, [props.mustMatch]);

  const derivedProps: Props = {
    ...props,
    renderErrorMessage: false,
    containerStyle: [
      Styles.background,
      props.hideValidityFeedback ? {} : getValidityBackground(),
      props.containerStyle || {},
    ],
    inputContainerStyle: [
      Styles.inputContainerStyle,
      props.inputContainerStyle,
    ],
    inputStyle: [
      Styles.inputStyle,
      props.multiline ? {} : { height: 51 },
      props.hideValidityFeedback ? {} : getValidityForeground(),
      { textAlignVertical: props.multiline ? "top" : "center" },
      props.inputStyle,
    ],
    placeholderTextColor: "#9A9A9A",
    onChangeText: (text) => {
      setValue(text);
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
    <>
      <ElementsInput
        value={value}
        ref={props.inputRef}
        {...derivedProps}
        errorMessage={undefined}
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
      {!valid && dirty && props.errorMessage && (
        <View style={Styles.errorMessageContainer}>
          <Body color="error" bold>
            {props.errorMessage}
          </Body>
        </View>
      )}
    </>
  );
};

export default Input;
