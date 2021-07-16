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
  noGrowContainer?: StyleProp<ViewStyle>;
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
    height: 50,
  },
  primaryBackground: {
    backgroundColor: Colors.BLUE_400,
    borderColor: Colors.BLUE_400,
  },
  secondaryBackground: {
    backgroundColor: Colors.WHITE_BACKGROUND,
    borderColor: Colors.GRAY_100,
  },
  disabledBackground: {
    backgroundColor: Colors.BLUE_200,
    borderColor: Colors.BLUE_200,
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
    color: Colors.BLUE_400,
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
      props.noGrow ? { width: undefined } : { width: "100%" },
      props.nav ? { borderRadius: 19, height: 40 } : {},
      props.containerStyle,
    ],
    buttonStyle: [
      Styles.background,
      getBackgroundStyle(),
      props.noGrow ? { width: undefined } : {},
      props.nav ? { borderRadius: 19, height: 40 } : {},
      props.buttonStyle,
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
        fontSize: props.nav ? 15 : 18,
        fontFamily: "Poppins_600SemiBold",
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
            Styles.secondaryForeground,
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
