import React from "react";
import { Text } from "react-native";
import {
  calculateColor,
  CustomTextProps,
  SCALE_CONSTANT,
  TypographyColors,
} from "./Constants";

export interface BodyProps extends CustomTextProps {
  size?: 1 | 2 | 3;
  bold?: boolean;
}

const Body: React.FC<BodyProps> = ({
  size,
  style,
  children,
  adjustSize,
  numLines,
  align,
  fontSize,
  color,
  bold,
}) => {
  let finalSize = fontSize;
  if (!finalSize) {
    switch (size) {
      case 1:
        finalSize = 16 * SCALE_CONSTANT;
        break;
      case 2:
        finalSize = 14 * SCALE_CONSTANT;
        break;
      case 3:
      default:
        finalSize = 12 * SCALE_CONSTANT;
        break;
    }
  }

  let fontFamily = bold ? "Inter_400Regular" : "Poppins_400Regular";
  switch (size) {
    case 1:
      fontFamily = "Inter_400Regular";
      break;
    case 2:
      fontFamily = "Inter_600SemiBold";
      break;
    case 3:
      fontFamily = "Poppins_400Regular";
      break;
  }

  let calculatedColor = calculateColor(color || "secondary");

  return (
    <Text
      style={[
        {
          fontSize: finalSize,
          fontFamily,
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

export default Body;
