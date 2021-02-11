import React from 'react';
import { Text, TextStyle } from 'react-native';
import { SCALE_CONSTANT } from './Constants';

interface Props {
  size?: 1 | 2 | 3 | 4 | 5;
  style?: TextStyle;
  children: string;
}

const Header: React.FC<Props> = ({ size, style, children }: Props) => {
  let fontSize = 20;
  switch (size) {
    case 1:
      fontSize = 20 * SCALE_CONSTANT;
      break;
    case 2:
      fontSize = 18 * SCALE_CONSTANT;
      break;
    case 3:
      fontSize = 16 * SCALE_CONSTANT;
      break;
    case 4:
      fontSize = 14 * SCALE_CONSTANT;
      break;
    case 5:
      fontSize = 12 * SCALE_CONSTANT;
      break;
  }

  let fontFamily = 'Poppins_700Bold';
  switch (size) {
    case 1:
      fontFamily = 'Poppins_700Bold';
      break;
    case 2:
    case 3:
    case 4:
    case 5:
      fontFamily = 'Poppins_600SemiBold';
      break;
  }

  return <Text style={[{ fontSize, fontFamily }, style]}>{children}</Text>;
};

export default Header;
