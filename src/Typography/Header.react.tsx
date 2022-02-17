import React from "react";
import { Text, TextStyle } from "react-native";
import {
  calculateColor,
  CustomTextProps,
  SCALE_CONSTANT,
  TypographyColors,
} from "./Constants";

export interface HeaderProps extends CustomTextProps {
  size?: 1 | 2 | 3 | 4 | 5;
}

const Header: React.FC<HeaderProps> = ({
  size,
  style,
  children,
  adjustSize,
  numLines,
  align,
  fontSize,
  color,
}: HeaderProps) => {
  let finalSize = fontSize;
  if (!finalSize) {
    switch (size) {
      case 1:
        finalSize = 20 * SCALE_CONSTANT;
        break;
      case 2:
        finalSize = 18 * SCALE_CONSTANT;
        break;
      case 3:
        finalSize = 16 * SCALE_CONSTANT;
        break;
      case 4:
        finalSize = 14 * SCALE_CONSTANT;
        break;
      case 5:
      default:
        finalSize = 12 * SCALE_CONSTANT;
        break;
    }
  }

  let fontFamily = "Inter_700Bold";
  switch (size) {
    case 1:
      fontFamily = "Inter_700Bold";
      break;
    case 2:
      fontFamily = "Inter_600SemiBold";
      break;
    case 3:
      fontFamily = "Inter_600SemiBold";
    case 4:
      fontFamily = "Inter_600SemiBold";
    case 5:
      fontFamily = "Inter_600SemiBold";
      break;
  }

  let calculatedColor = calculateColor(color || "dark");

  return (
    <Text
      style={[
        {
          fontSize: finalSize,
          // fontFamily,
          textAlign: align,
          color: calculatedColor,
        },
        style,
      ]}
      adjustsFontSizeToFit={adjustSize}
      numberOfLines={numLines}
    >
      {children}
    </Text>
  );
};

export default Header;
