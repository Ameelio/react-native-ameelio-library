import { Spacing } from "../Styles";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import * as Colors from "../Brand/Colors";
import Body from "../Typography/Body.react";
import DynamicArrowForward from "./assets/DynamicArrowForward";
import DynamicX from "./assets/DynamicX";
import Icon from "./Icon.react";

// This look janks, but is needed to trick typescript into allowing any string
// for color while still preserving autocomplete for X or next icons
type CustomIcon = string & { dummy?: never };

export type TopbarTypes = "error" | "warning" | "success" | "info";

export interface TopbarInfo {
  type: TopbarTypes;
  title: string;
  cta: string;
  onPress?: (() => void) | (() => Promise<void>);
  rightIcon?: "arrow" | "X" | CustomIcon;
  rightIconContainerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
}

const mapTypeToColors: Record<TopbarTypes, { bg: string; fg: string }> = {
  error: {
    bg: Colors.RED_100,
    fg: Colors.RED_600,
  },
  warning: {
    bg: Colors.YELLOW_100,
    fg: Colors.YELLOW_600,
  },
  success: {
    bg: Colors.GREEN_100,
    fg: Colors.GREEN_600,
  },
  info: {
    bg: Colors.BLUE_600,
    fg: Colors.WHITE,
  },
};

const Styles = StyleSheet.create({
  background: {
    position: "absolute",
    top: 0,
    width: "100%",
    flexDirection: "row",
    ...Spacing.paddingBottom,
    ...Spacing.largePaddingHorizontal,
    ...Spacing.largePaddingTop,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  iconContainer: {
    alignSelf: "flex-end",
    ...Spacing.marginBottom,
  },
  arrowIconContainer: {
    width: 16,
    height: 24,
  },
  XIconContaner: {
    width: 24,
    height: 24,
  },
});

const Topbar: React.FC<TopbarInfo> = ({
  type,
  title,
  cta,
  onPress,
  rightIcon,
  rightIconContainerStyle,
  style,
}) => {
  const colors = mapTypeToColors[type];
  let icon = rightIcon || "arrow";
  switch (icon) {
    case "arrow":
      icon = DynamicArrowForward(colors.fg);
      break;
    case "X":
      icon = DynamicX(colors.fg);
      break;
  }

  return (
    <TouchableOpacity
      style={[Styles.background, { backgroundColor: colors.bg }, style]}
      onPress={onPress}
    >
      <View style={Styles.textContainer}>
        <Body size={2} color={colors.fg}>
          {title}
        </Body>
        <Body size={2} color={colors.fg} bold>
          {cta}
        </Body>
      </View>
      <View
        style={[
          Styles.iconContainer,
          !rightIcon || rightIcon === "arrow" ? Styles.arrowIconContainer : {},
          rightIcon === "X" ? Styles.XIconContaner : {},
          rightIconContainerStyle,
        ]}
      >
        <Icon svg={icon} />
      </View>
    </TouchableOpacity>
  );
};

export default Topbar;
