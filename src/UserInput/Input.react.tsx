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
import EyeHidden from "./assets/SecureEyeHidden";
import EyeShowing from "./assets/SecureEyeShowing";
import Icon from "../Common/Icon.react";
import Caption from "../Typography/Caption.react";

export type BaseInput = ElementsInput;

export const LINE_HEIGHT = 20;
export const INPUT_PADDING = 12;

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
  description?: string;
  rows?: number;
}

const Styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.WHITE,
    ...Spacing.paddingHorizontal,
    ...Spacing.smallMarginBottom,
    ...GlobalStyles.rounded,
    borderWidth: 1,
    borderColor: Colors.BLACK_06,
  },
  disabledBackground: {
    backgroundColor: Colors.BLACK_06,
  },
  invalidBackground: {
    borderColor: Colors.RED_200,
  },
  focusedBackground: {
    borderColor: Colors.GRAY_700
  },
  invalidFocusedBackground: {
    borderColor: Colors.RED_600,
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
  },
  inputStyle: {
    fontFamily: "Inter_400Regular",
    fontSize: 16,
    lineHeight: LINE_HEIGHT,
    paddingTop: INPUT_PADDING,
    paddingBottom: INPUT_PADDING,
    textAlignVertical: "top"
  },
  errorMessageContainer: {
    width: "100%",
    ...Spacing.smallMarginBottom,
  },
  placeholderSmall: {
    color: Colors.GRAY_400
  },
  placeholderSmallInvalid: {
    color: Colors.RED_600
  }
});

const Input: React.FC<Props> = (props: Props) => {
  const rows = props.rows || 1;
  const getValid = (text: string): boolean => {
    const requiredCheck = !props.required || !!text.length;
    const dynamicCheck = !props.validation || props.validation(text);
    const mustMatchCheck = !props.mustMatch || value === props.mustMatch;
    return requiredCheck && dynamicCheck && mustMatchCheck;
  };

  const getBackground = (): ViewStyle => {
    if (props.disabled) {
      return Styles.disabledBackground
    } else if (!dirty || valid || props.hideValidityFeedback) {
      return focused ? Styles.focusedBackground : {};
    } else {
      return focused ? Styles.invalidFocusedBackground : Styles.invalidBackground;
    }
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
  const [showRequired, setShowRequired] = useState(false);

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
    placeholder: focused ? "" : props.placeholder,
    renderErrorMessage: false,
    containerStyle: [
      Styles.background,
      getBackground(),
      props.containerStyle || {},
    ],
    inputContainerStyle: [
      Styles.inputContainerStyle,
      props.inputContainerStyle,
    ],
    inputStyle: [
      (props.placeholder && (focused || value !== "")) ? {
        marginTop: 8,
        marginBottom: -8,
      } : {},
      value !== "" ? {
        color: Colors.GRAY_700
      } : { color: Colors.BLACK_45 },
      Styles.inputStyle,
      props.inputStyle,
      { height: LINE_HEIGHT * rows }
    ],
    placeholderTextColor: "#9A9A9A",
    onChangeText: (text) => {
      setValue(text);
      setShowRequired(!!props.required && text === "");
    },
    onFocus: (e) => {
      setDirty(true);
      setFocused(true);
      if (props.onFocus) props.onFocus(e);
    },
    onBlur: (e) => {
      setFocused(false);
      if (props.required && value === "") {
        setShowRequired(true);
      }
      if (props.onBlur) props.onBlur(e);
    },
  };

  return (
    <>
      {props.placeholder && (focused || value !== "") && <View style={{ paddingLeft: 8, marginBottom: -16, zIndex: 999 } /*Negative margin places text inside input window*/}>
        <Caption size={3} style={!dirty || valid ? Styles.placeholderSmall : Styles.placeholderSmallInvalid}>
          {props.placeholder}
        </Caption>
      </View>}
      <ElementsInput
        value={value}
        style={{ height: LINE_HEIGHT * rows + 2 * INPUT_PADDING }}
        ref={props.inputRef}
        inputContainerStyle={{ marginTop: 20 }}
        {...derivedProps}
        errorMessage={undefined}
        rightIcon={
          props.secure ? (
            <TouchableOpacity
              onPress={() => {
                setSecureText((val) => !val);
              }}
            >
              <Icon svg={secureText ? EyeHidden : EyeShowing} width={25} height="100%" />
            </TouchableOpacity>
          ) : undefined
        }
        secureTextEntry={secureText}
      />
      {valid && props.description && (
        <View>
          <Caption size={3} style={{ color: Colors.BLACK_65 }}>
            {props.description}
          </Caption>
        </View>
      )}
      {!valid && props.errorMessage && (
        <View style={Styles.errorMessageContainer}>
          <Caption size={3} color={Colors.RED_600} bold>
            {props.errorMessage}
          </Caption>
        </View>
      )}
      {showRequired && (
        <View style={Styles.errorMessageContainer}>
          <Caption size={3} color={Colors.RED_600} bold>
            This field is required
          </Caption>
        </View>
      )}
    </>
  );
};

export default Input;
