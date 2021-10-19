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

  let fontFamily = "Inter_400Regular";

  if (weight === "regular")
    fontFamily = italic ? "Inter_400Regular_Italic" : "Inter_400Regular";
  else if (weight === "medium")
    fontFamily = italic ? "Inter_500Medium_Italic" : "Inter_500Medium";
  else if (weight === "semibold")
    fontFamily = italic ? "Inter_600SemiBold_Italic" : "Inter_600SemiBold";
  else if (weight === "bold")
    fontFamily = italic ? "Inter_700Bold_Italic" : "Inter_700Bold";

  let colorType: TypographyColors = "dark";
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

export default Words;
