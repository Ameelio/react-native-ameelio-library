import React, { useEffect, useRef, useState } from "react";
import {
  Button as ElementsButton,
  ButtonProps as ElementsButtonProps,
} from "react-native-elements";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
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
      props.nav ? { borderRadius: 19, height: 40 } : {},
      props.containerStyle,
    ],
    buttonStyle: [
      Styles.background,
      getBackgroundStyle(),
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
      <TouchableOpacity
        onPress={props.onPress}
        style={Styles.ignoreableBackground}
      >
        <Header
          size={5}
          fontSize={props.linkSize}
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

  return <ElementsButton title={text} {...derivedProps} />;
};

export default Button;
