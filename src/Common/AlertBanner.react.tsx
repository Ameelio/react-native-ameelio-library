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

export type AlertBannerTypes = "error" | "warning" | "success" | "info";

export interface AlertBannerInfo {
  type: AlertBannerTypes;
  title: string;
  cta: string;
  onPress?: (() => void) | (() => Promise<void>);
  rightIcon?: "arrow" | "X" | CustomIcon;
  rightIconContainerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
}

const mapTypeToColors: Record<AlertBannerTypes, { bg: string; fg: string }> = {
  error: {
    bg: Colors.RED_100,
    fg: Colors.RED_600,
  },
  warning: {
    bg: Colors.YELLOW_100,
    fg: Colors.YELLOW_500,
  },
  success: {
    bg: Colors.GREEN_100,
    fg: Colors.GREEN_600,
  },
  info: {
    bg: Colors.BLUE_500,
    fg: Colors.WHITE,
  },
};

const Styles = StyleSheet.create({
  background: {
    position: "absolute",
    width: "100%",
    height: 70,
    flexDirection: "row",
    ...Spacing.paddingBottom,
    ...Spacing.largePaddingHorizontal,
    ...Spacing.largePaddingTop,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  iconContainer: {
    alignSelf: "flex-end",
    ...Spacing.marginBottom,
  },
  arrowIconContainer: {
    width: 10,
    height: 20,
  },
  XIconContaner: {
    width: 15,
    height: 15,
  },
});

const AlertBanner: React.FC<AlertBannerInfo> = ({
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
        {!!cta && <Body size={2} color={colors.fg} bold>
          {cta}
        </Body>}
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

export default AlertBanner;
