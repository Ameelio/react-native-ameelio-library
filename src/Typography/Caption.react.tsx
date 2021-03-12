import React from "react";
import { Text } from "react-native";
import { calculateColor, CustomTextProps, SCALE_CONSTANT } from "./Constants";

export interface CaptionProps extends CustomTextProps {
  size?: 1 | 2;
}

const Caption: React.FC<CaptionProps> = ({
  size,
  style,
  children,
  adjustSize,
  numLines,
  align,
  fontSize,
  color,
}) => {
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

  let calculatedColor = calculateColor(color || "default");

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
