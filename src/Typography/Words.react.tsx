import React from "react";
import { Text } from "react-native";
import {
  calculateColor,
  CustomTextProps,
  SCALE_CONSTANT,
  TypographyColors,
} from "./Constants";

export interface WordsProps extends CustomTextProps {
  weight: "regular" | "medium" | "semibold" | "bold";
  italic?: boolean;
}

const Words: React.FC<WordsProps> = ({
  weight,
  italic,
  style,
  children,
  adjustSize,
  numLines,
  align,
  fontSize,
}) => {
  const finalSize = fontSize ? fontSize : 14 * SCALE_CONSTANT;

  let colorType: TypographyColors = "default";
  let calculatedColor = calculateColor(colorType);

  return (
    <Text
      style={[
        {
          fontSize: finalSize,
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

export default Words;
