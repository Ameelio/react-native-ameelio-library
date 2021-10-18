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
  rank?: "primary" | "secondary" | "tertiary";
  children?: string | string[];
  blocking?: boolean;
  onPress?: (() => void) | (() => Promise<void>);
  nav?: boolean;
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

  },
  secondaryBackground: {
    backgroundColor: Colors.WHITE,
  },
  tertiaryBackground: {
    backgroundColor: Colors.WHITE,
  },
  primaryDisabledBackground: {
    backgroundColor: Colors.RED_200,
  },
  secondaryDisabledBackground: {
    backgroundColor: Colors.WHITE,

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
  const rank = props.rank || "primary";

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
    if (props.disabled) {
      return rank === "primary"
        ? Styles.primaryDisabledBackground : Styles.secondaryDisabledBackground;
    } else {
      return rank === "primary"
        ? Styles.primaryBackground : rank === "secondary" ? Styles.secondaryBackground
          : Styles.tertiaryBackground;
    }
  };
  const shadow = props.shadow || ((rank === "primary" || rank === "secondary") && !props.noGrow); //noGrow disables the shadow by default, but it can be re-enabled with the shadow property.
  const derivedProps: ButtonProps = {
    ...props,
    containerStyle: [
      Styles.trueBackground,
      props.noGrow ? { width: undefined } : { paddingHorizontal: 16 },
      props.nav ? { borderRadius: 19, height: 40 } : {},
      props.containerStyle,
    ],
    buttonStyle: [
      Styles.background,
      getBackgroundStyle(),
      props.noGrow ? { ...Spacing.paddingVertical, ...Spacing.largePaddingHorizontal, width: undefined } : {},
      props.nav ? { borderRadius: 19, height: 40 } : {},
      props.buttonStyle,
      shadow ? { ...GlobalStyles.shadow } : {},

    ],
    disabledStyle: rank === "primary" ? Styles.primaryDisabledBackground : Styles.secondaryDisabledBackground,
    disabledTitleStyle: rank === "primary" ? { color: Colors.WHITE } : { color: Colors.RED_200 },
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
      rank === "primary" ? Styles.primaryForeground : Styles.secondaryForeground,
      props.titleStyle,
    ],
    loading: blocked || props.loading,
    TouchableComponent: TouchableOpacity,
  };

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
