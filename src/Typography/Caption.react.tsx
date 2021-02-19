import React from "react";
import { Text } from "react-native";
import { CustomTextProps, SCALE_CONSTANT } from "./Constants";

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

  return (
    <Text
      style={[
        {
          fontSize: finalSize,
          fontFamily,
          textAlign: align,
          color,
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
