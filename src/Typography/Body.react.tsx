import React from 'react';
import { Text, TextStyle } from 'react-native';
import { SCALE_CONSTANT } from './Constants';

interface Props {
  size?: 1 | 2 | 3;
  style?: TextStyle;
  bold?: boolean;
  children: string;
}

const Body: React.FC<Props> = ({ size, style, bold, children }: Props) => {
  let fontSize = 16;
  switch (size) {
    case 1:
      fontSize = 16 * SCALE_CONSTANT;
      break;
    case 2:
      fontSize = 14 * SCALE_CONSTANT;
      break;
    case 3:
      fontSize = 12 * SCALE_CONSTANT;
      break;
  }

  const fontFamily = bold ? 'Poppins_600SemiBold' : 'Poppins_400Regular';

  return <Text style={[{ fontSize, fontFamily }, style]}>{children}</Text>;
};

export default Body;
