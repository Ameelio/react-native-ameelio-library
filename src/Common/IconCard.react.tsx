import ArrowForward from "./assets/ArrowForward";
import { GlobalStyles, Spacing } from "../Styles";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import * as Colors from "../Brand/Colors";
import Icon from "./Icon.react";
import Caption from "../Typography/Caption.react";
import Body from "../Typography/Body.react";

interface Props {
  title: string;
  numTitleLines?: number;
  subtitle: string;
  subtitleBold?: boolean;
  numSubtitleLines?: number;
  svg: string;
  onPress?: (() => void) | (() => Promise<void>);
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

const Styles = StyleSheet.create({
  background: {
    ...GlobalStyles.rounded,
    ...GlobalStyles.shadow,
    ...GlobalStyles.centered,
    ...Spacing.largePadding,
    ...Spacing.marginVertical,
    flexDirection: "row",
    backgroundColor: Colors.WHITE_BACKGROUND,
  },
  disabledMask: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
  },
  iconBackground: {
    width: 36,
    height: 36,
    ...Spacing.largeMarginRight,
  },
  arrowContainer: {
    width: 15,
    height: 30,
  },
});

const IconCard: React.FC<Props> = ({
  title,
  numTitleLines,
  subtitle,
  subtitleBold,
  numSubtitleLines,
  svg,
  onPress,
  style,
  disabled,
}: Props) => {
  return (
    <TouchableOpacity
      style={[Styles.background, style]}
      onPress={onPress}
      disabled={disabled}
    >
      <View style={Styles.iconBackground}>
        <Icon svg={svg} />
      </View>
      <View style={{ flex: 1 }}>
        <Caption
          size={1}
          fontSize={24}
          color="dark"
          numLines={numTitleLines}
          adjustSize={!!numTitleLines}
        >
          {title}
        </Caption>
        <Body
          size={2}
          bold={subtitleBold}
          numLines={numSubtitleLines}
          adjustSize={!!numSubtitleLines}
        >
          {subtitle}
        </Body>
      </View>
      <View style={Styles.arrowContainer}>
        <Icon svg={ArrowForward} />
      </View>
      {disabled && <View style={Styles.disabledMask} />}
    </TouchableOpacity>
  );
};

export default IconCard;
