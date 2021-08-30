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

  let fontFamily = "Poppins_400Regular";

  if (weight === "regular")
    fontFamily = italic ? "Poppins_400Regular_Italic" : "Poppins_400Regular";
  else if (weight === "medium")
    fontFamily = italic ? "Poppins_500Medium_Italic" : "Poppins_500Medium";
  else if (weight === "semibold")
    fontFamily = italic ? "Poppins_600SemiBold_Italic" : "Poppins_600SemiBold";
  else if (weight === "bold")
    fontFamily = italic ? "Poppins_700Bold_Italic" : "Poppins_700Bold";

  let colorType: TypographyColors = "default";
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
