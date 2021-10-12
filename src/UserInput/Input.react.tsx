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
import Required from "./assets/Required";
import Icon from "../Common/Icon.react";
import Body from "../Typography/Body.react";
import { Caption } from "@src";

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
  description?: string;
  movePlaceholderOnInput?: boolean
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
  invalidBackground: {
    borderColor: Colors.RED_200,
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
  const getValid = (text: string): boolean => {
    const requiredCheck = !props.required || !!text.length;
    const dynamicCheck = !props.validation || props.validation(text);
    const mustMatchCheck = !props.mustMatch || value === props.mustMatch;
    return requiredCheck && dynamicCheck && mustMatchCheck;
  };

  const getValidityBackground = (): ViewStyle => {
    if (!dirty || valid) return {};
    return focused ? Styles.invalidFocusedBackground : Styles.invalidBackground;
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
      (props.placeholder && !!props.movePlaceholderOnInput && value !== "") ? {
        marginTop: 8,
        marginBottom: -8,
      } : {},
      value !== "" ? {
        color: Colors.GRAY_700
      } : { color: Colors.BLACK_45 },
      Styles.inputStyle,

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
      {props.placeholder && !!props.movePlaceholderOnInput && value !== "" && <View style={{ paddingLeft: 8, marginBottom: -16, zIndex: 999 } /*Negative margin places text inside input window*/}>
        <Caption size={3} style={!dirty || valid ? Styles.placeholderSmall : Styles.placeholderSmallInvalid}>
          {props.placeholder}
        </Caption>
      </View>}
      <ElementsInput
        value={value}
        style={props.multiline ? {} : { height: 44 }}
        ref={props.inputRef}
        inputContainerStyle={{ marginTop: 20 }}
        {...derivedProps}
        errorMessage={undefined}
        leftIcon={props.required && <Icon svg={Required} width={10} height="8px" />}
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
      {props.description && (
        <View>
          <Caption size={3} style={{ color: Colors.BLACK_65 }}>
            {props.description}
          </Caption>
        </View>
      )
      }
      {
        !valid && props.errorMessage && (
          <View style={Styles.errorMessageContainer}>
            <Caption size={3} color={Colors.RED_600} bold>
              {props.errorMessage}
            </Caption>
          </View>
        )
      }
    </>
  );
};

export default Input;
