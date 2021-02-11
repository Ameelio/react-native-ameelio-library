import React from 'react';
import { View, ViewStyle } from 'react-native';
import { marginVertical } from './Spacing';

interface Props {
  style?: ViewStyle;
  margin?: boolean;
}

const Divider: React.FC<Props> = ({ style, margin }: Props) => {
  return (
    <View
      style={[
        { width: '100%', height: 1, backgroundColor: '#e5e5e5' },
        margin ? marginVertical : {},
        style,
      ]}
    />
  );
};

Divider.defaultProps = {
  margin: true,
};

export default Divider;
