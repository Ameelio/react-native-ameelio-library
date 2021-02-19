import React from "react";
import { Text, TextStyle } from "react-native";
import { CustomTextProps, SCALE_CONSTANT } from "./Constants";

interface Props extends CustomTextProps {
  size?: 1 | 2 | 3 | 4 | 5;
}

const Header: React.FC<Props> = ({
  size,
  style,
  children,
  adjustSize,
  numLines,
  align,
  fontSize,
  color,
}: Props) => {
  let finalSize = fontSize;
  if (!finalSize) {
    switch (size) {
      case 1:
        finalSize = 40 * SCALE_CONSTANT;
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

  let fontFamily = "Poppins_700Bold";
  switch (size) {
    case 1:
      fontFamily = "Poppins_700Bold";
      break;
    case 2:
    case 3:
    case 4:
    case 5:
      fontFamily = "Poppins_600SemiBold";
      break;
  }

  return (
    <Text
      style={[
        { fontSize: finalSize, fontFamily, textAlign: align, color },
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
