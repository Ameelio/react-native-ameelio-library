import React, { useEffect, useRef, useState } from "react";
import {
  Button as ElementsButton,
  ButtonProps as ElementsButtonProps,
} from "react-native-elements";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { GlobalStyles, Spacing } from "../Styles";
import * as Colors from "../Brand/Colors";
import Header from "../Typography/Header.react";

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

const Styles = StyleSheet.create({
  trueBackground: {
    width: "100%",
    ...Spacing.paddingBottom,
    ...Spacing.smallPaddingHorizontal,
    overflow: 'hidden'
  },
  background: {
    width: "100%",
    ...GlobalStyles.rounded,
    height: 50,
  },
  primaryBackground: {
    backgroundColor: Colors.RED_400,
    ...GlobalStyles.shadow,

  },
  secondaryBackground: {
    backgroundColor: Colors.WHITE_BACKGROUND,
    ...GlobalStyles.shadow,
  },
  primaryDisabledBackground: {
    backgroundColor: Colors.RED_200,
  },
  secondaryDisabledBackground: {
    backgroundColor: Colors.WHITE_BACKGROUND,

  },
  linkBackground: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    ...Spacing.padding,
  },
  primaryForeground: {
    color: Colors.WHITE,
  },
  secondaryForeground: {
    color: Colors.RED_400,
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
    if (props.disabled) return props.secondary ? Styles.secondaryDisabledBackground : Styles.primaryDisabledBackground;
    return props.secondary
      ? Styles.secondaryBackground
      : Styles.primaryBackground;
  };

  const derivedProps: ButtonProps = {
    ...props,
    containerStyle: [
      Styles.trueBackground,
      props.noGrow ? { width: undefined } : { width: "100%" },
      props.nav ? { borderRadius: 19, height: 40 } : {},
      props.containerStyle,
    ],
    buttonStyle: [
      Styles.background,
      getBackgroundStyle(),
      props.noGrow ? { ...Spacing.paddingVertical, ...Spacing.largePaddingHorizontal, width: undefined } : {},
      props.nav ? { borderRadius: 19, height: 40 } : {},
      props.buttonStyle,
    ],
    disabledStyle: props.secondary ? Styles.secondaryDisabledBackground : Styles.primaryDisabledBackground,
    disabledTitleStyle: props.secondary ? { color: Colors.RED_200 } : { color: Colors.WHITE },
    onPress: async () => {
      if (blocked) return;
      if (props.blocking) safelySetBlocked(true);
      if (props.onPress) await props.onPress();
      if (props.blocking) safelySetBlocked(false);
    },
    titleStyle: [
      {
        fontSize: props.nav ? 15 : 18,
        fontFamily: "Inter_600SemiBold",
      },
      props.secondary ? Styles.secondaryForeground : Styles.primaryForeground,
      props.titleStyle,
    ],
    loading: blocked || props.loading,
    TouchableComponent: TouchableOpacity,
  };

  if (props.link) {
    return (
      <TouchableOpacity onPress={props.onPress} style={Styles.linkBackground}>
        <Header
          size={5}
          fontSize={props.linkSize}
          numLines={1}
          adjustSize
          style={[
            props.disabled ? { color: Colors.RED_200 } : Styles.secondaryForeground,
            props.noGrow ? { width: undefined } : {},
          ]}
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

  const fundamentalButton = <ElementsButton title={text} {...derivedProps} />;

  if (props.noGrow)
    return (
      <View style={[{ flexDirection: "row" }, props.noGrowContainer]}>
        <View style={{ flex: 1 }}></View>
        {fundamentalButton}
        <View style={{ flex: 1 }}></View>
      </View>
    );

  return fundamentalButton;
};

export default Button;
