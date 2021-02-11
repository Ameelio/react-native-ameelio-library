import React from 'react';
import { View } from 'react-native';
import { Logo } from 'react-native-ameelio-library';

const BrandDemoScreen = () => {
  return (
    <View>
      <Logo type="red" width={100} height={100} />
      <Logo type="blue" width={100} height={100} />
      <Logo type="ameelio" width={100} height={100} />
    </View>
  );
};

export default BrandDemoScreen;
