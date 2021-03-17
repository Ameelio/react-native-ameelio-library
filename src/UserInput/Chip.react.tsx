import React from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import * as Colors from "../Brand/Colors";
import { Spacing, GlobalStyles } from "../Styles";
import Body from "../Typography/Body.react";

interface Props {
  children?: string | string[];
  style?: StyleProp<ViewStyle>;
  selected: boolean;
  onPress?: (() => void) | (() => Promise<void>);
  selectedColors?: {
    fg: string;
    bg: string;
    border: string;
  };
  unselectedColors?: {
    fg: string;
    bg: string;
    border: string;
  };
}

const Styles = StyleSheet.create({
  timeChipBackground: {
    borderWidth: 2,
    ...Spacing.smallMarginRight,
    ...Spacing.padding,
    ...GlobalStyles.rounded,
    justifyContent: "center",
    alignItems: "center",
  },
});

const Chip: React.FC<Props> = ({
  children,
  selected,
  onPress,
  selectedColors,
  unselectedColors,
  style,
}) => {
  const backgroundStyle = {
    backgroundColor: selected ? selectedColors?.bg : unselectedColors?.bg,
    borderColor: selected ? selectedColors?.border : unselectedColors?.border,
  };
  const foregroundStyle = {
    color: selected ? selectedColors?.fg : unselectedColors?.fg,
  };

  return (
    <TouchableOpacity
      style={[Styles.timeChipBackground, backgroundStyle, style]}
      onPress={onPress}
    >
      <Body size={3} style={foregroundStyle}>
        {children}
      </Body>
    </TouchableOpacity>
  );
};

Chip.defaultProps = {
  selectedColors: {
    bg: Colors.SECONDARY_500,
    fg: Colors.WHITE,
    border: Colors.SECONDARY_500,
  },
  unselectedColors: {
    bg: Colors.SECONDARY_100,
    fg: Colors.BLACK,
    border: Colors.SECONDARY_200,
  },
};

export default Chip;
