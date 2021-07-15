import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { Colors, Spacing } from "../Styles";
import Header from "../Typography/Header.react";

interface Props {
  size?: number;
  initials: string;
  backgroundColor?: string;
  textColor?: string;
  style?: StyleProp<ViewStyle>;
}

const DEFAULT_SIZE = 40;

const Initials: React.FC<Props> = ({
  size,
  initials,
  backgroundColor,
  textColor,
  style,
}) => {
  const backgroundStyle: ViewStyle = {
    justifyContent: "center",
    alignItems: "center",
    width: size || DEFAULT_SIZE,
    height: size || DEFAULT_SIZE,
    borderRadius: (size || DEFAULT_SIZE) / 2,
    backgroundColor: backgroundColor || Colors.BLUE_700,
  };

  return (
    <View style={[backgroundStyle, style]}>
      <Header
        fontSize={100}
        numLines={1}
        adjustSize
        color={textColor || "white"}
        align="center"
        style={Spacing.padding}
      >
        {initials.toUpperCase()}
      </Header>
    </View>
  );
};

export default Initials;
