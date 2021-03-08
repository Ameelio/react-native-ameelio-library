import React, { useEffect, useRef, useState } from "react";
import {
  Button as ElementsButton,
  ButtonProps as ElementsButtonProps,
} from "react-native-elements";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { GlobalStyles, Spacing } from "../Styles";
import * as Colors from "../Brand/Colors";
import Header from "../Typography/Header.react";

export interface ButtonProps extends ElementsButtonProps {
  title?: string;
  secondary?: boolean;
  ignorable?: boolean;
  ignoreText?: string | string[];
  onIgnore?: (() => void) | (() => Promise<void>);
  children?: string | string[];
  blocking?: boolean;
  onPress?: (() => void) | (() => Promise<void>);
  nav?: boolean;
  link?: boolean;
}

const Styles = StyleSheet.create({
  trueBackground: {
    width: "100%",
  },
  background: {
    width: "100%",
    ...Spacing.padding,
    ...GlobalStyles.rounded,
    borderWidth: 2,
  },
  primaryBackground: {
    backgroundColor: Colors.SECONDARY_500,
    borderColor: Colors.SECONDARY_500,
  },
  secondaryBackground: {
    backgroundColor: Colors.WHITE,
    borderColor: Colors.GRAY_200,
  },
  disabledBackground: {
    backgroundColor: Colors.SECONDARY_200,
    borderColor: Colors.SECONDARY_200,
  },
  ignoreableBackground: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    ...Spacing.padding,
  },
  primaryForeground: {
    color: Colors.WHITE,
  },
  secondaryForeground: {
    color: Colors.SECONDARY_500,
  },
});

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const mounted = useRef(true);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  const safelySetBlocked = (val: boolean) => {
    if (!mounted.current) return;
    setBlocked(val);
  };

  const getBackgroundStyle = () => {
    if (props.disabled) return Styles.disabledBackground;
    return props.secondary
      ? Styles.secondaryBackground
      : Styles.primaryBackground;
  };

  const derivedProps: ButtonProps = {
    ...props,
    containerStyle: [
      Styles.trueBackground,
      props.containerStyle,
      props.nav ? { borderRadius: 100, width: undefined } : {},
    ],
    buttonStyle: [
      Styles.background,
      getBackgroundStyle(),
      props.nav ? { borderRadius: 100 } : {},
    ],
    disabledStyle: Styles.disabledBackground,
    disabledTitleStyle: {
      color: Colors.GRAY_100,
    },
    onPress: async () => {
      if (blocked) return;
      if (props.blocking) safelySetBlocked(true);
      if (props.onPress) await props.onPress();
      if (props.blocking) safelySetBlocked(false);
    },
    titleStyle: [
      {
        fontSize: props.nav ? 14 : 18,
        fontFamily: "Poppins_600SemiBold",
      },
      props.secondary ? Styles.secondaryForeground : Styles.primaryForeground,
    ],
    loading: blocked || props.loading,
    loadingStyle: { width: 29, height: 29 },
    TouchableComponent: TouchableOpacity,
  };

  if (props.link) {
    return (
      <TouchableOpacity
        onPress={props.onPress}
        style={Styles.ignoreableBackground}
      >
        <Header
          size={5}
          numLines={1}
          adjustSize
          style={Styles.secondaryForeground}
        >
          {props.children}
        </Header>
      </TouchableOpacity>
    );
  }

  const text =
    props.children && typeof props.children !== "string"
      ? props.children.join("")
      : props.children;

  return (
    <>
      <ElementsButton title={text} {...derivedProps} />
      {props.ignorable && (
        <TouchableOpacity
          onPress={props.onIgnore}
          style={Styles.ignoreableBackground}
        >
          <Header
            size={5}
            numLines={1}
            adjustSize
            style={Styles.secondaryForeground}
          >
            {props.ignoreText}
          </Header>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Button;
