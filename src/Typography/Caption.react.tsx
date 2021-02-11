import React from 'react';
import { Text, TextStyle } from 'react-native';
import { SCALE_CONSTANT } from './Constants';

interface Props {
  size?: 1 | 2;
  style?: TextStyle;
  children: string;
}

const Caption: React.FC<Props> = ({ size, style, children }: Props) => {
  let fontSize = 13;
  switch (size) {
    case 1:
      fontSize = 13 * SCALE_CONSTANT;
      break;
    case 2:
      fontSize = 11 * SCALE_CONSTANT;
      break;
  }

  const fontFamily = 'Poppins_500Medium';

  return <Text style={[{ fontSize, fontFamily }, style]}>{children}</Text>;
};

export default Caption;
