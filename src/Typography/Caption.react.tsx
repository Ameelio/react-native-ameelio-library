import React from "react";
import { Text } from "react-native";
import {
  calculateColor,
  CustomTextProps,
  SCALE_CONSTANT,
  TypographyColors,
} from "./Constants";

interface Props extends CustomTextProps {
  size?: 1 | 2;
}

const Caption: React.FC<Props> = ({
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
  if (!finalSize)
    switch (size) {
      case 1:
        finalSize = 13 * SCALE_CONSTANT;
        break;
      case 2:
      default:
        finalSize = 11 * SCALE_CONSTANT;
        break;
    }

  const fontFamily = "Poppins_500Medium";

  let colorType: TypographyColors =
    color || (size === 1 ? "primary" : "secondary");
  let calculatedColor = calculateColor(colorType);

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

export default Caption;
