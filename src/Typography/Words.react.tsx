import React from 'react';
import { Text, TextStyle } from 'react-native';
import { SCALE_CONSTANT } from './Constants';

interface Props {
  regular?: boolean;
  medium?: boolean;
  semibold?: boolean;
  bold?: boolean;
  italic?: boolean;
  style?: TextStyle;
  size?: number;
  children: string;
}

const Words: React.FC<Props> = ({
  regular,
  medium,
  semibold,
  bold,
  italic,
  style,
  size,
  children,
}: Props) => {
  const fontSize = (size ? size : 14) * SCALE_CONSTANT;

  let fontFamily = 'Poppins_400Regular';

  if (regular)
    fontFamily = italic ? 'Poppins_400Regular_Italic' : 'Poppins_400Regular';
  else if (medium)
    fontFamily = italic ? 'Poppins_500Medium_Italic' : 'Poppins_500Medium';
  else if (semibold)
    fontFamily = italic ? 'Poppins_600SemiBold_Italic' : 'Poppins_600SemiBold';
  else if (bold)
    fontFamily = italic ? 'Poppins_700Bold_Italic' : 'Poppins_700Bold';

  return <Text style={[{ fontSize, fontFamily }, style]}>{children}</Text>;
};

export default Words;
