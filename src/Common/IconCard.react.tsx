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
  subtitle: string;
  svg: string;
  onPress?: (() => void) | (() => Promise<void>);
  style?: StyleProp<ViewStyle>;
}

const Styles = StyleSheet.create({
  background: {
    ...GlobalStyles.rounded,
    ...GlobalStyles.shadow,
    ...GlobalStyles.centered,
    ...Spacing.largePadding,
    ...Spacing.marginVertical,
    flexDirection: "row",
    backgroundColor: Colors.WHITE,
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
  subtitle,
  svg,
  onPress,
  style,
}: Props) => {
  return (
    <TouchableOpacity style={[Styles.background, style]} onPress={onPress}>
      <View style={Styles.iconBackground}>
        <Icon svg={svg} />
      </View>
      <View style={{ flex: 1 }}>
        <Caption size={1} fontSize={24} color="dark">
          {title}
        </Caption>
        <Body size={2} bold>
          {subtitle}
        </Body>
      </View>
      <View style={Styles.arrowContainer}>
        <Icon svg={ArrowForward} />
      </View>
    </TouchableOpacity>
  );
};

export default IconCard;
